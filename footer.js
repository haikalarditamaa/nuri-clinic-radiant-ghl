/*! Nuri Clinic · GHL funnel · nuri.js v1.0.0 (Footer Code, same on every page)
   Loaded by each page's Footer Code from jsDelivr. It only animates what is on the page, so one
   file serves the Landing page and every funnel page. Same stack as nuriclinic.com:
   GSAP 3.15 + ScrollTrigger + Lenis 1.3.4. Everything is found by the custom classes from the
   build guides, so the native sections need no scripts of their own.
     - Lenis smooth scroll; nav (native "nx-navbar" or custom "nx-nav") hides on scroll down, returns on scroll up
     - "#name" links and "nx-goto-name" buttons glide to the section with class "nx-name" (#top = page top)
     - Hero: drifting mesh, words rise, photo/vial rises (and floats), badges pop and bob, scroll parallax
     - .nx-h2 / .nx-split headings: words rise · eyebrows, leads, .nx-reveal, buttons: fade up
     - Cards rise in batches: plans, options, programs (.nx-card), standards, reviews (.nx-quote) ...
     - Program card opens out, photos wipe up and drift · steps light up 01 > 02 > 03
     - Magnetic buttons · footer card settles · back-to-top ring fills with page scroll
     - Checkout: native scrolling (no Lenis); the summary mirrors the Order Form; opens/closes on mobile
     - Confirmation: tidies the Order Confirmation amounts; timeline steps rise and their line draws in
   Reduced motion: final states only, no tweens. */
