/*! Nuri Clinic · GHL funnel · nuri-head.js v1.0.0 (Header Code, same on every page)
   Marks the page as live: the CSS fixes the nav and hides intro states only under
   html.nx-live / html.nx-js, and GHL never runs Header Code inside the editor, so the
   editor is never affected. If the motion script fails, the hero shows after 3 seconds. */
(function (h) {
  h.classList.add('nx-live', 'nx-js');
  setTimeout(function () { h.classList.add('nx-ready'); }, 3000);
})(document.documentElement);
