<!-- NURI — FOOTER TRACKING (motion core)
     Paste into: builder → Tracking Code → Footer Tracking

     Loads GSAP, ScrollTrigger and Lenis one after another, then runs:
       - Lenis smooth scroll + smooth #anchor links
       - .nx-split   headings: words rise as they enter
       - .nx-reveal  single elements fade up
       - .nx-card / .nx-standard / .nx-quote  fade up in batches
       - .nx-magnetic  CTAs follow the pointer a little
     Each custom section registers its own extra motion with
       (window.NX = window.NX || []).push(function (nx) { ... })
     so section scripts can load before or after this one. -->
<script>
(function () {
  var LIBS = [
    'https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js',
    'https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/ScrollTrigger.min.js',
    'https://cdn.jsdelivr.net/npm/lenis@1.3.4/dist/lenis.min.js'
  ];
  var html = document.documentElement;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var load = function (src) {
    return new Promise(function (res, rej) {
      if (src.indexOf('gsap.min') > -1 && window.gsap) return res();
      if (src.indexOf('ScrollTrigger') > -1 && window.ScrollTrigger) return res();
      if (src.indexOf('lenis') > -1 && window.Lenis) return res();
      var s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = rej;
      document.head.appendChild(s);
    });
  };

  /* Split a heading into masked words, keeping bold, links and gradient spans */
  var split = function (host) {
    var t = host.matches('h1,h2,h3,h4,h5,h6,p') ? host : (host.querySelector('h1,h2,h3,h4,h5,h6,p') || host);
    if (t.getAttribute('data-nx-split')) return $$('.nx-word', t);
    t.setAttribute('data-nx-split', '1');
    t.setAttribute('aria-label', t.textContent.replace(/\s+/g, ' ').trim());
    var walker = document.createTreeWalker(t, NodeFilter.SHOW_TEXT), nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (n) {
      var frag = document.createDocumentFragment();
      n.textContent.split(/(\s+)/).forEach(function (p) {
        if (!p) return;
        if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(' ')); return; }
        var line = document.createElement('span'); line.className = 'nx-line'; line.setAttribute('aria-hidden', 'true');
        var w = document.createElement('span'); w.className = 'nx-word'; w.textContent = p;
        line.appendChild(w); frag.appendChild(line);
      });
      n.parentNode.replaceChild(frag, n);
    });
    return $$('.nx-word', t);
  };

  var api = {
    motion: false, gsap: null, ScrollTrigger: null, lenis: null,
    $: $, $$: $$, split: split,
    reduced: matchMedia('(prefers-reduced-motion: reduce)').matches,
    fine: matchMedia('(hover: hover) and (pointer: fine)').matches,
    ready: function () { html.classList.add('nx-ready'); },
    whenLive: null,
    refresh: function () {}
  };

  /* Ambient loops start on the first interaction, so the page settles on load */
  var live = [], isLive = false;
  api.whenLive = function (fn) { isLive ? fn() : live.push(fn); };
  ['pointermove', 'pointerdown', 'wheel', 'touchstart', 'keydown', 'scroll'].forEach(function (ev) {
    addEventListener(ev, function () { if (isLive) return; isLive = true; live.splice(0).forEach(function (f) { f(); }); }, { once: true, passive: true });
  });

  /* Run queued section scripts, then accept new ones immediately */
  var drain = function () {
    var queue = Array.isArray(window.NX) ? window.NX : [];
    window.NX = { push: function (fn) { try { fn(api); } catch (e) { console.error('[nx]', e); } api.refresh(); } };
    queue.forEach(function (fn) { window.NX.push(fn); });
  };

  function run() {
    var ok = window.gsap && window.ScrollTrigger && !api.reduced;
    if (!ok) { api.ready(); drain(); return; }

    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: 'power3.out', duration: 0.8 });
    api.motion = true; api.gsap = gsap; api.ScrollTrigger = ScrollTrigger;

    var t; api.refresh = function () { clearTimeout(t); t = setTimeout(function () { ScrollTrigger.refresh(); }, 120); };

    if (window.Lenis) {
      api.lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
      api.lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(function (time) { api.lenis.raf(time * 1000); });
      gsap.ticker.lagSmoothing(0);
    }

    /* Smooth #anchor links (nav, hero and footer buttons use these).
       "#programs" scrolls to the element with id="programs", or, if there is none,
       to the first element with class "nx-programs" (the native Programs section).
       The same rule works for any "#name" → ".nx-name". */
    var findTarget = function (name) {
      if (!name) return null;
      var byId = document.getElementById(name); if (byId) return byId;
      try { return document.querySelector('.nx-' + CSS.escape(name)); } catch (err) { return null; }
    };
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[href*="#"]'); if (!a) return;
      var url = new URL(a.href, location.href);
      if (url.pathname !== location.pathname || !url.hash || url.hash === '#') return;
      var target = findTarget(decodeURIComponent(url.hash.slice(1))); if (!target) return;
      e.preventDefault();
      var off = -(parseInt(getComputedStyle(html).getPropertyValue('--nx-nav-h')) || 0) + 20;
      api.lenis ? api.lenis.scrollTo(target, { offset: off, duration: 1.4, easing: function (x) { return 1 - Math.pow(1 - x, 4); } })
                : target.scrollIntoView({ behavior: 'smooth' });
    });

    /* Headings outside the hero: words rise on scroll */
    $$('.nx-split').filter(function (el) { return !el.closest('.nx-hero'); }).forEach(function (el) {
      gsap.from(split(el), { yPercent: 110, duration: 1, stagger: 0.04, ease: 'power4.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
    });

    /* Fade-ups: single elements, then repeated items in batches */
    var reveal = function (sel, y, start) {
      var items = $$(sel); if (!items.length) return;
      gsap.set(items, { opacity: 0, y: y, transition: 'none' });
      ScrollTrigger.batch(items, { start: start, once: true, onEnter: function (b) {
        gsap.to(b, { opacity: 1, y: 0, duration: 1, stagger: 0.08, clearProps: 'transform,transition' });
      } });
    };
    reveal('.nx-reveal', 28, 'top 88%');
    reveal('.nx-card, .nx-standard, .nx-quote', 26, 'top 85%');

    /* Magnetic CTAs (works on custom <a> and on native button wrappers) */
    if (api.fine) $$('.nx-magnetic').forEach(function (wrap) {
      var btn = wrap.matches('a,button') ? wrap : ($('a, button', wrap) || wrap);
      var bx = gsap.quickTo(btn, 'x', { duration: 0.6, ease: 'power3' }), by = gsap.quickTo(btn, 'y', { duration: 0.6, ease: 'power3' });
      btn.addEventListener('pointermove', function (e) { var r = btn.getBoundingClientRect(); bx(((e.clientX - r.left) / r.width - 0.5) * 14); by(((e.clientY - r.top) / r.height - 0.5) * 12); });
      btn.addEventListener('pointerleave', function () { bx(0); by(0); });
    });

    drain();

    /* Images, fonts and late-loading sections change the page height */
    if (document.fonts) document.fonts.ready.then(api.refresh);
    addEventListener('load', api.refresh);
    $$('img').forEach(function (img) { if (!img.complete) img.addEventListener('load', api.refresh, { once: true }); });
  }

  var start = function () {
    LIBS.reduce(function (p, src) { return p.then(function () { return load(src); }); }, Promise.resolve())
      .then(run, run);
  };
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', start) : start();
})();
</script>