(function () {
  if (window.__nxNuri) return; window.__nxNuri = true;   /* runs once, even if the Footer Code is pasted twice */
  var LIBS = [
    'https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js',
    'https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/ScrollTrigger.min.js',
    'https://cdn.jsdelivr.net/npm/lenis@1.3.4/dist/lenis.min.js'
  ];
  var html = document.documentElement;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var wrap = function (el) { return el && (el.closest('.c-wrapper') || el); };   /* GHL element wrapper of a classed .text-output */
  var ready = function () { html.classList.add('nx-ready'); };
  var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  var ease4 = function (x) { return 1 - Math.pow(1 - x, 4); };
  var lenis = null;
  /* Live back-to-top ring for the native footer (same drawing as the custom footer) */
  var RING = '<svg width="92" height="96" viewBox="0 0 92 96" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#nx-top-shadow-n)"><circle cx="46" cy="32" r="32" fill="white"/></g>'
    + '<circle cx="46" cy="32" r="29" stroke="#E4E4E8" stroke-width="2.5"/><circle class="nx-top__progress" cx="46" cy="32" r="29" stroke="url(#nx-top-grad-n)" stroke-width="2.5" stroke-linecap="round" pathLength="100" stroke-dasharray="100" stroke-dashoffset="100"/>'
    + '<g class="nx-top__arrow"><path d="M40.1667 32L46 26.1667L51.8333 32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="#0A0A0C"/><path d="M46 37.8333V26.1667" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="#0A0A0C"/></g>'
    + '<defs><filter id="nx-top-shadow-n" x="0" y="0" width="92" height="96" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feMorphology radius="22" operator="erode" in="SourceAlpha" result="effect1_dropShadow"/><feOffset dy="18"/><feGaussianBlur stdDeviation="18"/><feColorMatrix type="matrix" values="0 0 0 0 0.431373 0 0 0 0 0.352941 0 0 0 0 0.862745 0 0 0 0.6 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter>'
    + '<linearGradient id="nx-top-grad-n" x1="17" y1="3" x2="75" y2="61" gradientUnits="userSpaceOnUse"><stop stop-color="#5AC8FA"/><stop offset="0.55" stop-color="#8E8CF8"/><stop offset="1" stop-color="#C17CF6"/></linearGradient></defs></svg>';
  var hasOrder = function () { return !!$('.c-order-form, .order-form__surface, .container-order-form-two-step, form.form-payment'); };

  var load = function (src) {
    return new Promise(function (res, rej) {
      if (/gsap\.min/.test(src) && window.gsap) return res();
      if (/ScrollTrigger/.test(src) && window.ScrollTrigger) return res();
      if (/lenis/.test(src) && window.Lenis) return res();
      var s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = rej; document.head.appendChild(s);
    });
  };

  /* Split a heading into masked words; keeps bold (gradient) spans */
  var split = function (host) {
    var t = host.querySelector('h1,h2,h3,h4,h5,h6,p') || host;
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

  /* Pointer spotlight: writes --mx / --my on the element (plan cards, program card) */
  var spotlight = function (el) {
    if (!fine || !el) return;
    var o = { x: 50, y: 50 };
    var write = function () { el.style.setProperty('--mx', o.x + '%'); el.style.setProperty('--my', o.y + '%'); };
    el.addEventListener('pointermove', function (e) {
      var r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width * 100, y = (e.clientY - r.top) / r.height * 100;
      window.gsap ? gsap.to(o, { x: x, y: y, duration: 0.6, ease: 'power3', onUpdate: write, overwrite: true }) : (o.x = x, o.y = y, write());
    });
  };

  var scrollToY = function (target) {
    var navEl = $('.c-section.nx-navbar') || $('.nx-nav');
    var off = -(navEl ? navEl.offsetHeight : 0);
    if (lenis) lenis.scrollTo(target, { offset: target === 0 ? 0 : off, duration: 1.4, easing: ease4 });
    else if (target === 0) scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    else scrollTo({ top: target.getBoundingClientRect().top + scrollY + off, behavior: reduced ? 'auto' : 'smooth' });
  };

  /* ---------- Behaviour that works with or without GSAP ---------- */
  function wire() {
    /* "nx-goto-NAME" class, or a link to "#NAME" → the section with class "nx-NAME" (e.g. nx-goto-plans → .nx-plans) */
    document.addEventListener('click', function (e) {
      var el = e.target.closest && e.target.closest('[class*="nx-goto-"], a[href*="#"]'); if (!el) return;
      var name = (el.className.match && (String(el.className).match(/nx-goto-([\w-]+)/) || [])[1]);
      if (!name && el.hash && el.pathname === location.pathname) name = decodeURIComponent(el.hash.slice(1));
      if (!name) return;
      if (name === 'top') { e.preventDefault(); scrollToY(0); return; }
      var target = document.getElementById(name) || $('.c-section.nx-' + name) || $('.nx-' + name); if (!target) return;
      e.preventDefault(); e.stopPropagation();
      scrollToY(target);
    }, true);

    /* Nav: hides on scroll down, returns on scroll up or focus */
    var nav = $('.c-section.nx-navbar') || $('.nx-nav');
    if (nav) {
      var lastY = 0;
      var onScroll = function (y) {
        if (y > lastY + 2 && y > 160) nav.classList.add('is-hidden');
        else if (y < lastY - 2) nav.classList.remove('is-hidden');
        lastY = y;
      };
      lenis ? lenis.on('scroll', function (e) { onScroll(e.scroll); }) : addEventListener('scroll', function () { onScroll(scrollY); }, { passive: true });
      nav.addEventListener('focusin', function () { nav.classList.remove('is-hidden'); });
    }

    /* Back to top: ring fills with page scroll */
    /* Native footer: the "nx-totop" Button gets the same live ring as the custom footer */
    $$('a.nx-totop, button.nx-totop').forEach(function (b) {
      if ($('.nx-top__ring', b)) return;
      var s = document.createElement('span'); s.className = 'nx-top__ring'; s.setAttribute('aria-hidden', 'true'); s.innerHTML = RING;
      b.insertBefore(s, b.firstChild); b.classList.add('has-ring');
    });
    var tops = $$('#nx-top, a.nx-totop, button.nx-totop'), rings = $$('.nx-top__progress');
    if (tops.length) {
      tops.forEach(function (t) { t.addEventListener('click', function (e) { e.preventDefault(); scrollToY(0); }); });
      var paint = function () {
        var max = document.documentElement.scrollHeight - innerHeight, v = String(100 - (max > 0 ? Math.min(1, scrollY / max) : 0) * 100);
        rings.forEach(function (r) { r.setAttribute('stroke-dashoffset', v); });
      };
      lenis ? lenis.on('scroll', paint) : addEventListener('scroll', paint, { passive: true });
      paint();
    }
    /* Native nav: the logo glides back to the top (whether or not the Image has a link) */
    $$('.nx-navbar img.nx-logo, .nx-navbar .nx-logo img, .nx-navbar-brand img, .nx-navbar .c-image img').forEach(function (img) {
      var a = img.closest('a'); if (a && a.getAttribute('href') && !/^#/.test(a.getAttribute('href'))) return;
      img.addEventListener('click', function (e) { e.preventDefault(); scrollToY(0); });
    });
    /* Swipe rows (LP reviews on tablet/phone) scroll sideways without Lenis taking over */
    $$('.nx-quotes > .inner').forEach(function (r) { r.setAttribute('data-lenis-prevent-horizontal', ''); });

    $$('.nx-plan, .nx-option').forEach(spotlight);
    spotlight($('.nx-pcard'));

    /* Checkout: the summary card opens and closes on phones (tap its header row).
       Works for the native card (column holding .nx-sum-title) and the older custom-code card (.nx-sum). */
    var sumCol = $('.nx-sum-title') && $('.nx-sum-title').closest('.c-column');
    var sumHead = sumCol ? $$('.nx-sum-thumb, .nx-sum-title, .nx-sum-product, .nx-sum-price', sumCol).map(function (el) { return el.closest('.c-wrapper') || el; }) : [];
    var sumBox = sumCol || $('.nx-sum');
    var toggleSum = function () {
      if (matchMedia('(min-width: 992px)').matches || !sumBox) return;
      var open = sumBox.classList.toggle('is-open');
      sumHead.concat($$('.nx-sum__toggle')).forEach(function (h) { h.setAttribute('aria-expanded', String(open)); });
    };
    if (sumHead.length) {
      var t = sumHead[1] || sumHead[0];                     /* title: the keyboard-focusable control */
      t.setAttribute('role', 'button'); t.setAttribute('tabindex', '0'); t.setAttribute('aria-expanded', 'false');
      t.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleSum(); } });
      sumHead.forEach(function (h) { h.addEventListener('click', toggleSum); });
    }
    var oldTog = $('.nx-sum__toggle'); if (oldTog) oldTog.addEventListener('click', toggleSum);

    /* Checkout: the summary card follows the Order Form. The product line takes the selected
       product name(s); the price, subtotal and total take the form's own totals (coupons included).
       Updates whenever the selection or the totals change. Formatting typed into the elements
       (bold, italics, pasted styles) doesn't matter: the rows are rebuilt as label + amount. */
    var NAMES = {                                          /* optional: GHL product name → what the card shows */
      /* 'Program Fee - WR12': '12-week program', */
    };
    var nice = function (n) {
      if (NAMES[n]) return NAMES[n];
      var m = n.match(/(\d+)\s*-?\s*(?:weeks?|wks?)\b/i) || n.match(/\bWR\s*-?\s*(\d+)\b/i);
      return m ? m[1] + '-week program' : n;
    };
    var money = function (t) { return t.replace(/\d+/, function (n) { return n.replace(/\B(?=(\d{3})+(?!\d))/g, ','); }); };
    var whole = function (t) { return t.replace(/\.00(?!\d)/g, ''); };   /* card amounts: "$1,499.00" → "$1,499" (real cents stay) */
    var setText = function (el, v) { while (el.children.length === 1) el = el.children[0]; if (el.textContent !== v) el.textContent = v; };
    var setRow = function (el, fallback, v) {               /* <p><span>Label</span><strong>$1,499.00</strong></p> */
      var p = $('p', el) || el, b = p.querySelector('strong');
      var label = p.textContent.replace(/[$€£]?\s?\d[\d,]*(\.\d+)?/g, '').replace(/\s+/g, ' ').trim() || fallback;
      if (p.children.length === 2 && p.firstElementChild.textContent === label && b && b.textContent === v) return;
      var l = document.createElement('span'); l.textContent = label;
      b = document.createElement('strong'); b.textContent = v;
      p.textContent = ''; p.appendChild(l); p.appendChild(b);
    };
    var targets = {
      product: '[data-nx-sum="product"], .nx-sum-product',
      total: '[data-nx-sum="total"], .nx-sum-price',
      subtotal: '[data-nx-sum="subtotal"]'
    };
    var rows = { total: ['.nx-sum-row--total', 'Total'], subtotal: ['.nx-sum-row--sub', 'Subtotal'] };
    var mirror = function () {
      var form = $('.order-form__surface'); if (!form || !$(targets.product + ', ' + targets.total + ', ' + rows.total[0])) return false;
      var text = function (el) { return el ? el.textContent.replace(/\s+/g, ' ').trim() : ''; };
      var sync = function () {
        var picked = $$('.order-form__prod--selected', form); if (!picked.length) return;
        var sumRows = $$('.order-form__summary-row', form);
        var sub = sumRows[0] && sumRows[0].lastElementChild, tot = $('.order-form__summary-row--total > :last-child', form);
        var price = text(tot) || text(sub) || text($('.order-form__prod-price', picked[0]));
        var vals = {
          product: picked.map(function (p) { return nice(text($('.order-form__prod-name', p))); }).join(' + '),
          subtotal: whole(money(text(sub) || price)), total: whole(money(price))
        };
        Object.keys(targets).forEach(function (k) { if (vals[k]) $$(targets[k]).forEach(function (n) { if (!form.contains(n)) setText(n, vals[k]); }); });
        Object.keys(rows).forEach(function (k) { if (vals[k]) $$(rows[k][0]).forEach(function (n) { if (!form.contains(n)) setRow(n, rows[k][1], vals[k]); }); });
      };
      sync(); new MutationObserver(sync).observe(form, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ['class'] });
      return true;
    };
    /* Confirmation: GHL's Order Confirmation element prints amounts as "$ 1499.00".
       Tidy them to "$1,499.00" whenever the element (re)renders. */
    var tidy = function (box) {
      $$('.oc-product-description > :last-child, .oc-product-total .item-total:last-child', box).forEach(function (el) {
        var t = el.textContent, v = money(t.replace(/^\s*([^\d\s-]+)\s+(?=\d)/, '$1').trim());
        if (v !== t) el.textContent = v;
      });
    };
    var oc = $('.container-order-confirmation'); oc = oc && (oc.closest('.c-wrapper') || oc);   /* the outer wrapper survives re-renders */
    if (oc) { tidy(oc); new MutationObserver(function () { tidy(oc); }).observe(oc, { subtree: true, childList: true, characterData: true }); }
    if ($(targets.product + ', ' + targets.total + ', ' + rows.total[0]) && !mirror()) {   /* the form can render after the page: wait (up to 15 s) */
      var waitForm = new MutationObserver(function () { if (mirror()) waitForm.disconnect(); });
      waitForm.observe(document.body, { childList: true, subtree: true });
      setTimeout(function () { waitForm.disconnect(); }, 15000);
    }
  }

  /* ---------- Motion ---------- */
  function motion() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: 'power3.out', duration: 0.8 });
    var refreshT, refresh = function () { clearTimeout(refreshT); refreshT = setTimeout(function () { ScrollTrigger.refresh(); }, 120); };

    /* Ambient loops start on the first interaction so the page settles on load */
    var live = [], isLive = false, whenLive = function (fn) { isLive ? fn() : live.push(fn); };
    ['pointermove', 'pointerdown', 'wheel', 'touchstart', 'keydown', 'scroll'].forEach(function (ev) {
      addEventListener(ev, function () { if (isLive) return; isLive = true; live.splice(0).forEach(function (f) { f(); }); }, { once: true, passive: true });
    });

    /* HERO */
    var hero = $('.c-section.nx-hero');
    if (hero) {
      var mesh = document.createElement('div'); mesh.className = 'nx-mesh'; mesh.setAttribute('aria-hidden', 'true');
      mesh.innerHTML = '<i></i><i></i><i></i>';
      hero.insertBefore(mesh, hero.firstChild); hero.classList.add('has-mesh');
      var h1 = $('.nx-display', hero), words = h1 ? split(h1) : [];
      var copy = $('.nx-hero-copy', hero), visual = $('.nx-hero-visual', hero);
      var vial = visual && $('.c-image', visual);
      var still = visual && visual.classList.contains('nx-hero-visual--still');   /* a photo: rises in, no tilt or bob */
      var floats = $$('.nx-float', hero).map(wrap);
      var copyItems = copy ? $$('.vertical.inner > .c-wrapper', copy).filter(function (w) { return !w.contains(h1); }) : [];
      var blobs = $$('i', mesh);

      gsap.timeline({ delay: 0.15 })
        .from(words, { yPercent: 110, duration: 1.1, stagger: 0.05, ease: 'power4.out' })
        .from(copyItems, { opacity: 0, y: 22, duration: 0.9, stagger: 0.07 }, 0.1)
        .from(blobs, { opacity: 0, scale: 0.8, duration: 1.8, stagger: 0.12, ease: 'expo.out' }, 0)
        .from(vial || [], still ? { opacity: 0, y: 40, duration: 1.4, ease: 'expo.out' } : { opacity: 0, y: 70, rotation: -6, duration: 1.4, ease: 'expo.out' }, 0.2)
        .from(floats, { opacity: 0, y: 20, scale: 0.92, duration: 0.8, stagger: 0.12, ease: 'back.out(1.6)' }, 0.9);
      ready();

      whenLive(function () {
        if (vial && !still) gsap.to(vial, { y: -12, rotation: 2, duration: 3.6, ease: 'sine.inOut', repeat: -1, yoyo: true });
        floats.forEach(function (f, i) {
          gsap.to(f, { y: i ? -8 : 8, duration: 2.8 + i, ease: 'sine.inOut', repeat: -1, yoyo: true, delay: 0.6 });
          gsap.to(f, { x: i ? -5 : 5, duration: i ? 4.3 : 3.6, ease: 'sine.inOut', repeat: -1, yoyo: true, delay: 1 });
        });
        blobs.forEach(function (b, i) {
          gsap.to(b, { xPercent: i % 2 ? -6 : 6, yPercent: i ? 4 : -4, scale: 1.06, duration: 16 + i * 4, ease: 'sine.inOut', repeat: -1, yoyo: true });
        });
      });
      var st = { trigger: hero, start: 'top top', end: 'bottom top', scrub: true };
      if (copy) gsap.to(copy, { y: -60, ease: 'none', scrollTrigger: st });
      if (visual) gsap.to(visual, { y: 50, ease: 'none', scrollTrigger: st });
      gsap.to(mesh, { y: 90, ease: 'none', scrollTrigger: st });
    } else ready();

    /* Already on screen at load (e.g. the checkout heading): play now. A clamp() start sits at 0
       for these, and ScrollTrigger would wait for the first scroll before firing. */
    var onLoad = function (el) { return scrollY < 2 && el.getBoundingClientRect().top < innerHeight * 0.88; };

    /* Section headings: words rise */
    $$('.nx-h2, .nx-split').forEach(function (el) {
      if (el.closest('.nx-hero')) return;
      var tw = { yPercent: 110, duration: 1, stagger: 0.04, ease: 'power4.out' };
      if (onLoad(el)) { tw.delay = 0.25; gsap.from(split(el), tw); return; }
      tw.scrollTrigger = { trigger: el, start: 'clamp(top 88%)', once: true };
      gsap.from(split(el), tw);
    });

    /* Fade-ups in batches. clamp() makes items near the very bottom of the page
       reveal even when the page can't scroll far enough to reach their start line. */
    var reveal = function (items, y, start) {
      if (!items.length) return;
      var now = items.filter(onLoad), later = items.filter(function (el) { return now.indexOf(el) < 0; });
      gsap.set(items, { opacity: 0, y: y, transition: 'none' });
      if (now.length) gsap.to(now, { opacity: 1, y: 0, duration: 1, stagger: 0.08, delay: 0.15, clearProps: 'transform,transition' });
      if (later.length) ScrollTrigger.batch(later, { start: start, once: true, onEnter: function (b) {
        gsap.to(b, { opacity: 1, y: 0, duration: 1, stagger: 0.08, clearProps: 'transform,transition' });
      } });
    };
    var outside = function (el) { return !el.closest('.nx-hero, .nx-pcard'); };
    reveal($$('.nx-eyebrow, .nx-lead, .nx-or, .nx-notice-title, .nx-callout, .nx-reveal, .nx-reviews-note, .nx-guide').filter(outside).map(wrap)
      .filter(function (w, i, a) { return a.indexOf(w) === i && !w.closest('.nx-card'); })
      .concat($$('.nx-sec:not(.nx-hero) .c-button').filter(function (b) { return !b.closest('.nx-plan, .nx-option, .nx-help, .nx-action, .nx-alert, .nx-card'); })   /* buttons inside cards rise with their card */)
      .concat($$('.nx-notice')), 28, 'clamp(top 88%)');
    reveal($$('.nx-plan, .nx-option, .nx-xcard, .nx-cal, .nx-action, .nx-receipt, .c-column:has(> .vertical.inner > .c-order), .nx-help, .nx-alert'), 40, 'clamp(top 85%)');
    reveal($$('.nx-card, .nx-standard, .nx-quote'), 26, 'clamp(top 85%)');

    /* PROGRAM CARD: opens out, photo drifts, title words rise, items follow */
    var pcard = $('.nx-pcard');
    if (pcard) {
      gsap.fromTo(pcard, { clipPath: 'inset(6% 5% 6% 5% round 48px)' }, { clipPath: 'inset(0% 0% 0% 0% round 34px)', ease: 'none',
        scrollTrigger: { trigger: pcard, start: 'clamp(top 95%)', end: 'clamp(top 35%)', scrub: 0.6 } });
      var pimg = $('.c-image img', pcard);
      if (pimg) gsap.fromTo(pimg, { yPercent: -4 }, { yPercent: 4, ease: 'none', scrollTrigger: { trigger: pcard, start: 'top bottom', end: 'bottom top', scrub: true } });
      var on = { trigger: pcard, start: 'clamp(top 60%)', once: true }, title = $('.nx-pcard-title', pcard);
      if (title) gsap.from(split(title), { yPercent: 110, duration: 1.1, stagger: 0.06, ease: 'power4.out', scrollTrigger: on });
      gsap.from($$('.vertical.inner > .c-wrapper', pcard).filter(function (w) { return !w.classList.contains('c-image') && !w.contains(title); }),
        { opacity: 0, y: 26, duration: 1, stagger: 0.08, delay: 0.15, scrollTrigger: on });
      gsap.from($$('.nx-chips li', pcard), { opacity: 0, y: 12, scale: 0.96, duration: 0.7, stagger: 0.06, delay: 0.45, scrollTrigger: on });
    }

    /* KIT + SUPPORT photos: wipe up, pill pops, photo drifts */
    $$('.nx-media').forEach(function (m) {
      var on = { trigger: m, start: 'clamp(top 80%)', once: true };
      gsap.fromTo(m, { clipPath: 'inset(100% 0% 0% 0% round 28px)' }, { clipPath: 'inset(0% 0% 0% 0% round 28px)', duration: 1.4, ease: 'power4.inOut', scrollTrigger: on });
      var f = $('.nx-float', m); if (f) gsap.from(wrap(f), { opacity: 0, y: 16, duration: 0.8, delay: 1, ease: 'back.out(1.6)', scrollTrigger: on });
      var img = $('.c-image img', m);
      if (img) gsap.fromTo(img, { yPercent: -5, scale: 1.08 }, { yPercent: 5, scale: 1, ease: 'none', scrollTrigger: { trigger: m, start: 'top bottom', end: 'bottom top', scrub: true } });
    });
    var kit = $$('.nx-kitlist li');
    if (kit.length) gsap.from(kit, { opacity: 0, y: 18, duration: 0.8, stagger: 0.06, scrollTrigger: { trigger: kit[0], start: 'clamp(top 90%)', once: true } });

    /* WHAT HAPPENS NEXT: steps rise, then light up 01 → 02 → 03 */
    var steps = $$('.nx-step');
    if (steps.length) {
      gsap.set(steps, { transition: 'none' });
      gsap.timeline({ scrollTrigger: { trigger: steps[0], start: 'clamp(top 80%)', once: true } })
        .from(steps, { opacity: 0, y: 40, duration: 1, stagger: 0.12, clearProps: 'transform,transition' })
        .add(function () { steps.forEach(function (s, i) { setTimeout(function () { s.classList.add('is-on'); }, i * 280); }); }, 0.4);
    }
    /* TIMELINE: steps rise one by one; the line to the next step draws in */
    $$('.nx-tl').forEach(function (s) {
      gsap.from(s, { opacity: 0, y: 30, duration: 1, scrollTrigger: { trigger: s, start: 'clamp(top 82%)', once: true } });
      ScrollTrigger.create({ trigger: s, start: 'clamp(top 62%)', once: true, onEnter: function () { s.classList.add('is-on'); } });
    });

    var assure = $$('.nx-assure');
    if (assure.length) gsap.from(assure, { opacity: 0, y: 20, duration: 0.9, stagger: 0.08, scrollTrigger: { trigger: assure[0], start: 'clamp(top 90%)', once: true } });

    /* Magnetic buttons (desktop pointer only) */
    if (fine) $$('a.nx-gbtn, button.nx-gbtn, .nx-btn, a.nx-magnetic, button.nx-magnetic').filter(function (b) { return !b.closest('.nx-navbar'); }).forEach(function (btn) {
      var bx = gsap.quickTo(btn, 'x', { duration: 0.6, ease: 'power3' }), by = gsap.quickTo(btn, 'y', { duration: 0.6, ease: 'power3' });
      btn.addEventListener('pointermove', function (e) { var r = btn.getBoundingClientRect(); bx(((e.clientX - r.left) / r.width - 0.5) * 14); by(((e.clientY - r.top) / r.height - 0.5) * 12); });
      btn.addEventListener('pointerleave', function () { bx(0); by(0); });
    });

    /* Footer card settles in */
    var card = $('#nx-footer-card') || $('.c-row.nx-foot-card');
    if (card) gsap.fromTo(card, { y: 40, scale: 0.97, opacity: 0.4 }, { y: 0, scale: 1, opacity: 1, ease: 'none',
      scrollTrigger: { trigger: card, start: 'top bottom', end: function () { return '+=' + Math.min(innerHeight * 0.45, card.offsetHeight); }, scrub: true } });

    /* Images and fonts change the page height */
    if (document.fonts) document.fonts.ready.then(refresh);
    addEventListener('load', refresh);
    $$('img').forEach(function (img) { if (!img.complete) img.addEventListener('load', refresh, { once: true }); });
  }

  function run() {
    var ok = window.gsap && window.ScrollTrigger && !reduced;
    /* GHL popups (the form behind "Get Started") sit in a fixed #overlay at z-index 105, under the
       fixed nav (600): lift the backdrop + form above the nav. When the form reaches its end,
       the page behind must not take over the scroll. */
    document.head.appendChild(document.createElement('style')).textContent = '#overlay{z-index:1000!important;overscroll-behavior:contain}';
    if (ok && window.Lenis && !hasOrder()) {
      /* The popup scrolls natively inside #overlay; Lenis must leave wheel/touch there alone
         or it scrolls the page behind. */
      lenis = new Lenis({ lerp: 0.1, smoothWheel: true,
        prevent: function (node) { return node.id === 'overlay' || /\b(popup-body|hl_main_popup)\b/.test(node.className); } });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
      gsap.ticker.lagSmoothing(0);
    }
    wire();
    if (ok) { try { motion(); } catch (e) { console.error('[nx]', e); ready(); } }
    else { $$('.nx-step, .nx-tl').forEach(function (s) { s.classList.add('is-on'); }); ready(); }
  }

  var start = function () {
    LIBS.reduce(function (p, src) { return p.then(function () { return load(src); }); }, Promise.resolve()).then(run, run);
  };
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', start) : start();
})();
