/*! Nuri Clinic · GHL funnel · unified stylesheet v1.0.0
   One file for every page: Landing, Approved, Not eligible, Checkout, Confirmation, Book a call.
   Served from GitHub through jsDelivr. Linked by the Header Code (live pages) and
   @imported by each page's Custom CSS (the GHL editor).
   Editor-safe: nothing here styles html, body, :root or *; live-only rules sit
   behind html.nx-live / html.nx-js, which only the Header Code adds. */
@import url("https://fonts.googleapis.com/css2?family=DM+Mono&family=Montserrat:wght@400;500&family=Roboto:ital,wght@0,300;0,400;0,500;1,300&display=swap");

/* ##################################################################### base.css */
/* =====================================================================
   NURI FUNNEL · SHARED BASE  (tokens, GHL resets, type, buttons, nav,
   hero mesh, section heads, media + copy rows, notice, footer)
   Every page's custom-css.css = this file + that page's own sections.

   EDITOR-SAFE RULES (why the editor never shifts down)
   - Nothing here styles html, body, :root or "*". Every rule is scoped to
     a class you add (nx-sec, nx-code-sec…) or to the custom code (.nx).
   - Live-only behaviour (fixed nav, hidden intro states, Lenis) sits behind
     html.nx-live / html.nx-js. Only the Header Code adds those classes, and
     GHL doesn't run Header/Footer code inside the editor.
   - The fixed nav keeps its own height in the page flow, so no padding is
     ever added to <body>.

   WHERE GHL PUTS YOUR CUSTOM CLASSES
   Section / Row / Column → the .c-section / .c-row / .c-column wrapper
   Headline / Sub-headline / Paragraph / Bullet list → the .text-output div
   Button → the <a>/<button> · Image → the <img>
   ===================================================================== */


/* ---------- Tokens (scoped to our sections, not :root) ---------- */
.nx-sec, .nx-code-sec, .nx, .nx-navbar, .nx-footbar, .nx-programs {
  --nx-ink: #0a0a0c;
  --nx-body: #2a2c33;
  --nx-muted: #5f6370;
  --nx-subtle: #6b6f7a;
  --nx-line: #e4e4e8;
  --nx-line-soft: #eeeef2;
  --nx-subtle-bg: #f5f5f6;
  --nx-tint: #f3f1fd;
  --nx-lav-soft: #eae7fe;
  --nx-lav: #d7d3fb;
  --nx-accent: #6f62b8;
  --nx-cyan: #5ac8fa;
  --nx-grad: linear-gradient(90deg,#5ac8fa 0%,#8e8cf8 55%,#c17cf6 100%);
  --nx-wash: linear-gradient(138deg,#f1faff 14.3%,#faf4ff 85.7%);
  --nx-wash-footer: linear-gradient(166deg,#f1faff 14.3%,#faf4ff 85.7%);
  --nx-shadow-lav: 0 34px 70px -40px rgba(110,90,220,.45);
  --nx-display: "Montserrat",ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;
  --nx-text: "Roboto",ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;
  --nx-mono: "DM Mono",ui-monospace,SFMono-Regular,Menlo,monospace;
  --nx-ease: cubic-bezier(.2,.7,.2,1);
  --nx-gutter: 120px;
  --nx-nav-h: 76px;
  --nx-arrow: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Icon'%3E%3Cpath id='Vector' d='M4.67 4.67H11.33V11.33' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' stroke='%230A0A0C'/%3E%3Cpath id='Vector_2' d='M4.67 11.33L11.33 4.67' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' stroke='%230A0A0C'/%3E%3C/g%3E%3C/svg%3E");
  --nx-check: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Icon'%3E%3Cpath id='Vector' d='M10 3L4.5 8.5L2 6' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round' stroke='white'/%3E%3C/g%3E%3C/svg%3E");
  --nx-check-plain: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13 4.5L6.5 11L3 7.5' stroke='%236F62B8' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
}
@media (max-width:1279px) { .nx-sec, .nx-code-sec, .nx, .nx-navbar, .nx-footbar, .nx-programs { --nx-gutter: 48px } }
@media (max-width:991px)  { .nx-sec, .nx-code-sec, .nx, .nx-navbar, .nx-footbar, .nx-programs { --nx-gutter: 24px } }
@media (max-width:767px)  { .nx-sec, .nx-code-sec, .nx, .nx-navbar, .nx-footbar, .nx-programs { --nx-gutter: 20px; --nx-nav-h: 66px } }

/* =====================================================================
   NATIVE SECTION FRAME  (class "nx-sec" on every native section)
   Strips GHL's default section/row/column/element spacing so the
   Figma spacing below is the only spacing.
   ===================================================================== */
.c-section.nx-sec { position: relative; isolation: isolate; overflow: hidden; overflow: clip;   /* clip: crops like hidden but keeps sticky elements working */
  padding: var(--sec-pt,96px) 0 var(--sec-pb,96px)!important; margin: 0!important;
  background-color: var(--sec-bg,#fff)!important }
.nx-sec > .inner { max-width: 1440px!important; width: 100%!important; margin: 0 auto!important;
  padding: 0 var(--nx-gutter)!important; box-sizing: border-box!important;
  display: flex!important; flex-direction: column!important; gap: var(--row-gap,40px) }
/* :where() keeps these resets at the lowest specificity, so every
   section rule further down wins over them. */
.nx-sec :where(.c-row) { width: 100%!important; max-width: none!important; margin: 0!important; padding: 0!important; background: none!important }
.nx-sec :where(.c-row > .inner) { display: flex!important; flex-wrap: nowrap!important; align-items: stretch!important; gap: 24px;
  width: 100%!important; max-width: none!important; margin: 0 auto!important; padding: 0!important }
.nx-sec :where(.c-column) { flex: 1 1 0!important; min-width: 0; width: auto!important; max-width: none!important; margin: 0!important; padding: 0!important }
.nx-sec :where(.c-column > .vertical.inner) { display: flex!important; flex-direction: column!important; gap: 0;
  height: 100%; margin: 0!important; padding: 0!important }
.nx-sec :where(.vertical.inner > .c-wrapper) { margin: 0!important; padding: 0!important }
.nx-sec :where(.text-output) { margin: 0!important; padding: 0!important }
.nx-sec :where(.text-output) :where(h1,h2,h3,h4,h5,h6,p,ul,ol) { margin: 0!important; padding: 0!important }
.nx-sec :where(.c-image img) { display: block; max-width: 100%; height: auto }
@media (max-width:767px) {
  .nx-sec :where(.c-row > .inner) { flex-direction: column!important }
  .nx-sec :where(.c-column) { flex: none!important; width: 100%!important }
}

/* Custom-code sections (Nav, Footer): class "nx-code-sec" on the section.
   The :has() line is a fallback in case the class is forgotten. */
.c-section.nx-code-sec, .c-section:has(.nx-nav, .nx-footer) { padding: 0!important; margin: 0!important; background: transparent!important }
:is(.nx-code-sec, .c-section:has(.nx-nav, .nx-footer)) > .inner,
:is(.nx-code-sec, .c-section:has(.nx-nav, .nx-footer)) :is(.c-row, .c-row > .inner, .c-column, .c-column > .inner, .c-custom-code, .custom-code-container) {
  max-width: none!important; width: 100%!important; margin: 0!important; padding: 0!important }

/* =====================================================================
   SHARED TYPE  (classes on Headline / Sub-headline / Paragraph)
   Gradient words: select them in the text editor and make them **Bold**.
   ===================================================================== */
.nx-eyebrow, .nx-eyebrow :is(h1,h2,h3,h4,h5,h6,p,span,strong) {
  font: 500 12.5px/1.2 var(--nx-display)!important; letter-spacing: .09em!important; text-transform: uppercase!important; color: var(--nx-muted)!important }
.nx-display, .nx-display :is(h1,h2,h3,h4,h5,h6,p,span,strong) {
  font-family: var(--nx-display)!important; font-weight: 500!important; font-size: 60px!important; line-height: 1.05!important;
  letter-spacing: -.025em!important; color: var(--nx-ink)!important }
.nx-h2, .nx-h2 :is(h1,h2,h3,h4,h5,h6,p,span,strong) {
  font-family: var(--nx-display)!important; font-weight: 500!important; font-size: 48px!important; line-height: 1.1!important;
  letter-spacing: -.02em!important; color: var(--nx-ink)!important }
.nx-lead, .nx-lead :is(p,span) { font-family: var(--nx-text)!important; font-weight: 300!important; font-size: 18px!important; line-height: 1.6!important; color: var(--nx-muted)!important }
.nx-body, .nx-body :is(p,span) { font-family: var(--nx-text)!important; font-weight: 300!important; font-size: 16px!important; line-height: 1.6!important; color: var(--nx-body)!important }
/* Bold words → brand gradient (also each split word, so the intro keeps it) */
:is(.nx-display,.nx-h2,.nx-formula) :is(strong,b), :is(.nx-display,.nx-h2,.nx-formula) :is(strong,b) .nx-word {
  font-weight: 500!important; background: var(--nx-grad); -webkit-background-clip: text; background-clip: text;
  color: transparent!important; -webkit-text-fill-color: transparent }
.nx-center, .nx-center * { text-align: center!important }
/* Eyebrow with a cyan dot (add nx-eyebrow--dot next to nx-eyebrow) */
.nx-eyebrow--dot :is(h1,h2,h3,h4,h5,h6,p)::before { content: ""; display: inline-block; width: 7px; height: 7px; margin: 0 8px 2px 0; border-radius: 50%; background: var(--nx-cyan); vertical-align: middle }
@media (max-width:1279px) {
  .nx-display, .nx-display :is(h1,h2,h3,h4,h5,h6,p,span,strong) { font-size: clamp(44px,4.8vw,60px)!important }
  .nx-h2, .nx-h2 :is(h1,h2,h3,h4,h5,h6,p,span,strong) { font-size: clamp(38px,3.9vw,48px)!important }
}
@media (max-width:767px) {
  .nx-display, .nx-display :is(h1,h2,h3,h4,h5,h6,p,span,strong) { font-size: 48px!important; line-height: 1.1!important; letter-spacing: -.02em!important }
  .nx-h2, .nx-h2 :is(h1,h2,h3,h4,h5,h6,p,span,strong) { font-size: 36px!important }
  .nx-lead, .nx-lead :is(p,span) { font-size: 17px!important }
}

/* Split-word masks (the footer code wraps heading words for the rise-in) */
.nx-line { display: inline-block; overflow: hidden; vertical-align: top; padding-bottom: .22em; margin-bottom: -.22em }
.nx-word { display: inline-block; padding-bottom: .16em; margin-bottom: -.16em; will-change: transform }

/* Float pill (Paragraph with class nx-float) */
.nx-float { display: inline-flex!important; align-items: center; gap: 10px; padding: 12px 16px!important; white-space: nowrap;
  background: rgba(255,255,255,.92)!important; border-radius: 999px; filter: drop-shadow(0 18px 20px rgba(60,40,140,.3)) }
.nx-float, .nx-float :is(p,span) { font: 500 13px/1.2 var(--nx-display)!important; color: var(--nx-body)!important }
.nx-float::before { content: ""; width: 8px; height: 8px; flex: none; border-radius: 50%; background: var(--nx-cyan) }
.c-wrapper:has(> .nx-float) { position: absolute!important; z-index: 3; width: auto!important; will-change: transform }

/* =====================================================================
   NATIVE BUTTONS  (class on the Button: nx-gbtn + optional modifiers)
   nx-gbtn = dark · nx-gbtn--light = white · nx-gbtn--ghost = outline · nx-gbtn--block = full width
   ===================================================================== */
:is(a,button).nx-gbtn {   /* var() fallbacks: the button stays dark even outside a token-scoped section */
  display: inline-flex!important; align-items: center!important; justify-content: center!important; gap: 12px; height: 52px!important; min-height: 0!important;
  padding: 0 24px!important; border-radius: 999px!important; border: 1px solid var(--nx-ink,#0a0a0c)!important; background: var(--nx-ink,#0a0a0c)!important;
  color: #fff!important; box-shadow: none!important; font-family: var(--nx-display,"Montserrat",ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif)!important; font-weight: 500!important; font-size: 15px!important;
  line-height: 1.2!important; letter-spacing: 0!important; text-decoration: none!important; box-sizing: border-box!important; max-width: 100%;
  cursor: pointer; position: relative; transition: box-shadow .4s var(--nx-ease,cubic-bezier(.2,.7,.2,1)), border-color .3s, background-color .3s }
:is(a,button).nx-gbtn * { font: inherit!important; color: inherit!important; letter-spacing: inherit!important; text-decoration: none!important; margin: 0!important; padding: 0!important }
:is(a,button).nx-gbtn .main-heading-group { display: inline-flex!important; align-items: center }
:is(a,button).nx-gbtn :is(.button-icon-start,.button-icon-end,.sub-heading-button):empty { display: none!important }
:is(a,button).nx-gbtn::after { content: ""; display: block; width: 16px; height: 16px; flex: none; background: currentColor;
  -webkit-mask: var(--nx-arrow,url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Icon'%3E%3Cpath id='Vector' d='M4.67 4.67H11.33V11.33' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' stroke='%230A0A0C'/%3E%3Cpath id='Vector_2' d='M4.67 11.33L11.33 4.67' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' stroke='%230A0A0C'/%3E%3C/g%3E%3C/svg%3E")) center/contain no-repeat; mask: var(--nx-arrow,url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Icon'%3E%3Cpath id='Vector' d='M4.67 4.67H11.33V11.33' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' stroke='%230A0A0C'/%3E%3Cpath id='Vector_2' d='M4.67 11.33L11.33 4.67' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' stroke='%230A0A0C'/%3E%3C/g%3E%3C/svg%3E")) center/contain no-repeat; transition: transform .45s var(--nx-ease,cubic-bezier(.2,.7,.2,1)) }
:is(a,button).nx-gbtn:hover::after { transform: rotate(45deg) }
:is(a,button).nx-gbtn:hover { box-shadow: 0 14px 30px -12px rgba(10,10,12,.55)!important }
:is(a,button).nx-gbtn:focus-visible { outline: 2px solid #8e8cf8!important; outline-offset: 3px }
:is(a,button):is(.nx-gbtn--light,.nx-gbtn--ghost) { background: #fff!important; color: var(--nx-ink,#0a0a0c)!important; border-color: var(--nx-line,#e4e4e8)!important }
:is(a,button).nx-gbtn--ghost { background: transparent!important }
:is(a,button):is(.nx-gbtn--light,.nx-gbtn--ghost):hover { border-color: var(--nx-lav,#d7d3fb)!important; box-shadow: 0 14px 30px -18px rgba(110,90,220,.45)!important }
:is(a,button).nx-gbtn--block { display: flex!important; width: 100%!important }
.c-button:has(> .nx-gbtn--block) { width: 100%!important }

/* =====================================================================
   BULLET LISTS  (classes nx-checks · nx-kitlist · nx-chips · nx-trust on a Bullet List)
   GHL draws its own bullet (an icon glyph in li::before, or an <i>) and
   indents the list. These lines neutralise that so our markers keep their
   exact size and the list spans its column.
   ===================================================================== */
.c-wrapper:has(> :is(.nx-checks,.nx-kitlist,.nx-chips,.nx-trust)) { width: 100%!important; max-width: none!important; align-self: stretch!important }
:is(.nx-checks,.nx-kitlist,.nx-chips,.nx-trust), :is(.nx-checks,.nx-kitlist,.nx-chips,.nx-trust) > div { width: 100%!important; max-width: none!important }
:is(.nx-checks,.nx-kitlist,.nx-chips,.nx-trust) :is(ul,ol) { width: 100%!important; max-width: none!important; margin: 0!important; padding: 0!important; list-style: none!important }
:is(.nx-checks,.nx-kitlist,.nx-chips,.nx-trust) li { padding-left: 0!important; text-indent: 0!important; list-style: none!important }
:is(.nx-checks,.nx-kitlist,.nx-chips,.nx-trust) li::marker { content: ""!important }
:is(.nx-checks,.nx-kitlist,.nx-chips,.nx-trust) li :is(i,svg,.fa,[class*="icon"]) { display: none!important }
:is(.nx-checks,.nx-kitlist,.nx-chips,.nx-trust) li::before { content: ""!important; display: block!important; box-sizing: border-box!important;
  position: static!important; inset: auto!important; flex: 0 0 auto!important; align-self: center!important; min-width: 0!important; min-height: 0!important;
  max-width: none!important; max-height: none!important; padding: 0!important; margin: 0!important; border: 0!important;
  font-size: 0!important; line-height: 0!important; transform: none!important }
/* Gradient check disc */
:is(.nx-checks,.nx-kitlist) li::before { width: 22px!important; height: 22px!important; border-radius: 50%!important;
  background: var(--nx-check) center/12px 12px no-repeat, var(--nx-grad)!important }

/* =====================================================================
   NAV  (custom code · section class nx-code-sec)
   In the editor it sits in the flow like any bar. Live, the bar is fixed
   and the header keeps its height, so nothing below jumps.
   ===================================================================== */
.nx, .nx *, .nx *::before, .nx *::after { box-sizing: border-box }
.nx { font-family: var(--nx-text); font-weight: 300; font-size: 16px; line-height: 1.6; color: var(--nx-ink); -webkit-font-smoothing: antialiased }
.nx :where(h1,h2,h3,h4,p,ul,ol,address) { margin: 0; padding: 0 }
.nx :where(ul,ol) { list-style: none }
.nx :where(img) { display: block; max-width: 100%; height: auto }
.nx :where(a) { color: inherit; text-decoration: none }
.nx :focus-visible { outline: 2px solid #8e8cf8; outline-offset: 3px; border-radius: 6px }

.nx-btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; height: 44px; padding: 0 20px; border-radius: 999px;
  border: 1px solid transparent; background: var(--nx-ink); color: #fff!important; font: 500 13px/1.2 var(--nx-display); white-space: nowrap;
  transition: box-shadow .4s var(--nx-ease) }
.nx-btn::after { content: ""; width: 16px; height: 16px; flex: none; background: currentColor;
  -webkit-mask: var(--nx-arrow) center/contain no-repeat; mask: var(--nx-arrow) center/contain no-repeat; transition: transform .45s var(--nx-ease) }
.nx-btn:hover { box-shadow: 0 14px 30px -12px rgba(10,10,12,.55) }
.nx-btn:hover::after { transform: rotate(45deg) }
.nx-btn--light { background: #fff; color: var(--nx-ink)!important; border-color: var(--nx-line) }
.nx-btn--light:hover { border-color: var(--nx-lav); box-shadow: 0 14px 30px -18px rgba(110,90,220,.45) }

.nx-nav { height: var(--nx-nav-h) }
.nx-nav__bar { height: var(--nx-nav-h); background: #fff; border-bottom: 1px solid var(--nx-line); transition: transform .5s var(--nx-ease) }
html.nx-live .nx-nav__bar { position: fixed; top: 0; left: 0; right: 0; z-index: 600 }
html.nx-live .nx-nav.is-hidden .nx-nav__bar { transform: translateY(-100%) }
.nx-nav__in { max-width: 1440px; height: 100%; margin: 0 auto; padding: 0 72px; display: flex; align-items: center; justify-content: space-between; gap: 16px }
.nx-nav__logo img { width: 73px; height: 26px }
/* Right side as a plain label with a shield (Checkout: no button) */
.nx-nav__meta { display: inline-flex; align-items: center; gap: 8px; height: 44px; padding: 0 20px; font: 500 13px/1.2 var(--nx-display); color: var(--nx-ink); white-space: nowrap }
.nx-nav__meta::after { content: ""; width: 16px; height: 16px; flex: none; background: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Icon'%3E%3Cpath id='Vector' d='M13.33 8.67C13.33 12 11 13.67 8.23 14.63C8.08 14.68 7.92 14.68 7.78 14.63C5 13.67 2.67 12 2.67 8.67V4C2.67 3.82 2.74 3.65 2.86 3.53C2.99 3.4 3.16 3.33 3.33 3.33C4.67 3.33 6.33 2.53 7.49 1.52C7.63 1.4 7.81 1.33 8 1.33C8.19 1.33 8.37 1.4 8.51 1.52C9.67 2.54 11.33 3.33 12.67 3.33C12.84 3.33 13.01 3.4 13.14 3.53C13.26 3.65 13.33 3.82 13.33 4V8.67Z' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' stroke='%230A0A0C'/%3E%3Cpath id='Vector_2' d='M6 8L7.33 9.33L10 6.67' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' stroke='%230A0A0C'/%3E%3C/g%3E%3C/svg%3E") center/contain no-repeat }
@media (max-width:767px) { .nx-nav__meta { padding: 0 4px } }
/* Button label that shortens on phones (Book a call page) */
.nx-nav__label-sm { display: none }
@media (max-width:991px) {
  .nx-nav__label-lg { display: none }
  .nx-nav__label-sm { display: inline }
}
@media (max-width:991px) { .nx-nav__in { padding: 0 var(--nx-gutter) } }
@media (max-width:767px) { .nx-nav .nx-btn { padding: 0 20px; font-size: 14px } .nx-nav .nx-btn::after { display: none } }


/* =====================================================================
   HERO MESH + INTRO  (any section with class nx-hero)
   The static mesh is a CSS background (editor + no-JS). Live, the footer
   code adds drifting blobs (.nx-mesh) and the class has-mesh.
   ===================================================================== */
.c-section.nx-hero { border-bottom: 1px solid var(--nx-line-soft)!important; background-repeat: no-repeat!important }
.c-section.nx-hero.has-mesh { background-image: none!important }
.nx-mesh { position: absolute; inset: 0; z-index: -1; pointer-events: none; overflow: hidden }
.nx-mesh i { position: absolute; border-radius: 50%; filter: blur(60px); will-change: transform; opacity: .9 }
html.nx-js:not(.nx-ready) .nx-hero .c-row { visibility: hidden }

/* Status pill (Paragraph): nx-pill = gradient check · nx-pill--info = "i" disc */
.nx-pill { display: inline-flex!important; align-items: center; gap: 8px; height: 36px; padding: 0 14px 0 7px!important; background: rgba(255,255,255,.9)!important;
  border: 1px solid var(--nx-line-soft); border-radius: 999px; -webkit-backdrop-filter: blur(7px); backdrop-filter: blur(7px) }
.nx-pill, .nx-pill :is(p,span) { font: 500 13px/1.2 var(--nx-display)!important; color: var(--nx-body)!important; white-space: nowrap }
.nx-pill::before { content: ""; flex: none; width: 22px; height: 22px; border-radius: 50%; background: var(--nx-check) center/12px 12px no-repeat, var(--nx-grad) }
.nx-pill--info { gap: 10px; padding-left: 8px!important }
.nx-pill--info::before { background: url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Info dot' clip-path='url(%23clip0_0_4)'%3E%3Cpath id='Vector' d='M11 21.5C16.8 21.5 21.5 16.8 21.5 11C21.5 5.2 16.8 0.5 11 0.5C5.2 0.5 0.5 5.2 0.5 11C0.5 16.8 5.2 21.5 11 21.5Z' fill='%23F4F2FE' stroke='%23D7D3FB'/%3E%3Cpath id='Vector_2' d='M11 15.5V10.5M11 7H11.01' stroke-width='2' stroke-linecap='round' stroke='%2316141F'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_0_4'%3E%3Crect width='22' height='22' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E") center/contain no-repeat }
.c-wrapper:has(> .nx-pill) { width: auto!important }

/* =====================================================================
   SECTION HEAD  (column class nx-head: eyebrow + headline + lead, centred)
   ===================================================================== */
.nx-head > .vertical.inner { align-items: center!important; text-align: center; gap: 18px; max-width: 880px; margin: 0 auto!important }
.nx-head .text-output * { text-align: center!important }
.nx-head .c-paragraph { max-width: 680px }
@media (max-width:767px) { .nx-head > .vertical.inner { gap: 14px } }

/* =====================================================================
   MEDIA + COPY ROW  (section "nx-sec nx-duo" · columns "nx-media" + "nx-copy")
   ===================================================================== */
.c-section.nx-duo { --sec-pt: 96px; --sec-pb: 96px }
.nx-duo .c-row > .inner { align-items: center!important; gap: 72px }
.nx-sec .c-column.nx-media { position: relative!important; flex: 0 0 624px!important; height: 480px; border-radius: 28px; overflow: hidden; background: #eef0f6!important; isolation: isolate }
.nx-media > .vertical.inner { position: static!important }
.nx-media .c-image { position: absolute!important; inset: 0; z-index: -1; overflow: hidden }
.nx-media .c-image :is(.image-container, .image-container > div, .image-container > div > div, picture) { width: 100%!important; height: 100%!important; max-width: none!important }
.nx-media .c-image img { position: absolute; left: 0; top: -9%; width: 100%!important; height: 118%!important; max-width: none!important; object-fit: cover; will-change: transform }
.nx-media .c-wrapper:has(> .nx-float) { left: 24px; bottom: 24px }
.nx-copy > .vertical.inner { align-items: flex-start!important; justify-content: center; gap: 18px }
.nx-copy > .vertical.inner > :is(.c-bullet-list, .c-button, .c-paragraph:has(> .nx-callout)) { margin-top: 6px!important }
.nx-copy .c-bullet-list, .nx-copy .c-wrapper:has(> .nx-callout) { width: 100% }
@media (max-width:1279px) {
  .nx-duo .c-row > .inner { gap: 48px }
  .nx-sec .c-column.nx-media { flex-basis: 46%!important; height: 440px }
}
@media (max-width:991px) {
  .c-section.nx-duo { --sec-pt: 64px; --sec-pb: 64px }
  .nx-duo .c-row > .inner { flex-direction: column!important; align-items: stretch!important; gap: 32px }
  .nx-sec .c-column.nx-media { flex: none!important; width: 100%!important; height: auto; aspect-ratio: 4 / 3 }
}
@media (max-width:767px) {
  .c-section.nx-duo { --sec-pt: 56px; --sec-pb: 56px }
  .nx-duo .c-row > .inner { gap: 28px }
  .nx-sec .c-column.nx-media { aspect-ratio: 335 / 240; border-radius: 24px }
  .nx-media .c-wrapper:has(> .nx-float) { left: 12px; bottom: 12px }
  .nx-copy > .vertical.inner { gap: 14px }
  .nx-copy .c-button, .nx-copy :is(a,button).nx-gbtn { width: 100%!important; display: flex!important }
  .nx-copy > .vertical.inner > :is(.c-bullet-list, .c-button, .c-paragraph:has(> .nx-callout)) { margin-top: 10px!important }
}

/* Callout (Paragraph, class nx-callout + an icon class, e.g. nx-callout--email) */
.nx-callout { position: relative; display: block!important; padding: 18px 20px 18px 58px!important; background: var(--nx-tint)!important; border: 1px solid #e6e2fd; border-radius: 16px }
.nx-callout, .nx-callout :is(p,span,a) { font: 400 14px/1.55 var(--nx-text)!important; color: var(--nx-body)!important }
.nx-callout a { text-decoration: none!important; background: var(--nx-grad) 0 100%/0 1px no-repeat; transition: background-size .45s var(--nx-ease) }
.nx-callout a:hover { background-size: 100% 1px }
.nx-callout::before { content: ""; position: absolute; left: 20px; top: 18px; width: 24px; height: 24px; background: var(--ico, url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Info button' clip-path='url(%23clip0_0_292)'%3E%3Cpath id='Vector' d='M13.12 7C13.12 10.38 10.38 13.12 7 13.12C3.62 13.12 0.88 10.38 0.88 7C0.88 3.62 3.62 0.88 7 0.88C10.38 0.88 13.12 3.62 13.12 7Z' stroke-width='1.23' stroke='%236F62B8'/%3E%3Cpath id='Vector_2' d='M7 6.3V9.97' stroke-width='1.31' stroke-linecap='round' stroke='%236F62B8'/%3E%3Cpath id='Vector_3' d='M7 5.12C7.46 5.12 7.83 4.75 7.83 4.29C7.83 3.83 7.46 3.46 7 3.46C6.54 3.46 6.17 3.83 6.17 4.29C6.17 4.75 6.54 5.12 7 5.12Z' fill='%236F62B8'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_0_292'%3E%3Crect width='14' height='14' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E")) center/contain no-repeat }
.nx-callout--email { --ico: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Email / editable paths'%3E%3Cpath id='Vector' d='M26 11L17.03 16.7C16.72 16.89 16.36 17 16 17C15.64 17 15.28 16.89 14.97 16.7L6 11M8 8H24C25.33 8 26 8.67 26 10V22C26 23.33 25.33 24 24 24H8C6.67 24 6 23.33 6 22V10C6 8.67 6.67 8 8 8Z' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' stroke='black'/%3E%3C/g%3E%3C/svg%3E") }
@media (max-width:767px) { .nx-callout { padding: 16px 18px 16px 52px!important } .nx-callout::before { left: 18px; top: 50%; margin-top: -12px } }

/* Icons drawn by CSS from a column class (no image uploads) */
.nx-ico-clinician { --ico: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Clinician / editable paths'%3E%3Cpath id='Lucide / stethoscope' d='M15 6.5V7.5M15 7.5V8.5M15 7.5H16C16.53 7.5 17.04 7.71 17.41 8.09C17.79 8.46 18 8.97 18 9.5V13.5C18 15.09 17.37 16.62 16.24 17.74C15.12 18.87 13.59 19.5 12 19.5M9 6.5V7.5M9 7.5V8.5M9 7.5H8C7.47 7.5 6.96 7.71 6.59 8.09C6.21 8.46 6 8.97 6 9.5V13.5C6 15.09 6.63 16.62 7.76 17.74C8.88 18.87 10.41 19.5 12 19.5M12 19.5C12 21.09 12.63 22.62 13.76 23.74C14.88 24.87 16.41 25.5 18 25.5C19.59 25.5 21.12 24.87 22.24 23.74C23.37 22.62 24 21.09 24 19.5V16.5M24 16.5C24.53 16.5 25.04 16.29 25.41 15.91C25.79 15.54 26 15.03 26 14.5C26 13.97 25.79 13.46 25.41 13.09C25.04 12.71 24.53 12.5 24 12.5C23.47 12.5 22.96 12.71 22.59 13.09C22.21 13.46 22 13.97 22 14.5C22 15.03 22.21 15.54 22.59 15.91C22.96 16.29 23.47 16.5 24 16.5Z' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' stroke='url(%23paint0_linear_0_252)'/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_0_252' x1='9.33' y1='9.67' x2='21.98' y2='22.98' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%235AC8FA'/%3E%3Cstop offset='1' stop-color='%238E8CF8'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E") }
.nx-ico-consent   { --ico: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Informed consent / editable paths'%3E%3Cpath id='Vector' d='M25 21.5L22.84 19.63C22.77 19.56 22.68 19.52 22.59 19.5C22.49 19.48 22.39 19.5 22.3 19.54C22.21 19.58 22.13 19.64 22.08 19.72C22.03 19.8 22 19.9 22 20V20.5C22 20.76 21.89 21.02 21.71 21.21C21.52 21.39 21.27 21.5 21 21.5H19C18.73 21.5 18.48 21.39 18.29 21.21C18.11 21.02 18 20.76 18 20.5C18 18.69 15.98 17.45 13.19 16.87M13.19 16.87C12.06 16.63 10.8 16.51 9.5 16.5C8.84 16.5 8.2 16.76 7.73 17.23C7.26 17.7 7 18.34 7 19C7 19.66 7.26 20.3 7.73 20.77C8.2 21.24 8.84 21.5 9.5 21.5C11.28 21.5 12.41 19.42 13.19 16.87ZM13.19 16.87C14.23 13.48 14.66 9.26 15.21 8C15.37 7.63 15.62 7.3 15.94 7.05C16.26 6.79 16.63 6.62 17.03 6.54C17.43 6.47 17.84 6.49 18.23 6.61C18.62 6.73 18.97 6.94 19.26 7.23C19.55 7.51 19.76 7.86 19.88 8.25C20.01 8.64 20.03 9.05 19.96 9.45C19.89 9.85 19.72 10.23 19.46 10.54C19.21 10.86 18.89 11.12 18.52 11.28M7 25.5H25' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' stroke='url(%23paint0_linear_0_254)'/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_0_254' x1='10' y1='9.67' x2='22.65' y2='21.65' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%235AC8FA'/%3E%3Cstop offset='1' stop-color='%238E8CF8'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E") }
.nx-ico-coldchain { --ico: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Cold chain / editable paths'%3E%3Cpath id='Vector' d='M6 16H12M12 16H16M12 16L8 12M12 16L8 20M16 16H20M16 16V12M16 16V20M20 16H26M20 16L24 20M20 16L24 12M16 6V12M16 12L20 8M16 12L12 8M16 20V26M16 20L12 24M16 20L20 24' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' stroke='url(%23paint0_linear_0_261)'/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_0_261' x1='9.33' y1='9.33' x2='22.67' y2='22.67' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%235AC8FA'/%3E%3Cstop offset='1' stop-color='%238E8CF8'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E") }
.nx-ico-delivery  { --ico: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Delivery / editable paths'%3E%3Cpath id='Lucide / truck' d='M18 22V12M18 22H19M18 22H13M18 12V10C18 9.47 17.79 8.96 17.41 8.59C17.04 8.21 16.53 8 16 8H8C7.47 8 6.96 8.21 6.59 8.59C6.21 8.96 6 9.47 6 10V21C6 21.27 6.11 21.52 6.29 21.71C6.48 21.89 6.73 22 7 22H9M18 12H21.52C21.67 12 21.82 12.03 21.95 12.1C22.09 12.16 22.21 12.26 22.3 12.38L25.78 16.73C25.92 16.9 26 17.12 26 17.35V21C26 21.27 25.89 21.52 25.71 21.71C25.52 21.89 25.27 22 25 22H23M9 22C9 22.53 9.21 23.04 9.59 23.41C9.96 23.79 10.47 24 11 24C11.53 24 12.04 23.79 12.41 23.41C12.79 23.04 13 22.53 13 22M9 22C9 21.47 9.21 20.96 9.59 20.59C9.96 20.21 10.47 20 11 20C11.53 20 12.04 20.21 12.41 20.59C12.79 20.96 13 21.47 13 22M19 22C19 22.53 19.21 23.04 19.59 23.41C19.96 23.79 20.47 24 21 24C21.53 24 22.04 23.79 22.41 23.41C22.79 23.04 23 22.53 23 22M19 22C19 21.47 19.21 20.96 19.59 20.59C19.96 20.21 20.47 20 21 20C21.53 20 22.04 20.21 22.41 20.59C22.79 20.96 23 21.47 23 22' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' stroke='url(%23paint0_linear_0_259)'/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_0_259' x1='9.33' y1='10.67' x2='19.74' y2='23.67' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%235AC8FA'/%3E%3Cstop offset='1' stop-color='%238E8CF8'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E") }
.nx-ico-education { --ico: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Education / editable paths'%3E%3Cpath id='Lucide / book-open' d='M16 11V25M16 11C16 9.94 15.58 8.92 14.83 8.17C14.08 7.42 13.06 7 12 7H7C6.73 7 6.48 7.11 6.29 7.29C6.11 7.48 6 7.73 6 8V21C6 21.27 6.11 21.52 6.29 21.71C6.48 21.89 6.73 22 7 22H13C13.8 22 14.56 22.32 15.12 22.88C15.68 23.44 16 24.2 16 25M16 11C16 9.94 16.42 8.92 17.17 8.17C17.92 7.42 18.94 7 20 7H25C25.27 7 25.52 7.11 25.71 7.29C25.89 7.48 26 7.73 26 8V21C26 21.27 25.89 21.52 25.71 21.71C25.52 21.89 25.27 22 25 22H19C18.2 22 17.44 22.32 16.88 22.88C16.32 23.44 16 24.2 16 25' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' stroke='url(%23paint0_linear_0_332)'/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_0_332' x1='9.33' y1='10' x2='21.27' y2='23.26' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%235AC8FA'/%3E%3Cstop offset='1' stop-color='%238E8CF8'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E") }
.nx-ico-support   { --ico: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Participant support / editable paths'%3E%3Cpath id='Lucide / headset' d='M7 15H10C10.53 15 11.04 15.21 11.41 15.59C11.79 15.96 12 16.47 12 17V20C12 20.53 11.79 21.04 11.41 21.41C11.04 21.79 10.53 22 10 22H9C8.47 22 7.96 21.79 7.59 21.41C7.21 21.04 7 20.53 7 20V15ZM7 15C7 13.82 7.23 12.65 7.69 11.56C8.14 10.46 8.8 9.47 9.64 8.64C10.47 7.8 11.46 7.14 12.56 6.69C13.65 6.23 14.82 6 16 6C17.18 6 18.35 6.23 19.44 6.69C20.54 7.14 21.53 7.8 22.36 8.64C23.2 9.47 23.86 10.46 24.31 11.56C24.77 12.65 25 13.82 25 15M25 15V20M25 15H22C21.47 15 20.96 15.21 20.59 15.59C20.21 15.96 20 16.47 20 17V20C20 20.53 20.21 21.04 20.59 21.41C20.96 21.79 21.47 22 22 22H23C23.53 22 24.04 21.79 24.41 21.41C24.79 21.04 25 20.53 25 20M25 20V22C25 23.06 24.58 24.08 23.83 24.83C23.08 25.58 22.06 26 21 26H16' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' stroke='url(%23paint0_linear_0_256)'/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_0_256' x1='10' y1='9.33' x2='23.26' y2='21.27' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%235AC8FA'/%3E%3Cstop offset='1' stop-color='%238E8CF8'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E") }
.nx-ico-payments  { --ico: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Payments / editable paths'%3E%3Cpath id='Lucide / credit-card' d='M26 14V11C26 9.67 25.33 9 24 9H8C6.67 9 6 9.67 6 11V14M26 14V21C26 22.33 25.33 23 24 23H8C6.67 23 6 22.33 6 21V14M26 14H6' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' stroke='url(%23paint0_linear_0_298)'/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_0_298' x1='9.33' y1='11.33' x2='18.1' y2='23.86' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%235AC8FA'/%3E%3Cstop offset='1' stop-color='%238E8CF8'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E") }
.nx-ico-research  { --ico: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Research / editable paths'%3E%3Cpath id='Lucide / flask-conical' d='M18 6V12C18 12.34 18.08 12.67 18.25 12.96L21.55 19M18 6H14M18 6H19.5M21.55 19L23.75 23.04C23.92 23.34 24.01 23.69 24 24.03C23.99 24.38 23.9 24.72 23.72 25.02C23.54 25.32 23.29 25.57 22.99 25.74C22.69 25.91 22.35 26 22 26H10C9.65 26 9.31 25.91 9.01 25.74C8.71 25.57 8.46 25.32 8.28 25.02C8.1 24.72 8.01 24.38 8 24.03C7.99 23.69 8.08 23.34 8.24 23.04L10.45 19M21.55 19H10.45M21.55 19H21.55M10.45 19L13.76 12.96C13.92 12.67 14 12.34 14 12V6M10.45 19H10.45M14 6H12.5' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' stroke='url(%23paint0_linear_0_40)'/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_0_40' x1='10.67' y1='9.33' x2='23.67' y2='19.74' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%235AC8FA'/%3E%3Cstop offset='1' stop-color='%238E8CF8'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E") }
.nx-ico-referral  { --ico: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Referral / editable paths'%3E%3Cpath id='Lucide / user-round-plus' d='M6 24.5C6 22.96 6.44 21.45 7.28 20.16C8.11 18.87 9.31 17.84 10.71 17.21C11.73 16.75 12.84 16.51 13.95 16.5M13.95 16.5C13.98 16.5 14.02 16.5 14.05 16.5M13.95 16.5C13.97 16.5 13.98 16.5 14 16.5C14.02 16.5 14.03 16.5 14.05 16.5M13.95 16.5C12.64 16.49 11.39 15.96 10.46 15.04C9.53 14.1 9 12.83 9 11.5C9 10.17 9.53 8.9 10.46 7.96C11.4 7.03 12.67 6.5 14 6.5C15.33 6.5 16.6 7.03 17.54 7.96C18.47 8.9 19 10.17 19 11.5C19 12.83 18.47 14.1 17.54 15.04C16.61 15.96 15.36 16.49 14.05 16.5M14.05 16.5C14.43 16.5 14.81 16.53 15.19 16.59C16.71 16.82 18.14 17.48 19.29 18.5M23 19.5V22.5M23 22.5V25.5M23 22.5H26M23 22.5H20' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' stroke='url(%23paint0_linear_0_54)'/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_0_54' x1='9.33' y1='9.67' x2='21.98' y2='22.98' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%235AC8FA'/%3E%3Cstop offset='1' stop-color='%238E8CF8'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E") }
.nx-ico-email     { --ico: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Email / editable paths'%3E%3Cpath id='Vector' d='M26 11L17.03 16.7C16.72 16.89 16.36 17 16 17C15.64 17 15.28 16.89 14.97 16.7L6 11M8 8H24C25.33 8 26 8.67 26 10V22C26 23.33 25.33 24 24 24H8C6.67 24 6 23.33 6 22V10C6 8.67 6.67 8 8 8Z' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' stroke='black'/%3E%3C/g%3E%3C/svg%3E") }

/* =====================================================================
   FOOTER  (custom code · section class nx-code-sec)
   ===================================================================== */
.nx-footer { background: #fff; padding-top: 64px }
.nx-footer__in { max-width: 1440px; margin: 0 auto; padding: 0 60px; display: flex; flex-direction: column; gap: 24px }
.nx-footer__info { display: flex; flex-direction: column; gap: 8px; padding: 0 64px }
.nx-footer__info h2, .nx-footer__label { font: 500 12.5px/1.2 var(--nx-display); letter-spacing: .09em; text-transform: uppercase; color: var(--nx-body) }
.nx-footer__info p { font: 300 13px/1.55 var(--nx-text); color: var(--nx-ink) }
.nx-footer__card { display: grid; grid-template-columns: 403px 282px 282px auto; gap: 40px; align-items: start; padding: 64px;
  background: var(--nx-wash-footer); border: 1px solid var(--nx-line); border-radius: 28px; will-change: transform }
.nx-footer__brand { display: flex; flex-direction: column; gap: 18px }
.nx-footer__brand img { width: 78px; height: 28px }
.nx-footer__brand address { font: 300 15px/24px var(--nx-text); font-style: normal; color: var(--nx-muted) }
.nx-footer__col { display: flex; flex-direction: column; gap: 16px }
.nx-footer__links { display: flex; flex-direction: column; gap: 12px }
.nx-footer__links a { width: fit-content; padding-bottom: 2px; font: 500 15px/1.2 var(--nx-display); color: var(--nx-muted);
  background: var(--nx-grad) 0 100%/0 1px no-repeat; transition: color .3s, background-size .45s var(--nx-ease) }
.nx-footer__links a:hover { color: var(--nx-ink); background-size: 100% 1px }
.nx-top { justify-self: end; display: flex; flex-direction: column; align-items: center; gap: 10px; padding: 0; background: none; border: 0; cursor: pointer;
  font: 400 13px/1.2 var(--nx-text); color: var(--nx-muted) }
.nx-top__ring { position: relative; width: 64px; height: 64px }
.nx-top__ring svg { position: absolute; left: -14px; top: 0; width: 92px; height: 96px; overflow: visible }
.nx-top__progress { transform: rotate(-90deg); transform-origin: 46px 32px }
.nx-top__arrow { transition: transform .45s var(--nx-ease) }
.nx-top:hover .nx-top__arrow { transform: translateY(-2px) }
.nx-footer__legal { display: flex; gap: 48px; padding: 0 24px 32px; font: 300 13px/1.55 var(--nx-text); color: var(--nx-subtle) }
.nx-footer__legal p:first-child { width: 714px; max-width: 60%; flex: none; font-style: italic }
.nx-footer__legal p:last-child { flex: 1 1 0; text-align: right }
@media (max-width:1279px) {
  .nx-footer__in { padding: 0 var(--nx-gutter) }
  .nx-footer__card { grid-template-columns: 1.4fr 1fr 1fr auto; padding: 48px }
}
@media (max-width:991px) {
  .nx-footer__info { padding: 0 8px }
  .nx-footer__card { grid-template-columns: 1fr 1fr; gap: 32px }
  .nx-footer__brand { grid-column: 1 / -1 }
  .nx-top { grid-column: 1 / -1; justify-self: start; flex-direction: row; gap: 14px }
  .nx-footer__legal { flex-direction: column; gap: 12px; padding: 0 8px 24px }
  .nx-footer__legal p:first-child { width: auto; max-width: none }
  .nx-footer__legal p:last-child { text-align: left }
}
@media (max-width:767px) {
  .nx-footer { padding-top: 32px }
  .nx-footer__info { padding: 0 20px }
  .nx-footer__card { grid-template-columns: auto auto; justify-content: space-between; padding: 28px 24px; gap: 28px 16px; border-radius: 24px }
}


/* =====================================================================
   REDUCED MOTION — everything rests in its final state
   ===================================================================== */
@media (prefers-reduced-motion:reduce) {
  .nx *, .nx-sec .c-column, .nx-sec .c-column::before, .nx-sec .c-column > .vertical.inner::before, .nx-sec li { transition: none!important; animation: none!important }
}

/* ##################################################################### native.css */
/* =====================================================================
   NURI · NATIVE NAV + FOOTER  (built from GHL elements, no custom code)
   Same look as the custom-code nav/footer above (.nx-nav / .nx-footer),
   which stay supported until every page has switched.

   NAV     section "nx-navbar"
             row → column "nx-navbar-brand"   : Image (logo, class nx-logo)
                   column "nx-navbar-actions" : Button "nx-gbtn nx-gbtn--nav" (+ nx-gbtn--light)
                                                or Paragraph "nx-nav-meta" (Checkout label)
   FOOTER  section "nx-footbar"
             row 1 → column "nx-foot-info"    : Sub-Headline "nx-foot-label" + Paragraph "nx-foot-text"
             row 2 "nx-foot-card" → 4 columns : "nx-foot-brand" (logo "nx-logo nx-logo--footer" + Paragraph "nx-foot-address")
                                                "nx-foot-col" ×2 (Sub-Headline "nx-foot-label" + Bullet List "nx-foot-links")
                                                "nx-foot-top" (Button "nx-totop")
             row 3 "nx-foot-legal" → 2 columns: Paragraph "nx-foot-disclaimer" · Paragraph "nx-foot-copy"
   ===================================================================== */

/* ---------- NAV ----------
   In the editor it is an ordinary 76px bar in the flow. Live (html.nx-live, set by the
   Header Code) the bar is fixed and the section keeps its height, so nothing jumps and
   <body> is never padded. */
.c-section.nx-navbar { position: relative; z-index: 600; height: var(--nx-nav-h)!important; min-height: 0!important; padding: 0!important; margin: 0!important;
  background: transparent!important; overflow: visible!important; border: 0!important; box-shadow: none!important }
.nx-navbar > .inner { box-sizing: border-box!important; height: var(--nx-nav-h); width: 100%!important; max-width: none!important; margin: 0!important; padding: 0!important;
  background: #fff; border-bottom: 1px solid var(--nx-line,#e4e4e8); transition: transform .5s var(--nx-ease,cubic-bezier(.2,.7,.2,1)) }
html.nx-live .nx-navbar > .inner { position: fixed; top: 0; left: 0; right: 0; z-index: 600 }
html.nx-live .nx-navbar.is-hidden > .inner { transform: translateY(-100%) }
.nx-navbar .c-row { box-sizing: border-box!important; height: 100%; width: 100%!important; max-width: 1440px!important; margin: 0 auto!important; padding: 0 72px!important; background: none!important }
.nx-navbar .c-row > .inner { display: flex!important; flex-direction: row!important; flex-wrap: nowrap!important; align-items: center!important; justify-content: space-between!important;
  gap: 16px; height: 100%; width: 100%!important; max-width: none!important; margin: 0!important; padding: 0!important }
.nx-navbar .c-column { flex: 0 0 auto!important; width: auto!important; min-width: 0; max-width: none!important; margin: 0!important; padding: 0!important }
.nx-navbar .c-column > .vertical.inner { display: flex!important; flex-direction: row!important; flex-wrap: nowrap!important; align-items: center!important; justify-content: flex-end; gap: 12px; height: 100%; margin: 0!important; padding: 0!important }
.nx-navbar .vertical.inner > .c-wrapper { margin: 0!important; padding: 0!important; width: auto!important }
.nx-navbar .text-output, .nx-footbar .text-output { margin: 0!important; padding: 0!important }
.nx-navbar .text-output :where(h1,h2,h3,h4,h5,h6,p,ul,ol), .nx-footbar .text-output :where(h1,h2,h3,h4,h5,h6,p,ul,ol) { margin: 0!important; padding: 0!important }

/* Logo (Image element, class nx-logo). Clicking it glides to the top (footer code). */
:is(.nx-navbar,.nx-footbar) .c-image, :is(.nx-navbar,.nx-footbar) .c-image :is(.image-container, .image-container > div, .image-container > div > div, picture, a) {
  display: block!important; width: auto!important; height: auto!important; margin: 0!important; padding: 0!important; line-height: 0 }
/* Fixed size whichever node GHL gives the class (the <img> or the .c-image wrapper), and even
   with no class at all, so GHL's own image width (a % of the shrink-wrapped column) can't collapse it to 0. */
:is(img.nx-logo, .nx-logo img, .nx-navbar-brand img, .nx-navbar .c-image img) {
  display: block!important; width: 73px!important; min-width: 73px!important; height: 26px!important; max-width: none!important; max-height: none!important;
  object-fit: contain; object-position: left center; cursor: pointer; opacity: 1!important; visibility: visible!important }
:is(img.nx-logo--footer, .nx-logo--footer img, .nx-foot-brand .c-image img) {
  display: block!important; width: 78px!important; min-width: 78px!important; height: 28px!important; max-width: none!important; max-height: none!important;
  object-fit: contain; object-position: left center; cursor: default }
.nx-navbar .c-image, .nx-navbar-brand .c-wrapper, .nx-foot-brand .c-image { flex: none!important; min-width: max-content!important }

/* Nav button: the shared nx-gbtn, sized like the bar's button */
:is(a,button).nx-gbtn.nx-gbtn--nav { height: 44px!important; padding: 0 20px!important; gap: 8px; font-size: 13px!important; white-space: nowrap }
:is(a,button).nx-gbtn.nx-gbtn--nav * { white-space: nowrap!important }
/* Plain label with a shield (Checkout: Paragraph "nx-nav-meta") */
.nx-navbar .nx-nav-meta { display: inline-flex!important; align-items: center; gap: 8px; height: 44px; padding: 0 20px!important }
.nx-nav-meta, .nx-nav-meta :is(p,span,strong) { font: 500 13px/1.2 var(--nx-display,"Montserrat",ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif)!important; color: var(--nx-ink,#0a0a0c)!important; white-space: nowrap }
.nx-nav-meta::after { content: ""; width: 16px; height: 16px; flex: none; background: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Icon'%3E%3Cpath id='Vector' d='M13.33 8.67C13.33 12 11 13.67 8.23 14.63C8.08 14.68 7.92 14.68 7.78 14.63C5 13.67 2.67 12 2.67 8.67V4C2.67 3.82 2.74 3.65 2.86 3.53C2.99 3.4 3.16 3.33 3.33 3.33C4.67 3.33 6.33 2.53 7.49 1.52C7.63 1.4 7.81 1.33 8 1.33C8.19 1.33 8.37 1.4 8.51 1.52C9.67 2.54 11.33 3.33 12.67 3.33C12.84 3.33 13.01 3.4 13.14 3.53C13.26 3.65 13.33 3.82 13.33 4V8.67Z' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' stroke='%230A0A0C'/%3E%3Cpath id='Vector_2' d='M6 8L7.33 9.33L10 6.67' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' stroke='%230A0A0C'/%3E%3C/g%3E%3C/svg%3E") center/contain no-repeat }

@media (max-width:991px) { .nx-navbar .c-row { padding: 0 var(--nx-gutter)!important } }
@media (max-width:767px) {
  /* The bar keeps its button at natural width on phones (the "full-width buttons" rule skips the nav) */
  .nx-navbar .vertical.inner > .c-button, .nx-navbar .c-wrapper:has(> :is(a,button).nx-gbtn) { width: auto!important; align-self: center!important }
  .nx-navbar :is(a,button).nx-gbtn.nx-gbtn--nav { display: inline-flex!important; width: auto!important; padding: 0 20px!important; font-size: 14px!important }
  .nx-navbar :is(a,button).nx-gbtn.nx-gbtn--nav::after { display: none }
  .nx-navbar .nx-nav-meta { padding: 0 4px!important }
}

/* ---------- FOOTER ---------- */
.c-section.nx-footbar { position: relative; padding: 64px 0 0!important; margin: 0!important; background: #fff!important; overflow: visible }
.nx-footbar > .inner { box-sizing: border-box!important; width: 100%!important; max-width: 1440px!important; margin: 0 auto!important; padding: 0 60px!important;
  display: flex!important; flex-direction: column!important; gap: 24px }
.nx-footbar :where(.c-row) { box-sizing: border-box!important; width: 100%!important; max-width: none!important; margin: 0!important; padding: 0!important; background: none!important }
.nx-footbar :where(.c-row > .inner) { display: flex!important; flex-direction: row!important; flex-wrap: nowrap!important; width: 100%!important; max-width: none!important; margin: 0!important; padding: 0!important }
.nx-footbar :where(.c-column) { flex: 1 1 0!important; min-width: 0; width: auto!important; max-width: none!important; margin: 0!important; padding: 0!important }
.nx-footbar :where(.c-column > .vertical.inner) { display: flex!important; flex-direction: column!important; gap: 0; margin: 0!important; padding: 0!important }
.nx-footbar :where(.vertical.inner > .c-wrapper) { margin: 0!important; padding: 0!important }

/* Row 1 · important program information */
.nx-footbar .c-column.nx-foot-info { padding: 0 64px!important }
.nx-foot-info > .vertical.inner { gap: 8px }
.nx-foot-label, .nx-foot-label :is(h1,h2,h3,h4,h5,h6,p,span,strong) { font: 500 12.5px/1.2 var(--nx-display,"Montserrat",ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif)!important; letter-spacing: .09em!important; text-transform: uppercase!important; color: var(--nx-body,#2a2c33)!important }
.nx-foot-text, .nx-foot-text :is(p,span) { font: 300 13px/1.55 var(--nx-text,"Roboto",ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif)!important; color: var(--nx-ink,#0a0a0c)!important }

/* Row 2 · the card: brand · Legal · Need help? · Back to top */
.nx-footbar .c-row.nx-foot-card { box-sizing: border-box!important; padding: 64px!important; background: var(--nx-wash-footer,linear-gradient(166deg,#f1faff 14.3%,#faf4ff 85.7%))!important; border: 1px solid var(--nx-line,#e4e4e8)!important; border-radius: 28px; will-change: transform }
.nx-foot-card > .inner { display: grid!important; grid-template-columns: 403px 282px 282px auto; gap: 40px; align-items: start!important }
.nx-foot-card > .inner > .c-column { width: auto!important; min-width: 0 }
.nx-foot-brand > .vertical.inner { gap: 18px }
.nx-foot-address, .nx-foot-address :is(p,span) { font: 300 15px/24px var(--nx-text,"Roboto",ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif)!important; font-style: normal!important; color: var(--nx-muted,#5f6370)!important }
.nx-foot-col > .vertical.inner { gap: 16px }
/* Links: a Bullet List, one link per item */
.c-wrapper:has(> .nx-foot-links) { width: 100%!important }
.nx-foot-links :is(ul,ol) { display: flex!important; flex-direction: column; gap: 12px; margin: 0!important; padding: 0!important; list-style: none!important }
.nx-foot-links li { margin: 0!important; padding: 0!important; list-style: none!important; text-indent: 0!important }
.nx-foot-links li::marker { content: ""!important }
.nx-foot-links li::before { content: none!important; display: none!important }
.nx-foot-links li :is(i,svg,.fa,[class*="icon"]) { display: none!important }
.nx-foot-links li, .nx-foot-links li :is(p,span) { margin: 0!important; padding: 0!important; font: 500 15px/1.2 var(--nx-display,"Montserrat",ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif)!important; color: var(--nx-muted,#5f6370)!important }
.nx-foot-links a { display: inline-block; width: fit-content; padding-bottom: 2px; color: var(--nx-muted,#5f6370)!important; text-decoration: none!important;
  background: var(--nx-grad,linear-gradient(90deg,#5ac8fa 0%,#8e8cf8 55%,#c17cf6 100%)) 0 100%/0 1px no-repeat; transition: color .3s, background-size .45s var(--nx-ease,cubic-bezier(.2,.7,.2,1)) }
.nx-foot-links a :is(span,strong) { color: inherit!important; text-decoration: none!important }
.nx-foot-links a:hover { color: var(--nx-ink,#0a0a0c)!important; background-size: 100% 1px }

/* Back to top (Button "nx-totop", link #top). The ring is drawn by CSS (editor) and
   swapped for a live progress ring by the footer code (class has-ring). */
.nx-foot-card .c-column.nx-foot-top { justify-self: end }
.nx-foot-top > .vertical.inner { align-items: center!important }
:is(a,button).nx-totop { display: flex!important; flex-direction: column!important; align-items: center!important; justify-content: flex-start!important; gap: 10px;
  width: auto!important; height: auto!important; min-height: 0!important; padding: 0!important; margin: 0!important; background: none!important; border: 0!important; box-shadow: none!important; border-radius: 0!important;
  font: 400 13px/1.2 var(--nx-text,"Roboto",ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif)!important; color: var(--nx-muted,#5f6370)!important; text-decoration: none!important; cursor: pointer }
:is(a,button).nx-totop * { font: inherit!important; color: inherit!important; margin: 0!important; padding: 0!important; text-decoration: none!important }
:is(a,button).nx-totop :is(.button-icon-start,.button-icon-end,.sub-heading-button):empty { display: none!important }
:is(a,button).nx-totop::before { content: ""; order: -1; display: block; width: 64px; height: 64px; flex: none; border-radius: 50%;
  background: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.17 12L12 6.17L17.83 12' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' stroke='%230A0A0C'/%3E%3Cpath d='M12 17.83V6.17' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' stroke='%230A0A0C'/%3E%3C/svg%3E") center/24px 24px no-repeat, #fff; box-shadow: inset 0 0 0 2.5px var(--nx-line,#e4e4e8), 0 18px 18px -22px rgba(110,90,220,.6) }
:is(a,button).nx-totop.has-ring::before { display: none }
:is(a,button).nx-totop .nx-top__ring { order: -1 }
:is(a,button).nx-totop:hover .nx-top__arrow { transform: translateY(-2px) }

/* Row 3 · legal line */
.nx-footbar .c-row.nx-foot-legal { box-sizing: border-box!important; padding: 0 24px 32px!important }
.nx-foot-legal > .inner { gap: 48px }
.nx-foot-legal > .inner > .c-column:first-child { flex: 0 0 auto!important; width: 714px!important; max-width: 60%!important }
.nx-foot-disclaimer, .nx-foot-disclaimer :is(p,span), .nx-foot-copy, .nx-foot-copy :is(p,span) { font: 300 13px/1.55 var(--nx-text,"Roboto",ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif)!important; color: var(--nx-subtle,#6b6f7a)!important }
.nx-foot-disclaimer, .nx-foot-disclaimer :is(p,span) { font-style: italic!important }
.nx-foot-copy, .nx-foot-copy :is(p,span) { text-align: right!important }

@media (max-width:1279px) {
  .nx-footbar > .inner { padding: 0 var(--nx-gutter)!important }
  .nx-foot-card > .inner { grid-template-columns: 1.4fr 1fr 1fr auto }
  .nx-footbar .c-row.nx-foot-card { padding: 48px!important }
}
@media (max-width:991px) {
  .nx-footbar .c-column.nx-foot-info { padding: 0 8px!important }
  .nx-foot-card > .inner { grid-template-columns: 1fr 1fr; gap: 32px }
  .nx-foot-card > .inner > .c-column.nx-foot-brand { grid-column: 1 / -1 }
  .nx-foot-card .c-column.nx-foot-top { grid-column: 1 / -1; justify-self: start }
  .nx-foot-top > .vertical.inner { align-items: flex-start!important }
  :is(a,button).nx-totop { flex-direction: row!important; align-items: center!important; gap: 14px }
  .nx-footbar .c-row.nx-foot-legal { padding: 0 8px 24px!important }
  .nx-foot-legal > .inner { flex-direction: column!important; gap: 12px }
  .nx-foot-legal > .inner > .c-column:first-child { width: auto!important; max-width: none!important }
  .nx-foot-legal > .inner > .c-column { flex: none!important; width: 100%!important }
  .nx-foot-copy, .nx-foot-copy :is(p,span) { text-align: left!important }
}
@media (max-width:767px) {
  .c-section.nx-footbar { padding-top: 32px!important }
  .nx-footbar .c-column.nx-foot-info { padding: 0 20px!important }
  .nx-foot-card > .inner { grid-template-columns: auto auto; justify-content: space-between; gap: 28px 16px }
  .nx-footbar .c-row.nx-foot-card { padding: 28px 24px!important; border-radius: 24px }
  /* The back-to-top control stays a ring + label, not a full-width bar */
  .nx-foot-top .vertical.inner > .c-button, .nx-foot-top .c-wrapper:has(> :is(a,button).nx-totop) { width: auto!important; align-self: flex-start!important }
  .nx-footbar :is(a,button).nx-totop { width: auto!important; display: flex!important; justify-content: flex-start!important }
}

/* ##################################################################### 01-approved */
/* =====================================================================
   NURI · 01 APPROVED · PAGE SECTIONS  (appended to shared/base.css)
   Figma: Radiant redesign → "01 Approved · desktop" (261:2541) / mobile (261:1800).
   ===================================================================== */

/* =====================================================================
   02 HERO  (native · section class "nx-sec nx-hero")
   Row: column "nx-hero-copy" + column "nx-hero-visual".
   Unified CSS: these rules are the default hero, so they skip the other heroes
   (nx-hero--center, nx-book-hero, nx-lp-hero) that bring their own layout.
   ===================================================================== */
.c-section.nx-hero:not(.nx-hero--center,.nx-book-hero,.nx-lp-hero) { --sec-pt: 72px; --sec-pb: 88px; border-bottom: 1px solid var(--nx-line-soft)!important;
  /* Static mesh (editor + no-JS). Live, the footer code swaps in drifting blobs. */
  background-image:
    radial-gradient(closest-side, rgba(236,214,251,.85), rgba(236,214,251,0)) ,
    radial-gradient(closest-side, rgba(241,228,253,.85), rgba(241,228,253,0)),
    radial-gradient(closest-side, rgba(199,236,251,.9), rgba(199,236,251,0))!important;
  background-size: 1000px 1000px, 880px 880px, 960px 960px!important;
  background-position: calc(50% + 420px) -580px, calc(50% + 700px) -200px, calc(50% + 620px) 180px!important;
  background-repeat: no-repeat!important }
.nx-hero:not(.nx-hero--center,.nx-book-hero,.nx-lp-hero) .nx-mesh i:nth-child(1) { width: 760px; height: 760px; left: calc(50% + 40px); top: -460px; background: #ecd6fb; opacity: .9 }
.nx-hero:not(.nx-hero--center,.nx-book-hero,.nx-lp-hero) .nx-mesh i:nth-child(2) { width: 670px; height: 670px; left: calc(50% + 365px); top: -95px; background: #f1e4fd; opacity: .9 }
.nx-hero:not(.nx-hero--center,.nx-book-hero,.nx-lp-hero) .nx-mesh i:nth-child(3) { width: 730px; height: 730px; left: calc(50% + 255px); top: 295px; background: #c7ecfb; opacity: .9 }

.nx-hero:not(.nx-hero--center,.nx-book-hero,.nx-lp-hero) .c-row > .inner { align-items: center!important; gap: 56px }
.nx-hero:not(.nx-hero--center,.nx-book-hero,.nx-lp-hero) .c-column.nx-hero-copy { flex: 0 0 640px!important }
.nx-hero:not(.nx-hero--center,.nx-book-hero,.nx-lp-hero) .nx-hero-copy > .vertical.inner { align-items: flex-start!important; justify-content: center; gap: 26px }
.nx-hero:not(.nx-hero--center,.nx-book-hero,.nx-lp-hero) .nx-hero-copy .c-wrapper { max-width: 100% }

/* "Intake complete" status pill (Paragraph, class nx-pill) */

.nx-hero:not(.nx-hero--center,.nx-book-hero,.nx-lp-hero) .nx-hero-visual > .vertical.inner { position: relative; height: 560px; align-items: center!important; justify-content: center!important }
.nx-hero:not(.nx-hero--center,.nx-book-hero,.nx-lp-hero) .nx-hero-visual > .vertical.inner::before { content: ""; position: absolute; width: 420px; height: 420px; left: 50%; top: 50%; margin: -240px 0 0 -232px;
  border-radius: 50%; background: rgba(142,140,248,.3); filter: blur(35px); pointer-events: none }
.nx-hero:not(.nx-hero--center,.nx-book-hero,.nx-lp-hero) .nx-hero-visual .c-image { position: relative; width: 380px!important; height: 380px; flex: none; z-index: 1 }
.nx-hero:not(.nx-hero--center,.nx-book-hero,.nx-lp-hero) .nx-hero-visual .c-image :is(.image-container, .image-container > div, .image-container > div > div, picture) { width: 100%!important; height: 100%!important }
.nx-hero:not(.nx-hero--center,.nx-book-hero,.nx-lp-hero) .nx-hero-visual .c-image img { width: 100%!important; height: 100%!important; max-width: none!important; object-fit: contain; transform: scale(1.41) }
.nx-hero:not(.nx-hero--center,.nx-book-hero,.nx-lp-hero) .nx-hero-visual .c-wrapper:has(> .nx-float--a) { left: calc(50% + 9px); top: calc(50% - 212px) }
.nx-hero:not(.nx-hero--center,.nx-book-hero,.nx-lp-hero) .nx-hero-visual .c-wrapper:has(> .nx-float--b) { left: calc(50% - 190px); top: calc(50% + 176px) }


@media (max-width:1279px) {
  .nx-hero:not(.nx-hero--center,.nx-book-hero,.nx-lp-hero) .c-column.nx-hero-copy { flex: 1 1 0!important }
  .nx-hero:not(.nx-hero--center,.nx-book-hero,.nx-lp-hero) .c-column.nx-hero-visual { flex: 0 0 420px!important }
}
@media (max-width:991px) {
  .nx-hero:not(.nx-hero--center,.nx-book-hero,.nx-lp-hero) .c-row > .inner { flex-direction: column!important; align-items: stretch!important; gap: 8px }
  .nx-hero:not(.nx-hero--center,.nx-book-hero,.nx-lp-hero) .c-column { flex: none!important; width: 100%!important }
  .c-section.nx-hero:not(.nx-hero--center,.nx-book-hero,.nx-lp-hero) { --sec-pt: 48px; --sec-pb: 56px }
  .nx-hero:not(.nx-hero--center,.nx-book-hero,.nx-lp-hero) .nx-hero-visual > .vertical.inner { height: 400px }
}
@media (max-width:767px) {
  .c-section.nx-hero:not(.nx-hero--center,.nx-book-hero,.nx-lp-hero) { --sec-pt: 40px; --sec-pb: 48px;
    background-position: calc(100% + 520px) -560px, calc(100% + 560px) 0, -480px calc(100% + 560px)!important }
  .nx-hero:not(.nx-hero--center,.nx-book-hero,.nx-lp-hero) .nx-mesh i:nth-child(1) { left: auto; right: -480px; top: -460px }
  .nx-hero:not(.nx-hero--center,.nx-book-hero,.nx-lp-hero) .nx-mesh i:nth-child(2) { left: auto; right: -520px; top: 80px }
  .nx-hero:not(.nx-hero--center,.nx-book-hero,.nx-lp-hero) .nx-mesh i:nth-child(3) { left: -420px; top: auto; bottom: -420px }
  .nx-hero:not(.nx-hero--center,.nx-book-hero,.nx-lp-hero) .nx-hero-copy > .vertical.inner { gap: 22px }
  .nx-hero:not(.nx-hero--center,.nx-book-hero,.nx-lp-hero) .nx-pill { padding-left: 14px!important }
  .nx-hero:not(.nx-hero--center,.nx-book-hero,.nx-lp-hero) .nx-pill::before { width: 8px; height: 8px; background: var(--nx-cyan) }
  .nx-hero:not(.nx-hero--center,.nx-book-hero,.nx-lp-hero) .nx-hero-copy .c-button, .nx-hero-copy :is(a,button).nx-gbtn { width: 100%!important; display: flex!important }
  .nx-hero:not(.nx-hero--center,.nx-book-hero,.nx-lp-hero) .nx-hero-visual > .vertical.inner { height: 320px }
  .nx-hero:not(.nx-hero--center,.nx-book-hero,.nx-lp-hero) .nx-hero-visual > .vertical.inner::before { width: 300px; height: 300px; margin: -170px 0 0 -160px }
  .nx-hero:not(.nx-hero--center,.nx-book-hero,.nx-lp-hero) .nx-hero-visual .c-image { width: 260px!important; height: 260px }
  .nx-hero:not(.nx-hero--center,.nx-book-hero,.nx-lp-hero) .nx-hero-visual .c-wrapper:has(> .nx-float--a) { left: auto; right: 0; top: calc(50% - 116px) }
  .nx-hero:not(.nx-hero--center,.nx-book-hero,.nx-lp-hero) .nx-hero-visual .c-wrapper:has(> .nx-float--b) { left: calc(50% - 148px); top: calc(50% + 110px) }
}

/* =====================================================================
   03 PLANS  (native · section class "nx-sec nx-plans")
   Rows: head · cards (columns nx-plan nx-plan--featured / nx-plan) · or.
   ===================================================================== */
.c-section.nx-plans { --sec-pt: 96px; --sec-pb: 96px; background-image: var(--nx-wash)!important }
.nx-plans > .inner { align-items: center!important }

.nx-plans .c-row:has(.nx-plan) > .inner { display: grid!important; grid-template-columns: repeat(2,minmax(0,1fr)); align-items: stretch!important; gap: 24px; max-width: 920px!important; margin: 0 auto!important }
.nx-plans .c-column.nx-plan { position: relative; isolation: isolate; width: auto!important; padding: 32px!important; background: #fff!important;
  border: 1px solid var(--nx-line)!important; border-radius: 28px!important; overflow: hidden;
  transition: transform .6s var(--nx-ease), box-shadow .6s var(--nx-ease), border-color .4s }
/* Featured: gradient hairline border */
.nx-plans .c-column.nx-plan--featured { border: 1.5px solid transparent!important; box-shadow: var(--nx-shadow-lav);
  background: linear-gradient(#fff,#fff) padding-box, linear-gradient(135deg,#5ac8fa,#8e8cf8 55%,#c17cf6) border-box!important }
.nx-plan:hover { transform: translateY(-6px) }
.nx-plan:not(.nx-plan--featured):hover { border-color: var(--nx-lav)!important; box-shadow: var(--nx-shadow-lav) }
.nx-plan::before { content: ""; position: absolute; inset: 0; z-index: -1; pointer-events: none; opacity: 0; transition: opacity .5s;
  background: radial-gradient(420px circle at var(--mx,50%) var(--my,0%),rgba(142,140,248,.12),transparent 62%) }
.nx-plan:hover::before { opacity: 1 }
.nx-plan > .vertical.inner { align-items: stretch!important }

.nx-plan-term, .nx-plan-term :is(h1,h2,h3,h4,h5,h6,p,span) { font: 500 12.5px/1.2 var(--nx-display)!important; letter-spacing: .09em!important; text-transform: uppercase; color: var(--nx-muted)!important }
.nx-plan .c-wrapper:has(> .nx-plan-term) { margin-bottom: 22px!important }
.nx-plan-price, .nx-plan-price :is(h1,h2,h3,h4,h5,h6,p,span) { font: 500 48px/1.1 var(--nx-display)!important; letter-spacing: -.02em!important; color: var(--nx-ink)!important; white-space: nowrap }
.nx-plan--featured .nx-plan-price, .nx-plan--featured .nx-plan-price :is(h1,h2,h3,h4,h5,h6,p,span) { font-size: 54px!important; line-height: 1!important; letter-spacing: -.03em!important }
.nx-plan-price :is(s,del,strike), .nx-plan-price :is(s,del,strike) span, .nx-plan-price [style*="line-through"] {
  font-size: 26px!important; letter-spacing: -.03em!important; color: var(--nx-muted)!important;
  text-decoration: line-through!important; text-decoration-thickness: 1.5px!important; margin-right: .3em; vertical-align: baseline }
.nx-plan .c-wrapper:has(> .nx-plan-price) { margin-bottom: 24px!important }
.nx-plan .c-wrapper:has(> .nx-plan-price):has(+ .c-wrapper > .nx-plan-save) { margin-bottom: 10px!important }
.nx-plan-save, .nx-plan-save :is(p,span) { font: 400 14px/1.6 var(--nx-text)!important; color: var(--nx-muted)!important }
.nx-plan-save :is(strong,b), .nx-plan-save :is(strong,b) span { font-weight: 500!important; color: var(--nx-ink)!important }
.nx-plan .c-wrapper:has(> .nx-plan-save) { margin-bottom: 24px!important }
.nx-plan .c-divider { margin: 0 0 24px!important; padding: 0!important }
.nx-plan .c-divider :is(.cdivider, .divider-element) { margin: 0!important; padding: 0!important; width: 100%!important }
.nx-plan .c-divider .divider-element { border-top: 1px solid var(--nx-line)!important }

.nx-checks :is(ul,ol) { list-style: none!important; display: flex!important; flex-direction: column; gap: 12px }
.nx-checks li { display: flex!important; align-items: center; gap: 12px; min-height: 24px; list-style: none!important; margin: 0!important; padding: 0!important;
  font: 300 16px/1.6 var(--nx-text)!important; color: var(--nx-body)!important }
.nx-checks li :is(p,span) { margin: 0!important; padding: 0!important; font: inherit!important; color: inherit!important }
.nx-plan .c-bullet-list { margin-bottom: 28px!important }

/* Recommended badge — top-right of the featured card. Italic word hides on mobile. */
.nx-plan .c-wrapper:has(> .nx-plan-badge) { position: absolute!important; top: 22px; right: 24px; z-index: 1; width: auto!important }
.nx-plan-badge { display: inline-flex!important; align-items: center; gap: 6px; padding: 7px 11px!important; background: var(--nx-tint)!important; border-radius: 999px }
.nx-plan-badge, .nx-plan-badge :is(p,span,em,i) { font: 500 13px/1.2 var(--nx-display)!important; font-style: normal!important; color: var(--nx-accent)!important; white-space: nowrap }
.nx-plan-badge::after { content: ""; width: 14px; height: 14px; flex: none; background: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Info button' clip-path='url(%23clip0_0_292)'%3E%3Cpath id='Vector' d='M13.12 7C13.12 10.38 10.38 13.12 7 13.12C3.62 13.12 0.88 10.38 0.88 7C0.88 3.62 3.62 0.88 7 0.88C10.38 0.88 13.12 3.62 13.12 7Z' stroke-width='1.23' stroke='%236F62B8'/%3E%3Cpath id='Vector_2' d='M7 6.3V9.97' stroke-width='1.31' stroke-linecap='round' stroke='%236F62B8'/%3E%3Cpath id='Vector_3' d='M7 5.12C7.46 5.12 7.83 4.75 7.83 4.29C7.83 3.83 7.46 3.46 7 3.46C6.54 3.46 6.17 3.83 6.17 4.29C6.17 4.75 6.54 5.12 7 5.12Z' fill='%236F62B8'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_0_292'%3E%3Crect width='14' height='14' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E") center/contain no-repeat }

.nx-or-col > .vertical.inner { align-items: center!important; gap: 40px }
.nx-or { display: flex!important; align-items: center; gap: 16px; width: 420px; max-width: 100% }
.nx-or::before, .nx-or::after { content: ""; flex: 1 1 0; height: 1px; background: var(--nx-line) }
.nx-or, .nx-or :is(p,span) { font: 500 12.5px/1.2 var(--nx-display)!important; letter-spacing: .09em!important; text-transform: uppercase; color: var(--nx-muted)!important; white-space: nowrap }
.nx-or-col .c-wrapper:has(> .nx-or) { width: 100%; display: flex; justify-content: center }

@media (max-width:991px) {
  .nx-plans .c-row:has(.nx-plan) > .inner { grid-template-columns: minmax(0,1fr); max-width: 560px!important; gap: 20px }
}
@media (max-width:767px) {
  .c-section.nx-plans { --sec-pt: 64px; --sec-pb: 64px; --row-gap: 32px }
  .nx-plans .c-column.nx-plan { padding: 24px!important; border-radius: 24px!important }
  .nx-plan .c-wrapper:has(> .nx-plan-badge) { top: 18px; right: 20px }
  .nx-plan-badge em, .nx-plan-badge i { display: none!important }
  .nx-plan-badge::after { display: none }
  .nx-plan--featured .nx-plan-price, .nx-plan--featured .nx-plan-price :is(h1,h2,h3,h4,h5,h6,p,span) { font-size: 40px!important }
  .nx-plan-price, .nx-plan-price :is(h1,h2,h3,h4,h5,h6,p,span) { font-size: 40px!important }
  .nx-plan-price :is(s,del,strike), .nx-plan-price :is(s,del,strike) span { font-size: 22px!important }
  .nx-plan .c-button, .nx-plan :is(a,button).nx-gbtn { width: 100%!important; display: flex!important }
  /* Second card on mobile: button without arrow (as in Figma) */
  .nx-plan:not(.nx-plan--featured) :is(a,button).nx-gbtn::after { display: none }
  .nx-or-col > .vertical.inner { gap: 20px }
  .nx-or { width: 100% }
  .nx-or-col .c-button { width: 100%!important; border-bottom: 1px solid var(--nx-line) }
  .nx-or-col :is(a,button).nx-gbtn--ghost { width: 100%!important; border: 0!important; box-shadow: none!important }
}

/* =====================================================================
   04 PROGRAM CARD  (native · section "nx-sec nx-program", one column "nx-pcard")
   The Image element fills the card; text sits on top.
   ===================================================================== */
.c-section.nx-program { --sec-pt: 72px; --sec-pb: 72px }
.nx-sec .c-column.nx-pcard { position: relative!important; isolation: isolate; height: 560px; padding: 64px!important; border-radius: 34px;
  overflow: hidden; background: var(--nx-ink)!important }
.nx-pcard > .vertical.inner { position: static!important; justify-content: center!important; align-items: flex-start!important; gap: 22px }
.nx-pcard > .vertical.inner > .c-wrapper:not(.c-image) { position: relative; z-index: 2; max-width: 520px }
.nx-pcard .c-image { position: absolute!important; left: 0; right: 0; top: -30px; height: 640px; z-index: -2; overflow: hidden; margin: 0!important }
.nx-pcard .c-image :is(.image-container, .image-container > div, .image-container > div > div, picture) { width: 100%!important; height: 100%!important; max-width: none!important }
.nx-pcard .c-image img { width: 100%!important; height: 100%!important; max-width: none!important; object-fit: cover; object-position: 50% 96%; will-change: transform }
.nx-pcard::after { content: ""; position: absolute; inset: 0; z-index: -1; pointer-events: none;
  background: linear-gradient(90deg,rgba(7,7,15,.94) 0%,rgba(7,7,15,.78) 40%,rgba(7,7,15,.15) 75%,rgba(7,7,15,0) 100%) }
.nx-pcard::before { content: ""; position: absolute; inset: 0; z-index: 1; pointer-events: none; opacity: 0; transition: opacity .5s;
  background: radial-gradient(520px circle at var(--mx,50%) var(--my,50%),rgba(142,140,248,.18),transparent 62%) }
.nx-pcard:hover::before { opacity: 1 }
.nx-pcard .nx-eyebrow, .nx-pcard .nx-eyebrow :is(h1,h2,h3,h4,h5,h6,p,span) { color: rgba(255,255,255,.7)!important }
.nx-pcard-title, .nx-pcard-title :is(h1,h2,h3,h4,h5,h6,p,span) { font: 500 60px/1.05 var(--nx-display)!important; letter-spacing: -.025em!important; color: #fff!important }
.nx-formula, .nx-formula :is(p,span) { font: 500 20px/1.3 var(--nx-display)!important; letter-spacing: -.005em; color: rgba(255,255,255,.45)!important }
.nx-chips :is(ul,ol) { display: flex!important; flex-wrap: wrap; gap: 10px; list-style: none!important }
.nx-chips li { display: inline-flex!important; align-items: center; gap: 10px; padding: 9px 14px 9px 11px!important; margin: 0!important; border-radius: 999px; list-style: none!important;
  background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.14); -webkit-backdrop-filter: blur(14px); backdrop-filter: blur(14px) }
.nx-chips li, .nx-chips li :is(p,span) { font: 500 13px/1.2 var(--nx-display)!important; color: #fff!important; margin: 0!important; padding: 0 }
.nx-chips li::before { width: 8px!important; height: 8px!important; border-radius: 50%!important; background: var(--nx-grad)!important }
.nx-pcard-note, .nx-pcard-note :is(p,span) { font: 400 14px/1.55 var(--nx-text)!important; color: rgba(255,255,255,.56)!important }

@media (max-width:991px) {
  .c-section.nx-program { --sec-pt: 48px; --sec-pb: 48px }
  .nx-sec .c-column.nx-pcard { height: auto; padding: 300px 32px 32px!important }
  .nx-pcard > .vertical.inner { justify-content: flex-end!important }
  .nx-pcard .c-image { top: 0; height: 380px }
  .nx-pcard .c-image img { object-position: 62% 60% }
  .nx-pcard::after { background: linear-gradient(180deg,rgba(10,10,12,0) 0,rgba(10,10,12,0) 160px,rgba(10,10,12,.7) 280px,#0a0a0c 380px) }
}
@media (max-width:767px) {
  .c-section.nx-program { --sec-pt: 48px; --sec-pb: 24px }
  .nx-sec .c-column.nx-pcard { padding: 230px 22px 32px!important; border-radius: 28px }
  .nx-pcard > .vertical.inner { gap: 18px }
  .nx-pcard .c-image { height: 300px }
  .nx-pcard::after { background: linear-gradient(180deg,rgba(10,10,12,.1) 0,rgba(10,10,12,0) 100px,rgba(10,10,12,.75) 210px,#0a0a0c 290px) }
  .nx-pcard .c-image img { object-position: 50% 30% }
  .nx-pcard-title, .nx-pcard-title :is(h1,h2,h3,h4,h5,h6,p,span) { font-size: 42px!important; letter-spacing: -.02em!important }
  .nx-chips :is(ul,ol) { flex-direction: column; align-items: flex-start; gap: 8px }
  .nx-chips li { padding: 7px 11px!important; background: rgba(255,255,255,.1) }
  .nx-chips li::before { display: none!important }
  .nx-pcard-note, .nx-pcard-note :is(p,span) { font-size: 13px!important }
}

/* =====================================================================
   05 KIT · 07 SUPPORT  (native · media column "nx-media" + copy column "nx-copy")
   ===================================================================== */
.c-section.nx-kit { --sec-pt: 40px; --sec-pb: 96px }
.c-section.nx-support:not(.nx-duo) { --sec-pt: 96px; --sec-pb: 96px }
.nx-kit .c-row > .inner, .nx-support .c-row > .inner { align-items: center!important; gap: 64px }
.nx-support .c-row > .inner { gap: 72px }
.nx-kit .c-column.nx-media { position: relative!important; flex: 0 0 568px!important; height: 460px; border-radius: 28px; overflow: hidden; background: #eef0f6!important; isolation: isolate }
.nx-support .c-column.nx-media { flex-basis: 624px!important; height: 480px }
.nx-media > .vertical.inner { position: static!important }
.nx-media .c-image { position: absolute!important; inset: 0; z-index: -1; overflow: hidden }
.nx-media .c-image :is(.image-container, .image-container > div, .image-container > div > div, picture) { width: 100%!important; height: 100%!important; max-width: none!important }
.nx-media .c-image img { position: absolute; left: 0; top: -9%; width: 100%!important; height: 118%!important; max-width: none!important; object-fit: cover; will-change: transform }
.nx-kit .nx-media .c-image img { object-position: 100% 62% }
.nx-media .c-wrapper:has(> .nx-float) { left: 24px; bottom: 24px }

.nx-copy > .vertical.inner { align-items: flex-start!important; justify-content: center; gap: 18px }
.nx-copy > .vertical.inner > :is(.c-bullet-list, .c-button) { margin-top: 6px!important }
.nx-copy .c-bullet-list { width: 100% }

/* Kit list: 2-up bordered tiles (desktop) → one bordered list (mobile) */
.nx-kitlist :is(ul,ol) { display: grid!important; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 12px; list-style: none!important }
.nx-kitlist li { display: flex!important; align-items: center; gap: 12px; height: 48px; padding: 0 14px!important; margin: 0!important; list-style: none!important;
  background: #fff; border: 1px solid var(--nx-line); border-radius: 14px; transition: border-color .4s, transform .5s var(--nx-ease) }
.nx-kitlist li, .nx-kitlist li :is(p,span) { font: 300 16px/1.6 var(--nx-text)!important; color: var(--nx-body)!important; margin: 0!important; padding: 0 }
.nx-kitlist li:hover { border-color: var(--nx-lav); transform: translateY(-2px) }

@media (max-width:1279px) {
  .nx-kit .c-row > .inner, .nx-support .c-row > .inner { gap: 48px }
  .nx-sec .c-column.nx-media, .nx-support .c-column.nx-media { flex-basis: 46%!important; height: 440px }
  .nx-kitlist :is(ul,ol) { grid-template-columns: minmax(0,1fr) }
}
@media (max-width:991px) {
  .nx-kit .c-row > .inner, .nx-support .c-row > .inner { flex-direction: column!important; align-items: stretch!important; gap: 32px }
  .nx-sec .c-column.nx-media, .nx-support .c-column.nx-media { flex: none!important; width: 100%!important; height: auto; aspect-ratio: 4 / 3 }
  .c-section.nx-kit { --sec-pt: 24px; --sec-pb: 64px }
  .c-section.nx-support:not(.nx-duo) { --sec-pt: 64px; --sec-pb: 64px }
}
@media (max-width:767px) {
  .c-section.nx-kit { --sec-pt: 48px; --sec-pb: 72px }
  .c-section.nx-support:not(.nx-duo) { --sec-pt: 72px; --sec-pb: 48px }
  .nx-kit .c-row > .inner, .nx-support .c-row > .inner { gap: 28px }
  .nx-sec .c-column.nx-media, .nx-support .c-column.nx-media { aspect-ratio: 335 / 240; border-radius: 24px }
  .nx-media .c-wrapper:has(> .nx-float) { left: 12px; bottom: 12px }
  .nx-copy > .vertical.inner { gap: 14px }
  .nx-copy .c-button, .nx-copy :is(a,button).nx-gbtn { width: 100%!important; display: flex!important }
  .nx-copy > .vertical.inner > :is(.c-bullet-list, .c-button) { margin-top: 10px!important }
  .nx-kitlist :is(ul,ol) { gap: 0; border: 1px solid var(--nx-line); border-radius: 18px; overflow: hidden }
  .nx-kitlist li { height: 51px; border: 0; border-radius: 0; padding: 0 22px!important }
  .nx-kitlist li, .nx-kitlist li :is(p,span) { font-size: 15px!important; font-weight: 400!important }
  .nx-kitlist li + li { border-top: 1px solid var(--nx-line) }
  .nx-kitlist li::before { width: 16px!important; height: 16px!important; border-radius: 0!important; background: var(--nx-check-plain) center/contain no-repeat!important }
  .nx-kitlist li:hover { transform: none }
}

/* =====================================================================
   06 WHAT HAPPENS NEXT  (native · section "nx-sec nx-next")
   Steps row: 3 columns "nx-step nx-ico-…" · Assure row: 4 columns "nx-assure nx-ico-…"
   Icons are drawn by CSS from the column's nx-ico-… class (no image uploads).
   ===================================================================== */

.c-section.nx-next { --sec-pt: 96px; --sec-pb: 96px; --sec-bg: var(--nx-subtle-bg); --row-gap: 48px }
.nx-next .c-row:has(.nx-step) > .inner { gap: 20px }
.nx-sec .c-column.nx-step { position: relative; padding: 30px!important; background: #fff!important; border: 1px solid transparent; border-radius: 22px;
  transition: transform .6s var(--nx-ease), box-shadow .6s var(--nx-ease), border-color .4s }
.nx-step > .vertical.inner { gap: 14px }
.nx-step > .vertical.inner::before { content: ""; width: 32px; height: 32px; flex: none; margin-bottom: 22px; background: var(--ico) center/contain no-repeat;
  transform-origin: 0 100%; transition: filter .5s ease, transform .6s var(--nx-ease) }
.nx-step:hover { transform: translateY(-6px) }
.nx-step:hover > .vertical.inner::before { transform: scale(1.12) rotate(-4deg) }
.nx-step.is-on { border-color: var(--nx-lav-soft); box-shadow: 0 30px 60px -34px rgba(110,90,220,.35) }
html.nx-js .nx-step:not(.is-on) > .vertical.inner::before { filter: grayscale(1) opacity(.6) }
.nx-step .c-wrapper:has(> .nx-step-num) { position: absolute!important; top: 30px; right: 30px; width: auto!important }
.nx-step-num, .nx-step-num :is(p,span) { font: 500 12.5px/1.2 var(--nx-display)!important; letter-spacing: .09em!important; color: var(--nx-muted)!important; opacity: .8; font-variant-numeric: tabular-nums }
.nx-step-title, .nx-step-title :is(h1,h2,h3,h4,h5,h6,p,span) { font: 500 20px/1.3 var(--nx-display)!important; letter-spacing: -.005em!important; color: var(--nx-ink)!important }

.nx-next .c-row:has(.nx-assure) > .inner { gap: 0; border-top: 1px solid var(--nx-line); border-bottom: 1px solid var(--nx-line) }
.nx-sec .c-column.nx-assure { padding: 28px 24px!important }
.nx-sec .c-column.nx-assure + .c-column.nx-assure { border-left: 1px solid var(--nx-line) }
.nx-assure > .vertical.inner { display: grid!important; grid-template-columns: 28px minmax(0,1fr); column-gap: 14px; row-gap: 6px; align-content: start }
.nx-assure > .vertical.inner::before { content: ""; grid-row: 1; grid-column: 1; width: 28px; height: 28px; align-self: center; background: var(--ico) center/contain no-repeat }
.nx-assure > .vertical.inner > .c-wrapper { grid-column: 2 }
.nx-assure-title, .nx-assure-title :is(h1,h2,h3,h4,h5,h6,p,span) { font: 500 15px/1.2 var(--nx-display)!important; color: var(--nx-ink)!important }
.nx-assure-note, .nx-assure-note :is(p,span) { font: 400 14px/1.55 var(--nx-text)!important; color: var(--nx-muted)!important }

@media (max-width:991px) {
  .nx-next .c-row:has(.nx-step) > .inner { flex-direction: column!important; gap: 16px }
  .nx-next .c-row:has(.nx-step) .c-column { flex: none!important; width: 100%!important }
  .nx-next .c-row:has(.nx-assure) > .inner { display: grid!important; grid-template-columns: repeat(2,minmax(0,1fr)) }
  .nx-sec .c-column.nx-assure:nth-child(3) { border-left: 0 }
  .nx-sec .c-column.nx-assure:nth-child(n+3) { border-top: 1px solid var(--nx-line) }
}
@media (max-width:767px) {
  .c-section.nx-next { --sec-pt: 72px; --sec-pb: 72px; --row-gap: 32px }
  .nx-sec .c-column.nx-step { padding: 24px!important; border-radius: 20px }
  .nx-step > .vertical.inner { gap: 10px }
  .nx-step > .vertical.inner::before { width: 44px; height: 44px; margin-bottom: 14px; border-radius: 12px; background: var(--ico) center/24px 24px no-repeat, var(--nx-tint) }
  .nx-step .c-wrapper:has(> .nx-step-num) { top: 24px; right: 24px }
  .nx-step-num, .nx-step-num :is(p,span) { font-family: var(--nx-mono)!important; font-weight: 400!important; letter-spacing: 0!important }
  .nx-step-title, .nx-step-title :is(h1,h2,h3,h4,h5,h6,p,span) { font-size: 26px!important; line-height: 1.2!important; letter-spacing: -.01em!important }
  .nx-next .c-row:has(.nx-assure) > .inner { display: grid!important; grid-template-columns: repeat(2,minmax(0,1fr)); background: #fff; border: 1px solid var(--nx-line); border-radius: 18px; overflow: hidden }
  .nx-sec .c-column.nx-assure { padding: 20px!important }
  .nx-sec .c-column.nx-assure:nth-child(odd) { border-left: 0 }
  .nx-sec .c-column.nx-assure:nth-child(even) { border-left: 1px solid var(--nx-line) }
  .nx-assure > .vertical.inner { display: flex!important; flex-direction: column!important; align-items: flex-start!important; gap: 6px }
  .nx-assure > .vertical.inner::before { align-self: flex-start; width: 40px; height: 40px; margin-bottom: 10px; border-radius: 12px; background: var(--ico) center/22px 22px no-repeat, var(--nx-tint) }
  .nx-assure-title, .nx-assure-title :is(h1,h2,h3,h4,h5,h6,p,span) { font-size: 14px!important }
  .nx-assure-note, .nx-assure-note :is(p,span) { font-size: 13px!important }
}

/* =====================================================================
   07b RESEARCH NOTE  (native · section "nx-sec nx-note-sec", column "nx-notice")
   Mobile only — hidden from 768px up, by design.
   ===================================================================== */
.c-section.nx-note-sec { --sec-pt: 16px; --sec-pb: 24px }
.nx-sec .c-column.nx-notice { position: relative; padding: 22px 24px 22px 56px!important; background: var(--nx-tint)!important; border-radius: 18px }
.nx-notice > .vertical.inner { gap: 4px }
.nx-notice::before { content: ""; position: absolute; left: 24px; top: 25px; width: 20px; height: 20px; background: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Info button' clip-path='url(%23clip0_0_292)'%3E%3Cpath id='Vector' d='M13.12 7C13.12 10.38 10.38 13.12 7 13.12C3.62 13.12 0.88 10.38 0.88 7C0.88 3.62 3.62 0.88 7 0.88C10.38 0.88 13.12 3.62 13.12 7Z' stroke-width='1.23' stroke='%236F62B8'/%3E%3Cpath id='Vector_2' d='M7 6.3V9.97' stroke-width='1.31' stroke-linecap='round' stroke='%236F62B8'/%3E%3Cpath id='Vector_3' d='M7 5.12C7.46 5.12 7.83 4.75 7.83 4.29C7.83 3.83 7.46 3.46 7 3.46C6.54 3.46 6.17 3.83 6.17 4.29C6.17 4.75 6.54 5.12 7 5.12Z' fill='%236F62B8'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_0_292'%3E%3Crect width='14' height='14' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E") center/contain no-repeat }
.nx-notice-title, .nx-notice-title :is(h1,h2,h3,h4,h5,h6,p,span) { font: 500 16px/1.4 var(--nx-display)!important; color: var(--nx-ink)!important }
.nx-notice-text, .nx-notice-text :is(p,span) { font: 400 14px/1.6 var(--nx-text)!important; color: var(--nx-body)!important }
@media (min-width:768px) { .c-section.nx-note-sec { display: none!important } }

/* ##################################################################### 02-not-eligible */
/* =====================================================================
   NURI · 02 NOT ELIGIBLE · PAGE SECTIONS
   Figma: Radiant redesign → "02 Not eligible · desktop" (261:2730) / mobile (261:1972).
   ===================================================================== */

/* ---------- HERO (centred) · section "nx-sec nx-hero nx-hero--center" ---------- */
.c-section.nx-hero--center { --sec-pt: 96px; --sec-pb: 96px;
  background-image:
    radial-gradient(closest-side, rgba(236,214,251,.9), rgba(236,214,251,0)),
    radial-gradient(closest-side, rgba(199,236,251,.9), rgba(199,236,251,0))!important;
  background-size: 1000px 1000px, 920px 920px!important;
  background-position: calc(50% + 420px) -580px, calc(50% + 600px) 60px!important }
.nx-hero--center .nx-mesh i:nth-child(1) { width: 760px; height: 760px; left: calc(50% + 40px); top: -460px; background: #ecd6fb }
.nx-hero--center .nx-mesh i:nth-child(2) { width: 680px; height: 680px; left: calc(50% + 260px); top: 180px; background: #c7ecfb }
.nx-hero--center .nx-mesh i:nth-child(3) { display: none }
.nx-hero--center .nx-hero-copy > .vertical.inner { align-items: center!important; gap: 0!important; max-width: 1000px; margin: 0 auto!important }
/* Spacing sits on the classed elements themselves (pill, headline), so it applies
   wherever GHL puts the class and even where it overrides flex gap */
.nx-hero--center .nx-hero-copy .c-wrapper:has(.nx-pill) { align-self: stretch!important; width: 100%!important; display: flex!important; justify-content: center!important }
.nx-hero--center .nx-pill { display: flex!important; width: fit-content!important; margin: 0 auto 36px!important }
.nx-hero--center .nx-display { margin: 0 0 32px!important }
.nx-hero--center .nx-lead { max-width: 760px; margin-left: auto!important; margin-right: auto!important }
@media (max-width:991px) { .c-section.nx-hero--center { --sec-pt: 72px; --sec-pb: 72px } }
@media (max-width:767px) {
  .c-section.nx-hero--center { --sec-pt: 48px; --sec-pb: 56px;
    background-size: 640px 640px, 640px 640px!important;
    background-position: calc(100% + 300px) -320px, -300px calc(100% + 260px)!important }
  .nx-hero--center .nx-mesh i:nth-child(1) { width: 480px; height: 480px; left: auto; right: -260px; top: -280px }
  .nx-hero--center .nx-mesh i:nth-child(2) { width: 480px; height: 480px; left: -260px; top: auto; bottom: -240px }
  .nx-hero--center .nx-pill { margin-bottom: 28px!important }
  .nx-hero--center .nx-display { margin-bottom: 26px!important }
}

/* ---------- OPTIONS · section "nx-sec nx-options" ---------- */
.c-section.nx-options { --sec-pt: 96px; --sec-pb: 96px; --row-gap: 48px; background-image: var(--nx-wash)!important }
/* Cards row as an equal 3-column grid: same width and height whatever widths GHL gives the columns */
.nx-options .c-row:has(.nx-option) > .inner { display: grid!important; grid-template-columns: repeat(3,minmax(0,1fr))!important; align-items: stretch!important; gap: 20px }
.nx-options .c-row:has(.nx-option) > .inner > .c-column { width: auto!important; max-width: none!important; min-width: 0!important; height: auto!important; align-self: stretch!important }
.nx-sec .c-column.nx-option { position: relative; isolation: isolate; padding: 30px!important; background: #fff!important;
  border: 1px solid var(--nx-line)!important; border-radius: 24px; overflow: hidden;
  transition: transform .6s var(--nx-ease), box-shadow .6s var(--nx-ease), border-color .4s }
.nx-sec .c-column.nx-option--featured { border: 1.5px solid transparent!important; box-shadow: var(--nx-shadow-lav);
  background: linear-gradient(#fff,#fff) padding-box, linear-gradient(135deg,#5ac8fa,#8e8cf8 55%,#c17cf6) border-box!important }
.nx-option:hover { transform: translateY(-6px) }
.nx-option:not(.nx-option--featured):hover { border-color: var(--nx-lav)!important; box-shadow: var(--nx-shadow-lav) }
.nx-option::before { content: ""; position: absolute; inset: 0; z-index: -1; pointer-events: none; opacity: 0; transition: opacity .5s;
  background: radial-gradient(420px circle at var(--mx,50%) var(--my,0%),rgba(142,140,248,.12),transparent 62%) }
.nx-option:hover::before { opacity: 1 }
.nx-option > .vertical.inner { align-items: flex-start!important; gap: 14px }
.nx-option > .vertical.inner::before { content: ""; width: 32px; height: 32px; flex: none; margin-bottom: 20px; background: var(--ico) center/contain no-repeat;
  transform-origin: 0 100%; transition: transform .6s var(--nx-ease) }
.nx-option:hover > .vertical.inner::before { transform: scale(1.12) rotate(-4deg) }
.nx-option-title, .nx-option-title :is(h1,h2,h3,h4,h5,h6,p,span) { font: 500 26px/1.25 var(--nx-display)!important; letter-spacing: -.01em!important; color: var(--nx-ink)!important }
.nx-option .c-button { margin-top: auto!important; padding-top: 18px!important }

@media (max-width:991px) {
  .nx-options .c-row:has(.nx-option) > .inner { grid-template-columns: minmax(0,1fr)!important; gap: 16px; max-width: 560px!important; margin: 0 auto!important }
  .nx-options .c-row:has(.nx-option) .c-column { flex: none!important; width: 100%!important }
}
@media (max-width:767px) {
  .c-section.nx-options { --sec-pt: 56px; --sec-pb: 56px; --row-gap: 28px; --sec-bg: var(--nx-subtle-bg); background-image: none!important }
  .nx-sec .c-column.nx-option { padding: 24px!important; border-radius: 22px }
  .nx-option > .vertical.inner { gap: 12px }
  .nx-option > .vertical.inner::before { width: 48px; height: 48px; margin-bottom: 12px; border-radius: 12px; background: var(--ico) center/26px 26px no-repeat, var(--nx-tint) }
  .nx-option .c-button { width: 100%!important; padding-top: 12px!important }
  .nx-options .nx-head .nx-eyebrow :is(h1,h2,h3,h4,h5,h6,p)::before { content: ""; display: inline-block; width: 8px; height: 8px; margin: 0 8px 1px 0; border-radius: 50%; background: var(--nx-cyan); vertical-align: middle }
  .nx-option :is(a,button).nx-gbtn { width: 100%!important; display: flex!important }
}

/* ---------- PRIVACY · section "nx-sec nx-duo nx-privacy" (shared media + copy row) ---------- */
.nx-privacy .nx-media .c-image img { object-position: 50% 40% }

/* ##################################################################### 03-checkout */
/* =====================================================================
   NURI · 03 CHECKOUT · PAGE SECTIONS
   Figma: Radiant redesign → "03 Checkout · desktop" (261:2806) / mobile (261:2038).
   GHL's built-in Order Form element is restyled from here only (no element settings needed).
   Square's card field is an iframe: it keeps Square's own look.
   ===================================================================== */

/* ---------- LAYOUT · section "nx-sec nx-checkout" ----------
   The two columns are found by what they hold (the Order Form / the summary),
   so they work with or without the column classes nx-coform / nx-coaside. */
.c-section.nx-checkout { --sec-pt: 80px; --sec-pb: 120px; --sec-bg: var(--nx-subtle-bg) }
.nx-checkout .c-row > .inner { gap: 40px!important }
.nx-sec .c-column:is(.nx-coform, :has(.c-order-form)) { flex: 1 1 0!important; min-width: 0 }
.nx-sec .c-column:is(.nx-coaside, :has(.nx-sum)) { flex: 0 0 400px!important }
.nx-checkout .c-column:is(.nx-coform, .nx-coaside, :has(.c-order-form), :has(.nx-sum)) > .vertical.inner { gap: 0!important; justify-content: flex-start!important }
/* Spacing set as margins on the elements themselves, so it holds even where GHL ignores gap */
.nx-checkout .nx-eyebrow { margin: 0 0 12px!important }
.nx-checkout .nx-eyebrow :is(h1,h2,h3,h4,h5,h6,p,span) { color: var(--nx-body)!important }
.nx-checkout .c-order-form { margin: 32px 0!important }

@media (max-width:991px) {
  .c-section.nx-checkout { --sec-pt: 24px; --sec-pb: 64px }
  .nx-checkout .c-row > .inner { flex-direction: column-reverse!important; gap: 24px!important }
  .nx-sec .c-column:is(.nx-coform, .nx-coaside, :has(.c-order-form), :has(.nx-sum)) { flex: none!important; width: 100%!important }
  .nx-checkout .c-order-form { margin: 24px 0!important }
}

/* ---------- ORDER FORM · GHL's built-in "Order Form" element (inside section nx-checkout) ----------
   GHL themes the element with --of-* variables and per-element rules
   (.order-form-XXXX .order-form__…). We set the variables first, then override the
   rules that use fixed values. Everything is scoped to the section class, so no class
   is needed on the element itself. Square's card field stays as Square draws it. */
.nx-checkout .c-order-form { width: 100%!important; max-width: none!important; padding: 0!important }
.nx-checkout .order-form__surface {
  --of-accent: #0a0a0c!important; --of-text: #0a0a0c!important; --of-sub: #5f6370!important; --of-muted: #5f6370!important;
  --of-form-bg: #fff!important; --of-input-bg: #fff!important; --of-input-placeholder: #5f6370!important;
  --of-input-border-style: solid!important; --of-input-border-width: 1px!important; --of-input-border: #888b97!important; --of-input-border-hover: #2a2c33!important; --of-input-border-focus: #0a0a0c!important;
  --of-input-radius: 16px!important; --of-input-padding: 0 16px!important; --of-input-shadow: none!important;
  --of-prod-border: #e4e4e8!important; --of-prod-radius: 16px!important; --of-summary-border: #e4e4e8!important; --of-radio-border: #888b97!important;
  margin: 0!important; padding: 40px!important; box-sizing: border-box!important;
  background: #fff!important; border: 1px solid var(--nx-line)!important; border-radius: 28px!important;
  box-shadow: 0 30px 60px -44px rgba(60,40,140,.3)!important;
  font-family: var(--nx-text)!important; font-size: 16px!important; color: var(--nx-ink)!important; text-align: left!important }
.nx-checkout .order-form__surface :is(input, textarea, select) { font-family: var(--nx-text)!important }
.nx-checkout .order-form__split { display: block!important }
.nx-checkout :is(.order-form__form-col, .order-form__offer-col) { padding: 0!important; border: 0!important }

/* Heading */
.nx-checkout .order-form__headline { margin: 0 0 16px!important; font: 500 26px/1.25 var(--nx-display)!important; letter-spacing: -.01em!important; color: var(--nx-ink)!important; text-align: left!important }
.nx-checkout .order-form__headline--with-sub { margin-bottom: 16px!important }
.nx-checkout .order-form__subheadline { margin: 0 0 24px!important; font: 400 14px/1.55 var(--nx-text)!important; color: var(--nx-muted)!important; text-align: left!important }

/* Fields: 2-column grid as set in GHL, labels above */
.nx-checkout .order-form__field-grid { gap: 18px 12px!important }
.nx-checkout .order-form__control { display: flex; flex-direction: column; gap: 8px }
.nx-checkout .order-form__label { position: static!important; margin: 0!important; padding: 0!important; transform: none!important; pointer-events: auto;
  font: 500 13px/1.2 var(--nx-display)!important; letter-spacing: 0!important; text-transform: none!important; color: var(--nx-body)!important }
.nx-checkout :is(.order-form__input, .order-form__select, .order-form__textarea) {
  display: flex!important; align-items: center; width: 100%!important; height: 48px!important; min-height: 48px; margin: 0!important; padding: 0 16px!important; box-sizing: border-box!important;
  background-color: #fff!important; border: 1px solid #888b97!important; border-radius: 16px!important; box-shadow: none!important; outline: 0!important;
  font: 300 16px/1.6 var(--nx-text)!important; color: var(--nx-ink)!important; text-align: left!important; transition: border-color .25s, box-shadow .25s }
.nx-checkout .order-form__textarea { height: auto!important; min-height: 96px; padding: 12px 16px!important }
.nx-checkout :is(.order-form__input, .order-form__textarea)::placeholder { color: var(--nx-muted)!important; opacity: 1 }
.nx-checkout .order-form__select:not(.order-form__select--has-value) { color: var(--nx-muted)!important }
.nx-checkout :is(.order-form__input, .order-form__select, .order-form__textarea):hover { border-color: var(--nx-body)!important }
.nx-checkout :is(.order-form__input, .order-form__select, .order-form__textarea):is(:focus, :focus-visible) { border-color: var(--nx-ink)!important; box-shadow: 0 0 0 2px #fff, 0 0 0 4px #8e8cf8!important }
.nx-checkout .order-form__surface .order-form__input[type="email"] { padding-left: 46px!important; background: #fff url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Icon'%3E%3Cpath id='Vector' d='M3 3H15C15.83 3 16.5 3.67 16.5 4.5V13.5C16.5 14.33 15.83 15 15 15H3C2.17 15 1.5 14.33 1.5 13.5V4.5C1.5 3.67 2.17 3 3 3Z' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' stroke='%235F6370'/%3E%3Cpath id='Vector_2' d='M16.5 5.25L9.77 9.53C9.54 9.67 9.27 9.75 9 9.75C8.73 9.75 8.46 9.67 8.23 9.53L1.5 5.25' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' stroke='%235F6370'/%3E%3C/g%3E%3C/svg%3E") 16px 50%/18px 18px no-repeat!important }
.nx-checkout .order-form__surface .order-form__select { padding-right: 44px!important; background: #fff url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Radiant / Glyph / Chevron down'%3E%3Cpath id='Vector' d='M4.5 6.75L9 11.25L13.5 6.75' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' stroke='%235F6370'/%3E%3C/g%3E%3C/svg%3E") right 16px center/18px 18px no-repeat!important }
.nx-checkout .order-form__surface .order-form__input.order-form__field-search { margin: 0 0 4px!important; padding-left: 46px!important; background: #fff url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Radiant / Glyph / Search'%3E%3Cpath id='Vector' d='M14.25 8.25C14.25 11.56 11.56 14.25 8.25 14.25C4.94 14.25 2.25 11.56 2.25 8.25C2.25 4.94 4.94 2.25 8.25 2.25C11.56 2.25 14.25 4.94 14.25 8.25Z' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' stroke='%235F6370'/%3E%3Cpath id='Vector_2' d='M15.75 15.75L12.53 12.53' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' stroke='%235F6370'/%3E%3C/g%3E%3C/svg%3E") 16px 50%/18px 18px no-repeat!important }
.nx-checkout .order-form__field--address-autocomplete { gap: 18px!important }
/* Dropdown lists (country, address suggestions) */
.nx-checkout :is(.order-form__dropdown, [class*="order-form__dropdown-list"], [class*="order-form__suggest"]) { border-radius: 16px!important; border-color: var(--nx-line)!important; box-shadow: 0 20px 40px -20px rgba(60,40,140,.25)!important; font-family: var(--nx-text)!important }

/* Section heads ("Select Product", "Payment details"): eyebrow + hairline */
.nx-checkout :is(.order-form__offer-head, .order-form__pay-head) { display: flex!important; align-items: center; gap: 14px; margin: 32px 0 16px!important; padding: 0!important; border: 0!important;
  font: 500 12.5px/1.2 var(--nx-display)!important; letter-spacing: .09em!important; text-transform: uppercase!important; color: var(--nx-body)!important }
.nx-checkout :is(.order-form__offer-head, .order-form__pay-head)::after { content: ""; flex: 1 1 0; height: 1px; background: var(--nx-line) }
.nx-checkout .order-form__offer-stick { position: static!important }
.nx-checkout .order-form__offer { margin: 0!important; padding: 0!important; border: 0!important; background: none!important }
.nx-checkout .order-form__product-table-head { display: none!important }

/* Product row: tinted card with the gradient hairline */
.nx-checkout .order-form__prod { display: flex!important; align-items: center; gap: 12px; margin: 0 0 10px!important; padding: 18px!important; cursor: pointer;
  border: 1.5px solid transparent!important; border-radius: 16px!important; box-shadow: none!important;
  background: linear-gradient(var(--nx-tint),var(--nx-tint)) padding-box, linear-gradient(135deg,#5ac8fa,#8e8cf8 55%,#c17cf6) border-box!important }
.nx-checkout .order-form__prod:not(.order-form__prod--selected) { background: #fff!important; border: 1px solid var(--nx-line)!important }
.nx-checkout .order-form__prod-item { display: flex!important; align-items: center; gap: 12px; flex: 1 1 0; min-width: 0 }
.nx-checkout .order-form__prod-name { font: 500 15px/1.2 var(--nx-display)!important; color: var(--nx-ink)!important; white-space: normal!important; overflow: visible!important; text-overflow: clip!important }
.nx-checkout .order-form__prod-main { min-width: 0; flex: 1 1 0 }
.nx-checkout .order-form__prod-desc { margin-top: 4px; font: 400 14px/1.55 var(--nx-text)!important; color: var(--nx-muted)!important }
.nx-checkout :is(.order-form__qty-static, .order-form__prod-qty) { display: none!important }
.nx-checkout .order-form__prod-price { font: 500 20px/1.3 var(--nx-display)!important; letter-spacing: -.005em; color: var(--nx-ink)!important; white-space: nowrap; font-variant-numeric: tabular-nums }
.nx-checkout .order-form__surface :is(input[type="checkbox"], input[type="radio"]) { accent-color: var(--nx-ink); width: 18px!important; height: 18px!important; flex: none; margin: 0!important }
.nx-checkout .order-form__surface .order-form__prod-radio { border-radius: 5px!important; margin: 0!important }

/* Coupon link + totals */
.nx-checkout .order-form__coupon-link { display: inline-block; margin: 4px 0 0!important; padding: 0!important; background: none!important; border: 0!important; cursor: pointer;
  font: 400 14px/1.55 var(--nx-text)!important; color: var(--nx-muted)!important; text-decoration: underline!important; text-underline-offset: 2px }
.nx-checkout .order-form__coupon-link:hover { color: var(--nx-ink)!important }
.nx-checkout .order-form__summary { display: flex!important; flex-direction: column; gap: 10px; margin: 20px 0 0!important; padding: 16px 0 0!important; border: 0!important; border-top: 1px solid var(--nx-line)!important; background: none!important }
.nx-checkout .order-form__summary-row { display: flex!important; justify-content: space-between; align-items: baseline; gap: 12px; margin: 0!important; padding: 0!important; border: 0!important }
.nx-checkout .order-form__summary-row > * { font: 400 14px/1.55 var(--nx-text)!important; color: var(--nx-muted)!important; font-variant-numeric: tabular-nums }
.nx-checkout .order-form__summary-row--total { padding-top: 12px!important; border-top: 1px solid var(--nx-line)!important }
.nx-checkout .order-form__summary-row--total > * { font: 500 20px/1.3 var(--nx-display)!important; letter-spacing: -.005em; color: var(--nx-ink)!important }

/* Payment: card field (Square), save-card, terms, button, footer note */
.nx-checkout .order-form__payment { margin: 0!important; padding: 0!important; border: 0!important }
.nx-checkout .ghl-payment-element label { margin-left: 10px!important; font: 400 14px/1.55 var(--nx-text)!important; color: var(--nx-muted)!important }
.nx-checkout .ghl-payment-element div:has(> input[type="checkbox"]) { display: flex!important; align-items: center; margin-top: 12px!important }
.nx-checkout .order-form__terms { display: flex!important; align-items: center; gap: 12px; margin: 16px 0 0!important; padding: 14px 16px!important; background: var(--nx-subtle-bg)!important; border: 1px solid var(--nx-line)!important; border-radius: 16px!important }
.nx-checkout .order-form__terms-text, .nx-checkout .order-form__terms-text * { font: 400 14px/1.55 var(--nx-text)!important; color: var(--nx-body)!important }
.nx-checkout .order-form__terms-text a { text-decoration: underline!important; text-underline-offset: 2px }
.nx-checkout .order-form__cta { display: flex!important; align-items: center; justify-content: center; gap: 12px; width: 100%!important; height: 50px!important; margin: 20px 0 0!important; padding: 0 24px!important;
  border: 0!important; border-radius: 999px!important; background: var(--nx-ink)!important; color: #fff!important; box-shadow: none!important; cursor: pointer;
  font: 500 15px/1.2 var(--nx-display)!important; letter-spacing: 0!important; text-transform: none!important; transition: box-shadow .4s var(--nx-ease), opacity .3s }
.nx-checkout .order-form__cta-icon { display: none!important }
.nx-checkout .order-form__cta-text, .nx-checkout .order-form__cta-text * { font: inherit!important; color: inherit!important }
.nx-checkout .order-form__cta::after { content: ""; width: 16px; height: 16px; flex: none; background: currentColor;
  -webkit-mask: var(--nx-arrow) center/contain no-repeat; mask: var(--nx-arrow) center/contain no-repeat; transition: transform .45s var(--nx-ease) }
.nx-checkout .order-form__cta:not(:disabled):hover { background: var(--nx-ink)!important; box-shadow: 0 14px 30px -12px rgba(10,10,12,.55)!important }
.nx-checkout .order-form__cta:not(:disabled):hover::after { transform: rotate(45deg) }
.nx-checkout .order-form__cta:disabled { opacity: .35; cursor: not-allowed }
.nx-checkout .order-form__footer { margin: 16px 0 0!important; padding: 0!important; text-align: center!important; font: 400 12.5px/1.45 var(--nx-text)!important; color: var(--nx-muted)!important }
.nx-checkout .order-form__back { font: 500 13px/1.2 var(--nx-display)!important; color: var(--nx-ink)!important; text-decoration: underline!important; text-underline-offset: 2px }

@media (max-width:767px) {
  .nx-checkout .order-form__surface { padding: 24px 16px!important; border-radius: 24px!important }
  .nx-checkout .order-form__field-grid { grid-template-columns: minmax(0,1fr)!important; gap: 14px!important }
  .nx-checkout :is(.order-form__field, .order-form__field--full) { grid-column: 1 / -1!important }
  .nx-checkout .order-form__prod { padding: 16px!important }
  .nx-checkout .order-form__prod-price { font-size: 15px!important }
  .nx-checkout .order-form__terms { align-items: flex-start; background: var(--nx-tint)!important; border-color: transparent!important }
  .nx-checkout .order-form__footer { display: flex; align-items: center; justify-content: center; gap: 8px }
  .nx-checkout .order-form__footer::before { content: ""; width: 16px; height: 16px; flex: none; background: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Icon'%3E%3Cpath id='Vector' d='M13.33 8.67C13.33 12 11 13.67 8.23 14.63C8.08 14.68 7.92 14.68 7.78 14.63C5 13.67 2.67 12 2.67 8.67V4C2.67 3.82 2.74 3.65 2.86 3.53C2.99 3.4 3.16 3.33 3.33 3.33C4.67 3.33 6.33 2.53 7.49 1.52C7.63 1.4 7.81 1.33 8 1.33C8.19 1.33 8.37 1.4 8.51 1.52C9.67 2.54 11.33 3.33 12.67 3.33C12.84 3.33 13.01 3.4 13.14 3.53C13.26 3.65 13.33 3.82 13.33 4V8.67Z' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' stroke='%230A0A0C'/%3E%3Cpath id='Vector_2' d='M6 8L7.33 9.33L10 6.67' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' stroke='%230A0A0C'/%3E%3C/g%3E%3C/svg%3E") center/contain no-repeat; opacity: .7 }
}

/* ---------- TRUST ROW · Bullet List "nx-trust" under the form ---------- */
.nx-trust :is(ul,ol) { display: flex!important; flex-wrap: wrap; justify-content: center; gap: 10px 32px }
.nx-trust li { display: inline-flex!important; align-items: center; gap: 8px; margin: 0!important; font: 500 13px/1.2 var(--nx-display)!important; color: var(--nx-muted)!important }
.nx-trust li :is(p,span) { margin: 0!important; font: inherit!important; color: inherit!important }
.nx-trust li::before { width: 20px!important; height: 20px!important; background: var(--ico) center/contain no-repeat!important }
.nx-trust li:nth-child(1) { --ico: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Privacy / editable paths'%3E%3Cpath id='Lucide / lock-keyhole' d='M11 14H9C7.67 14 7 14.67 7 16V24C7 25.33 7.67 26 9 26H23C24.33 26 25 25.33 25 24V16C25 14.67 24.33 14 23 14H21M11 14H21M11 14V11C11 9.67 11.53 8.4 12.46 7.46C13.4 6.53 14.67 6 16 6C17.33 6 18.6 6.53 19.54 7.46C20.47 8.4 21 9.67 21 11V14M17 20C17 20.27 16.89 20.52 16.71 20.71C16.52 20.89 16.27 21 16 21C15.73 21 15.48 20.89 15.29 20.71C15.11 20.52 15 20.27 15 20C15 19.73 15.11 19.48 15.29 19.29C15.48 19.11 15.73 19 16 19C16.27 19 16.52 19.11 16.71 19.29C16.89 19.48 17 19.73 17 20Z' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' stroke='%2316141F'/%3E%3C/g%3E%3C/svg%3E") }
.nx-trust li:nth-child(2) { --ico: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Clinician / editable paths'%3E%3Cpath id='Lucide / stethoscope' d='M15 6.5V7.5M15 7.5V8.5M15 7.5H16C16.53 7.5 17.04 7.71 17.41 8.09C17.79 8.46 18 8.97 18 9.5V13.5C18 15.09 17.37 16.62 16.24 17.74C15.12 18.87 13.59 19.5 12 19.5M9 6.5V7.5M9 7.5V8.5M9 7.5H8C7.47 7.5 6.96 7.71 6.59 8.09C6.21 8.46 6 8.97 6 9.5V13.5C6 15.09 6.63 16.62 7.76 17.74C8.88 18.87 10.41 19.5 12 19.5M12 19.5C12 21.09 12.63 22.62 13.76 23.74C14.88 24.87 16.41 25.5 18 25.5C19.59 25.5 21.12 24.87 22.24 23.74C23.37 22.62 24 21.09 24 19.5V16.5M24 16.5C24.53 16.5 25.04 16.29 25.41 15.91C25.79 15.54 26 15.03 26 14.5C26 13.97 25.79 13.46 25.41 13.09C25.04 12.71 24.53 12.5 24 12.5C23.47 12.5 22.96 12.71 22.59 13.09C22.21 13.46 22 13.97 22 14.5C22 15.03 22.21 15.54 22.59 15.91C22.96 16.29 23.47 16.5 24 16.5Z' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' stroke='%2316141F'/%3E%3C/g%3E%3C/svg%3E") }
.nx-trust li:nth-child(3) { --ico: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Cold chain / editable paths'%3E%3Cpath id='Vector' d='M6 16H12M12 16H16M12 16L8 12M12 16L8 20M16 16H20M16 16V12M16 16V20M20 16H26M20 16L24 20M20 16L24 12M16 6V12M16 12L20 8M16 12L12 8M16 20V26M16 20L12 24M16 20L20 24' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' stroke='black'/%3E%3C/g%3E%3C/svg%3E") }
@media (max-width:767px) { .nx-trust :is(ul,ol) { gap: 8px 20px } .nx-trust li { font-size: 12px!important } }

/* ---------- ORDER SUMMARY CARD · native elements in the right column ----------
   The column (found by its class nx-coaside, or by holding the .nx-sum-title element)
   becomes the card. Its inner box is the white card and stays in view while the form
   scrolls (desktop). Header row: thumbnail | title + product | price.
   Phones: the card collapses to that header row and opens on tap (footer code). */
.nx-checkout .c-column:is(.nx-coaside, :has(.nx-sum-title)) > .vertical.inner {
  position: sticky!important; top: 100px; height: auto!important; align-self: flex-start;
  display: grid!important; grid-template-columns: 64px minmax(0,1fr) auto; column-gap: 14px; row-gap: 0!important; align-items: center;
  padding: 24px 24px 28px!important; box-sizing: border-box; background: #fff!important; border: 1px solid var(--nx-line); border-radius: 28px;
  box-shadow: 0 2px 6px rgba(60,40,140,.06) }
.nx-checkout .c-column:is(.nx-coaside, :has(.nx-sum-title)) { align-self: stretch }
.nx-checkout .c-column:is(.nx-coaside, :has(.nx-sum-title)) .vertical.inner > .c-wrapper { grid-column: 1 / -1; min-width: 0 }
/* Header row */
.nx-checkout .vertical.inner > .c-image:has(.nx-sum-thumb) { grid-column: 1!important; grid-row: 1 / span 2; position: relative; width: 64px!important; height: 64px; overflow: hidden;
  border-radius: 16px; background: linear-gradient(90deg,#efeaff,#dcefff) }
.nx-checkout .vertical.inner > .c-image:has(.nx-sum-thumb) :is(.image-container, .image-container > div, .image-container > div > div, picture) { width: 100%!important; height: 100%!important }
.nx-checkout .c-image img.nx-sum-thumb { position: absolute; left: -7px; top: -7px; width: 78px!important; height: 78px!important; max-width: none!important; object-fit: contain }
.nx-checkout .vertical.inner > .c-wrapper:has(.nx-sum-title) { grid-column: 2!important; grid-row: 1; align-self: end; margin-bottom: 4px!important }
.nx-checkout .vertical.inner > .c-wrapper:has(.nx-sum-product) { grid-column: 2!important; grid-row: 2; align-self: start }
.nx-checkout .vertical.inner > .c-wrapper:has(.nx-sum-price) { grid-column: 3!important; grid-row: 1 / span 2 }
.nx-sum-title, .nx-sum-title :is(h1,h2,h3,h4,h5,h6,p,span) { font: 500 15px/1.2 var(--nx-display)!important; color: var(--nx-ink)!important }
.nx-sum-product, .nx-sum-product :is(p,span) { font: 400 14px/1.55 var(--nx-text)!important; color: var(--nx-muted)!important }
.nx-sum-price, .nx-sum-price :is(p,span) { font: 500 26px/1.25 var(--nx-display)!important; letter-spacing: -.01em!important; color: var(--nx-ink)!important; white-space: nowrap; font-variant-numeric: tabular-nums }
/* Kit photo */
.nx-checkout .vertical.inner > .c-image:has(.nx-sum-media) { margin-top: 20px!important; height: 220px; overflow: hidden; border-radius: 20px; background: #0d0d14 }
.nx-checkout .vertical.inner > .c-image:has(.nx-sum-media) :is(.image-container, .image-container > div, .image-container > div > div, picture) { width: 100%!important; height: 100%!important; max-width: none!important }
.nx-checkout .c-image img.nx-sum-media { width: 100%!important; height: 100%!important; max-width: none!important; object-fit: cover }
/* Inclusions */
.nx-checkout .vertical.inner > .c-wrapper:has(.nx-sum-list) { margin-top: 20px!important }
.nx-sum-list :is(ul,ol) { display: flex!important; flex-direction: column; gap: 10px }
.nx-sum-list li { display: flex!important; align-items: center; gap: 12px; margin: 0!important }
.nx-sum-list li, .nx-sum-list li :is(p,span) { font: 300 16px/1.6 var(--nx-text)!important; color: var(--nx-body)!important; margin: 0!important }
/* Subtotal / Shipping / Total rows (label + bold amount) */
.nx-sum-row, .nx-sum-row :is(p,span) { font: 400 14px/1.55 var(--nx-text)!important; color: var(--nx-muted)!important }
.nx-sum-row :is(p) { display: flex!important; justify-content: space-between; align-items: baseline; gap: 12px }
.nx-sum-row :is(strong,b) { font-weight: 400!important; color: var(--nx-muted)!important; font-variant-numeric: tabular-nums; white-space: nowrap }
.nx-checkout .vertical.inner > .c-wrapper:has(.nx-sum-row) { margin-top: 10px!important }
.nx-checkout .vertical.inner > .c-wrapper:has(.nx-sum-row--sub) { margin-top: 20px!important; padding-top: 16px!important; border-top: 1px solid var(--nx-line) }
.nx-checkout .vertical.inner > .c-wrapper:has(.nx-sum-row--total) { margin-top: 12px!important; padding-top: 12px!important; border-top: 1px solid var(--nx-line) }
.nx-sum-row--total, .nx-sum-row--total :is(p,span) { font: 500 15px/1.2 var(--nx-display)!important; color: var(--nx-ink)!important }
.nx-sum-row--total :is(strong,b) { font: 500 20px/1.3 var(--nx-display)!important; letter-spacing: -.005em; color: var(--nx-ink)!important }
/* Clinician note (bold first line = title) */
.nx-checkout .vertical.inner > .c-wrapper:has(.nx-sum-note) { margin-top: 20px!important }
.nx-sum-note { position: relative; padding: 16px 16px 16px 48px!important; border-radius: 16px; background: var(--nx-tint)!important }
.nx-sum-note, .nx-sum-note :is(p,span) { font: 400 14px/1.55 var(--nx-text)!important; color: var(--nx-body)!important }
.nx-sum-note :is(strong,b) { display: block; margin-bottom: 4px; font: 500 15px/1.2 var(--nx-display)!important; color: var(--nx-ink)!important }
.nx-sum-note:has(strong, b) br { display: none }
.nx-sum-note:not(:has(strong, b)) p::first-line { font-family: var(--nx-display); font-size: 15px; font-weight: 500; color: var(--nx-ink) }
.nx-sum-note::before { content: ""; position: absolute; left: 16px; top: 16px; width: 20px; height: 20px; background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Icon'%3E%3Cpath id='Vector' d='M18.33 10C18.33 14.6 14.6 18.33 10 18.33C5.4 18.33 1.67 14.6 1.67 10C1.67 5.4 5.4 1.67 10 1.67C14.6 1.67 18.33 5.4 18.33 10Z' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' stroke='%236F62B8'/%3E%3Cpath id='Vector_2' d='M10 13.33V10' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' stroke='%236F62B8'/%3E%3Cpath id='Vector_3' d='M10 6.67H10.01' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' stroke='%236F62B8'/%3E%3C/g%3E%3C/svg%3E") center/contain no-repeat }

@media (max-width:991px) {
  .nx-checkout .c-column:is(.nx-coaside, :has(.nx-sum-title)) > .vertical.inner {
    position: static!important; grid-template-columns: 64px minmax(0,1fr) auto 28px; padding: 14px 16px!important; border-radius: 24px; box-shadow: none }
  /* chevron (4th header column) */
  .nx-checkout .c-column:is(.nx-coaside, :has(.nx-sum-title)) > .vertical.inner::after { content: ""; grid-column: 4; grid-row: 1 / span 2; width: 28px; height: 28px;
    border: 1px solid var(--nx-line); border-radius: 50%; background: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Radiant / Glyph / Chevron down'%3E%3Cpath id='Vector' d='M4.5 6.75L9 11.25L13.5 6.75' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' stroke='%235F6370'/%3E%3C/g%3E%3C/svg%3E") center/14px 14px no-repeat; transition: transform .4s var(--nx-ease) }
  .nx-checkout .c-column.is-open > .vertical.inner::after { transform: rotate(180deg) }
  .nx-checkout .c-column:is(.nx-coaside, :has(.nx-sum-title)) .vertical.inner > :is(.c-image:has(.nx-sum-thumb), .c-wrapper:has(.nx-sum-title), .c-wrapper:has(.nx-sum-product), .c-wrapper:has(.nx-sum-price)) { cursor: pointer }
  .nx-sum-price, .nx-sum-price :is(p,span) { font-size: 16px!important; letter-spacing: 0!important }
  .nx-checkout .vertical.inner > .c-wrapper:has(.nx-sum-product) { overflow: hidden }
  .nx-sum-product, .nx-sum-product :is(p,span) { white-space: nowrap!important; overflow: hidden; text-overflow: ellipsis }
  /* collapsed until tapped */
  .nx-checkout .c-column:is(.nx-coaside, :has(.nx-sum-title)):not(.is-open) .vertical.inner > .c-wrapper:is(:has(.nx-sum-media), :has(.nx-sum-list), :has(.nx-sum-row), :has(.nx-sum-note)) { display: none!important }
  .nx-checkout .vertical.inner > .c-image:has(.nx-sum-media) { height: auto; aspect-ratio: 16 / 10 }
}

/* ##################################################################### 04-confirmation */
/* =====================================================================
   NURI · 04 CONFIRMATION · PAGE SECTIONS
   Figma: Radiant redesign → "04 Confirmation · desktop · Radiant" (261:2934) / mobile (261:2143).
   ===================================================================== */


/* Phones: every native button spans its column */
@media (max-width:767px) {
  .nx-sec .vertical.inner > .c-button, .nx-sec .c-wrapper:has(> :is(a,button):is(.nx-gbtn,.nx-tlink)) { width: 100%!important; max-width: none!important; align-self: stretch!important }
  .nx-sec :is(a,button):is(.nx-gbtn,.nx-tlink) { display: flex!important; width: 100%!important; justify-content: center!important }
}

/* ---------- HERO (centred) · section "nx-sec nx-hero nx-hero--center nx-confirm-hero" ---------- */
.c-section.nx-confirm-hero { --sec-pt: 96px; --sec-pb: 112px;
  background-image:
    radial-gradient(closest-side, rgba(199,236,251,.95), rgba(199,236,251,0)),
    radial-gradient(closest-side, rgba(236,214,251,.85), rgba(236,214,251,0))!important;
  background-size: 1000px 1000px, 700px 700px!important;
  background-position: calc(50% + 480px) -320px, calc(50% - 840px) 200px!important }
.nx-confirm-hero .nx-mesh i:nth-child(1) { width: 760px; height: 760px; left: calc(50% + 100px); top: -200px; background: #c7ecfb }
.nx-confirm-hero .nx-mesh i:nth-child(2) { width: 520px; height: 520px; left: calc(50% - 860px); top: 280px; background: #ecd6fb }
.nx-confirm-hero .nx-mesh i:nth-child(3) { display: none }
.nx-confirm-hero .nx-hero-copy > .vertical.inner { align-items: center!important; gap: 0!important; max-width: 760px; margin: 0 auto!important }
/* Success mark: drawn by the CSS above the eyebrow (no image to upload) */
.nx-confirm-hero .nx-hero-copy > .vertical.inner::before { content: ""; width: 84px; height: 84px; flex: none; margin-bottom: 16px;
  background: url("data:image/svg+xml,%3Csvg width='84' height='84' viewBox='0 0 84 84' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Success mark' clip-path='url(%23clip0_0_7)'%3E%3Cpath id='Vector' d='M42 84C65.2 84 84 65.2 84 42C84 18.8 65.2 0 42 0C18.8 0 0 18.8 0 42C0 65.2 18.8 84 42 84Z' fill='%238E8CF8' fill-opacity='0.15'/%3E%3Cpath id='Vector_2' d='M72 42C72 58.57 58.57 72 42 72C25.43 72 12 58.57 12 42C12 25.43 25.43 12 42 12C58.57 12 72 25.43 72 42Z' stroke-width='3' stroke='url(%23paint0_linear_0_7)'/%3E%3Cpath id='Vector_3' d='M29 43L38 52L56 33' stroke-width='4' stroke-linecap='round' stroke='url(%23paint1_linear_0_7)'/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_0_7' x1='0.01' y1='0.01' x2='84' y2='84' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%235AC8FA'/%3E%3Cstop offset='0.55' stop-color='%238E8CF8'/%3E%3Cstop offset='1' stop-color='%23C17CF6'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_0_7' x1='0.1' y1='-0.04' x2='83.98' y2='84.01' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%235AC8FA'/%3E%3Cstop offset='0.55' stop-color='%238E8CF8'/%3E%3Cstop offset='1' stop-color='%23C17CF6'/%3E%3C/linearGradient%3E%3CclipPath id='clip0_0_7'%3E%3Crect width='84' height='84' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E") center/contain no-repeat }
html.nx-ready .nx-confirm-hero .nx-hero-copy > .vertical.inner::before { animation: nx-pop 1s cubic-bezier(.2,1.5,.4,1) .1s both }
@keyframes nx-pop { from { opacity: 0; transform: scale(.4) rotate(-20deg) } to { opacity: 1; transform: none } }
.nx-confirm-hero .nx-eyebrow { margin-bottom: 16px!important }
.nx-confirm-hero .nx-display { margin-bottom: 16px!important }
.nx-confirm-hero .c-wrapper:has(.nx-eyebrow, .nx-display, .nx-lead) { align-self: stretch!important; width: 100%!important }

/* Benefit pills (Bullet List) */
.c-wrapper:has(> .nx-benefits) { width: 100%!important; max-width: none!important; align-self: stretch!important; margin-top: 28px!important }
@media (max-width:767px) { .c-wrapper:has(> .nx-benefits) { margin-top: 20px!important } }
.nx-benefits :is(ul,ol) { display: flex!important; flex-wrap: wrap; justify-content: center; gap: 8px; margin: 0!important; padding: 0!important; list-style: none!important }
.nx-benefits li { display: inline-flex!important; align-items: center; gap: 8px; height: 36px; padding: 0 14px 0 7px!important; margin: 0!important;
  text-indent: 0!important; list-style: none!important; background: rgba(255,255,255,.9); border: 1px solid var(--nx-line); border-radius: 999px;
  -webkit-backdrop-filter: blur(7px); backdrop-filter: blur(7px) }
.nx-benefits li::marker { content: ""!important }
.nx-benefits li :is(i,svg,.fa,[class*="icon"]) { display: none!important }
.nx-benefits li::before { content: ""!important; display: block!important; position: static!important; flex: none!important; width: 22px!important; height: 22px!important;
  margin: 0!important; padding: 0!important; border: 0!important; border-radius: 50%!important; font-size: 0!important; transform: none!important;
  background: var(--nx-check) center/12px 12px no-repeat, var(--nx-grad)!important }
.nx-benefits li, .nx-benefits li :is(p,span) { font: 500 13px/1.2 var(--nx-display)!important; color: var(--nx-body)!important; white-space: nowrap; text-align: left!important }

@media (max-width:991px) { .c-section.nx-confirm-hero { --sec-pt: 72px; --sec-pb: 80px } }
@media (max-width:767px) {
  .c-section.nx-confirm-hero { --sec-pt: 48px; --sec-pb: 56px;
    background-size: 560px 560px, 480px 480px!important;
    background-position: calc(100% + 220px) -280px, -240px 260px!important }
  .nx-confirm-hero .nx-mesh i:nth-child(1) { width: 380px; height: 380px; left: auto; right: -165px; top: -200px }
  .nx-confirm-hero .nx-mesh i:nth-child(2) { width: 320px; height: 320px; left: -80px; top: 260px }
  .nx-confirm-hero .nx-hero-copy > .vertical.inner::before { margin-bottom: 20px }
  .nx-confirm-hero .nx-eyebrow, .nx-confirm-hero .nx-display { margin-bottom: 20px!important }
  .nx-confirm-hero .nx-lead, .nx-confirm-hero .nx-lead :is(p,span) { font-size: 16px!important }
}

/* ---------- ALERT (column "nx-alert": Sub-headline nx-alert-title + Paragraph nx-alert-text) ---------- */
.nx-sec .c-column.nx-alert { position: relative; padding: 16px 16px 16px 48px!important; background: var(--nx-tint)!important; border-radius: 16px }
.nx-sec .c-column.nx-alert::before { content: ""; position: absolute; left: 16px; top: 16px; width: 20px; height: 20px; background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Icon'%3E%3Cpath id='Vector' d='M18.33 10C18.33 14.6 14.6 18.33 10 18.33C5.4 18.33 1.67 14.6 1.67 10C1.67 5.4 5.4 1.67 10 1.67C14.6 1.67 18.33 5.4 18.33 10Z' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' stroke='%236F62B8'/%3E%3Cpath id='Vector_2' d='M10 13.33V10' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' stroke='%236F62B8'/%3E%3Cpath id='Vector_3' d='M10 6.67H10.01' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' stroke='%236F62B8'/%3E%3C/g%3E%3C/svg%3E") center/contain no-repeat }
.nx-alert-title, .nx-alert-title :is(h1,h2,h3,h4,h5,h6,p,span) { font: 500 15px/1.2 var(--nx-display)!important; color: var(--nx-ink)!important }
.nx-alert-text { margin-top: 4px!important }
.nx-alert-text, .nx-alert-text :is(p,span,a) { font: 400 14px/1.55 var(--nx-text)!important; color: var(--nx-body)!important }
.nx-alert-text a { text-decoration: none!important; background: var(--nx-grad) 0 100%/100% 1px no-repeat }
.c-section.nx-qa { --sec-pt: 96px; --sec-pb: 96px }
.nx-qa .c-row { max-width: 760px!important; margin: 0 auto!important }
@media (max-width:767px) { .c-section.nx-qa { --sec-pt: 48px; --sec-pb: 56px } }

/* ---------- ACTION + RECEIPT · section "nx-sec nx-confirm" ---------- */
.c-section.nx-confirm { --sec-pt: 96px; --sec-pb: 96px; --row-gap: 20px }
.nx-confirm .c-row { max-width: 760px!important; margin: 0 auto!important }

/* Action card: column "nx-action nx-ico-consent" */
.nx-sec .c-column.nx-action { padding: 40px!important; border: 1.5px solid transparent!important; border-radius: 28px;
  background: linear-gradient(90deg,#f3f1fd,#eef7ff) padding-box, linear-gradient(135deg,#5ac8fa,#8e8cf8 55%,#c17cf6) border-box!important }
.nx-action > .vertical.inner { align-items: flex-start!important }
.nx-action .text-output, .nx-action .text-output * { text-align: left!important }
.nx-action > .vertical.inner > .c-wrapper + .c-wrapper { margin-top: 16px!important }
.nx-action .c-wrapper:has(> .nx-tag) { width: auto!important }
.nx-tag { display: inline-flex!important; align-items: center; padding: 6px 12px!important; background: #fff!important; border-radius: 999px }
.nx-tag, .nx-tag :is(p,span) { font: 500 13px/1.2 var(--nx-display)!important; color: var(--nx-accent)!important; white-space: nowrap }
.nx-action .c-wrapper:has(> .nx-action-title)::before { content: ""; display: block; width: 32px; height: 32px; margin-bottom: 16px; background: var(--ico) center/contain no-repeat }
.nx-action-title, .nx-action-title :is(h1,h2,h3,h4,h5,h6,p,span) { font: 500 26px/1.25 var(--nx-display)!important; letter-spacing: -.01em!important; color: var(--nx-ink)!important }
.nx-action .nx-body, .nx-action .nx-body :is(p,span), .nx-action-note, .nx-action-note :is(p,span) { font: 300 16px/1.6 var(--nx-text)!important; color: var(--nx-muted)!important }
.nx-action .c-wrapper:has(> .nx-subject) { align-self: stretch!important; width: 100%!important }
.nx-subject { padding: 14px 16px!important; background: #fff!important; border: 1px dashed #8e8cf8; border-radius: 16px }
.nx-subject, .nx-subject :is(p,span) { font: 500 15px/1.2 var(--nx-display)!important; color: var(--nx-ink)!important }

/* Receipt: GHL's built-in Order Confirmation element (in column "nx-receipt").
   The element keeps its own markup; these rules restyle it. Selectors are scoped to
   our sections and use !important, because the element ships its own colours. */
.nx-sec .c-column:is(.nx-receipt, :has(.container-order-confirmation)) { padding: 32px!important; background: #fff!important; border: 1px solid var(--nx-line)!important; border-radius: 28px }
.nx-sec .c-wrapper:has(> [class*="corder-confirmation"]), .nx-sec [class*="corder-confirmation"] { width: 100%!important; margin: 0!important; padding: 0!important; background: transparent!important; color: var(--nx-body)!important; font-family: var(--nx-text)!important }
.nx-sec .container-order-confirmation { max-width: none!important }
.nx-sec .order-confirmation-body { padding: 0!important; background: none!important }
.nx-sec .container-order-confirmation .order-confirmation-title { margin: 0 0 30px!important; font: 500 12.5px/1.2 var(--nx-display)!important; letter-spacing: .09em!important; text-transform: uppercase; color: var(--nx-muted)!important }
.nx-sec .container-order-confirmation .product-detail { margin: 0!important }
.nx-sec .container-order-confirmation :is(.oc-product-title, .oc-product-description) { display: grid!important; grid-template-columns: minmax(0,1fr) auto auto!important; column-gap: 24px; align-items: center; margin: 0!important }
.nx-sec .container-order-confirmation .oc-product-title { padding-bottom: 10px }
.nx-sec .container-order-confirmation .oc-product-title .item { font: 500 13px/1.2 var(--nx-display)!important; color: var(--nx-muted)!important }
.nx-sec .container-order-confirmation .oc-product-description { padding: 12px 0 }
.nx-sec .container-order-confirmation .oc-product-description > *, .nx-sec .container-order-confirmation .oc-product-description .coupon-item { margin: 0!important; font: 300 16px/1.6 var(--nx-text)!important; color: var(--nx-body)!important }
.nx-sec .container-order-confirmation :is(.oc-product-title, .oc-product-description) > :nth-child(2) { text-align: center!important }
.nx-sec .container-order-confirmation :is(.oc-product-title, .oc-product-description) > :last-child { text-align: right!important; white-space: nowrap; font-variant-numeric: tabular-nums }
.nx-sec .container-order-confirmation .divider-product { height: 1px!important; margin: 8px 0!important; background: var(--nx-line)!important; opacity: 1!important }
.nx-sec .order-confirmation-body > div > .divider-product:last-child { display: none!important }   /* the element's trailing line when there are no shipping details */
.nx-sec .container-order-confirmation .oc-product-total { display: flex!important; justify-content: space-between; align-items: baseline; gap: 16px; margin: 0!important; padding-top: 14px }
.nx-sec .container-order-confirmation .oc-product-total .item-total { margin: 0!important; font: 500 20px/1.3 var(--nx-display)!important; letter-spacing: -.005em; color: var(--nx-ink)!important; white-space: nowrap; font-variant-numeric: tabular-nums }
/* Tax and extra-charge lines (only when the order has them) */
.nx-sec .container-order-confirmation .oc-product-total.mb-3 { padding-top: 6px }
.nx-sec .container-order-confirmation .oc-product-total.mb-3 .item-total { font: 300 15px/1.6 var(--nx-text)!important; color: var(--nx-muted)!important }
/* Coupon note and tag */
.nx-sec .container-order-confirmation .coupon-tag { margin-left: 8px; padding: 2px 8px; border-radius: 999px; background: var(--nx-tint); color: var(--nx-accent); font: 500 12px/1.4 var(--nx-display) }
.nx-sec .container-order-confirmation .product-detail ~ div[style] { margin-top: 12px; font: 400 14px/1.55 var(--nx-text); color: var(--nx-muted) }
/* Shipping details (if switched on in the element) */
.nx-sec .container-order-confirmation .shipping-details { margin-top: 16px }
.nx-sec .container-order-confirmation .shipping-details .shipping-details { margin-top: 0 }
.nx-sec .container-order-confirmation .shipping-details-title { margin-bottom: 8px; padding: 0!important; font: 500 12.5px/1.2 var(--nx-display)!important; letter-spacing: .09em; text-transform: uppercase; color: var(--nx-muted)!important }
.nx-sec .container-order-confirmation .shipping-address { font: 300 16px/1.6 var(--nx-text)!important; color: var(--nx-body)!important }

@media (max-width:767px) {
  .c-section.nx-confirm { --sec-pt: 40px; --sec-pb: 40px; --row-gap: 16px }
  .nx-sec .c-column.nx-action { padding: 24px 20px!important; border-radius: 20px; border: 1px solid var(--nx-lav-soft)!important; background: var(--nx-tint)!important }
  .nx-tag { background: var(--nx-tint)!important }
  .nx-subject, .nx-subject :is(p,span) { font-size: 13px!important }
  .nx-action-note { display: flex!important; align-items: center; gap: 12px }
  .nx-action-note::before { content: ""; flex: none; width: 22px; height: 22px; border-radius: 50%; background: var(--nx-check) center/12px 12px no-repeat, var(--nx-grad) }
  .nx-action-note, .nx-action-note :is(p,span) { color: var(--nx-body)!important }
  .nx-sec .c-column:is(.nx-receipt, :has(.container-order-confirmation)) { padding: 24px 20px!important; border-radius: 20px }
  .nx-sec .container-order-confirmation .order-confirmation-title { margin-bottom: 16px!important }
  .nx-sec .container-order-confirmation :is(.oc-product-title, .oc-product-description) { column-gap: 16px }
  .nx-sec .container-order-confirmation .oc-product-title { padding: 10px 0 }
  .nx-sec .container-order-confirmation .oc-product-description > *, .nx-sec .container-order-confirmation .oc-product-description .coupon-item { font: 400 14px/1.55 var(--nx-text)!important }
  .nx-sec .container-order-confirmation .oc-product-total { padding-top: 8px }
  .nx-sec .container-order-confirmation .oc-product-total .item-total { font-size: 15px!important; line-height: 1.2!important }
}

/* ---------- TIMELINE · section "nx-sec nx-timeline" · 3 columns "nx-tl", stacked ---------- */
.c-section.nx-timeline { --sec-pt: 96px; --sec-pb: 96px; --row-gap: 48px; background-image: var(--nx-wash)!important }
.nx-timeline .c-row:has(.nx-tl) { max-width: 760px!important; margin: 0 auto!important }
.nx-timeline .c-row:has(.nx-tl) > .inner { flex-direction: column!important; gap: 40px; counter-reset: nx-tl }
.nx-timeline .c-row:has(.nx-tl) > .inner > .c-column { flex: none!important; width: 100%!important }
.nx-sec .c-column.nx-tl { position: relative; padding-left: 88px!important; counter-increment: nx-tl }
.nx-tl::before { content: counter(nx-tl); position: absolute; left: 0; top: 0; z-index: 1; width: 56px; height: 56px; box-sizing: border-box;
  display: flex; align-items: center; justify-content: center; border-radius: 50%; background: #fff; border: 1px solid #8e8cf8;
  box-shadow: 0 14px 30px -14px rgba(110,89,219,.22); font: 500 20px/1.3 var(--nx-display); color: var(--nx-ink);
  transition: background .6s var(--nx-ease), color .6s, border-color .6s }
.nx-tl:not(:last-child)::after { content: ""; position: absolute; left: 27px; top: 28px; bottom: -40px; width: 2px;
  background: linear-gradient(#8e8cf8, rgba(193,124,246,.25)); transform-origin: top; transition: transform 1.2s var(--nx-ease) }
html.nx-js .nx-tl:not(.is-on)::after { transform: scaleY(0) }
.nx-tl > .vertical.inner { gap: 8px }
.nx-tl-title, .nx-tl-title :is(h1,h2,h3,h4,h5,h6,p,span) { font: 500 26px/1.25 var(--nx-display)!important; letter-spacing: -.01em!important; color: var(--nx-ink)!important }
.nx-tl .nx-body, .nx-tl .nx-body :is(p,span) { color: var(--nx-muted)!important }
@media (max-width:767px) {
  .c-section.nx-timeline { --sec-pt: 64px; --sec-pb: 64px; --row-gap: 40px }
  .nx-timeline .nx-head .nx-eyebrow :is(h1,h2,h3,h4,h5,h6,p) { text-align: center!important }
  .nx-timeline .c-row:has(.nx-tl) > .inner { gap: 0 }
  .nx-sec .c-column.nx-tl { padding-left: 60px!important; padding-bottom: 36px!important }
  .nx-sec .c-column.nx-tl:last-child { padding-bottom: 0!important }
  .nx-tl::before { content: counter(nx-tl, decimal-leading-zero); width: 44px; height: 44px; font-size: 15px; color: #8e8cf8; box-shadow: 0 10px 22px -12px rgba(110,89,219,.3) }
  .nx-tl:last-child::before { background: var(--nx-grad); border: 0; color: #fff }
  .nx-tl:not(:last-child)::after { left: 21px; top: 44px; bottom: 0; background: #8e8cf8 }
  .nx-tl > .vertical.inner { padding-top: 8px }
  .nx-tl-title, .nx-tl-title :is(h1,h2,h3,h4,h5,h6,p,span) { font-size: 26px!important }
}

/* ---------- SUPPORT · section "nx-sec nx-duo nx-support" ---------- */
.c-section.nx-duo.nx-support { --row-gap: 48px }
.nx-duo.nx-support .c-row > .inner { gap: 64px }
@media (min-width:992px) { .nx-duo.nx-support .c-column.nx-media { flex-basis: 600px!important; height: 460px } }
.nx-duo.nx-support .nx-copy > .vertical.inner { gap: 16px }
.nx-duo.nx-support .nx-copy .c-button { margin-top: 8px!important }

/* Help cards: 2 columns "nx-help nx-ico-…" */
.nx-duo.nx-support .c-row:has(.nx-help) > .inner { display: grid!important; grid-template-columns: repeat(2,minmax(0,1fr))!important; align-items: start!important; gap: 20px }
.nx-duo.nx-support .c-row:has(.nx-help) > .inner > .c-column { width: auto!important; max-width: none!important; min-width: 0!important; height: auto!important }
.nx-sec .c-column.nx-help { padding: 32px!important; background: var(--nx-subtle-bg)!important; border: 1px solid var(--nx-line)!important; border-radius: 28px;
  transition: transform .6s var(--nx-ease), box-shadow .6s var(--nx-ease), border-color .4s }
.nx-help:hover { transform: translateY(-4px); border-color: var(--nx-lav)!important; box-shadow: var(--nx-shadow-lav) }
.nx-help > .vertical.inner { align-items: flex-start!important; gap: 16px }
.nx-help > .vertical.inner::before { content: ""; width: 52px; height: 52px; flex: none; border-radius: 16px; background: var(--ico) center/32px 32px no-repeat, var(--nx-tint) }
.nx-help-title, .nx-help-title :is(h1,h2,h3,h4,h5,h6,p,span) { font: 500 26px/1.25 var(--nx-display)!important; letter-spacing: -.01em!important; color: var(--nx-ink)!important }
.nx-help .nx-body, .nx-help .nx-body :is(p,span) { color: var(--nx-muted)!important }
.nx-help .nx-body a { font: 500 15px/1.6 var(--nx-display)!important; color: var(--nx-ink)!important; text-decoration: none!important;
  background: var(--nx-grad) 0 100%/0 1px no-repeat; transition: background-size .45s var(--nx-ease) }
.nx-help .nx-body a:hover { background-size: 100% 1px }
.nx-help .c-button { margin-top: 0!important }

/* Text link button: "nx-tlink" */
:is(a,button).nx-tlink { display: inline-flex!important; align-items: center!important; gap: 8px; box-sizing: border-box!important; max-width: 100%; height: 50px!important; min-height: 0!important; padding: 0 24px!important;
  background: linear-gradient(var(--nx-line),var(--nx-line)) 0 100%/100% 1.5px no-repeat!important; border: 0!important; border-radius: 0!important; box-shadow: none!important;
  font: 500 15px/1.2 var(--nx-display)!important; color: var(--nx-ink)!important; text-decoration: none!important; position: relative }
:is(a,button).nx-tlink * { font: inherit!important; color: inherit!important; margin: 0!important; padding: 0!important }
:is(a,button).nx-tlink :is(.button-icon-start,.button-icon-end,.sub-heading-button):empty { display: none!important }
:is(a,button).nx-tlink::before { content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 1.5px; background: var(--nx-grad);
  transform: scaleX(0); transform-origin: left; transition: transform .5s var(--nx-ease) }
:is(a,button).nx-tlink:hover::before { transform: none }
:is(a,button).nx-tlink::after { content: ""; width: 14px; height: 14px; flex: none; background: currentColor;
  -webkit-mask: var(--nx-arrow) center/contain no-repeat; mask: var(--nx-arrow) center/contain no-repeat; transition: transform .45s var(--nx-ease) }
:is(a,button).nx-tlink:hover::after { transform: translateX(3px) }

.nx-ico-messages  { --ico: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Messages / editable paths'%3E%3Cpath id='Lucide / messages-square' d='M22 13H24C24.53 13 25.04 13.21 25.41 13.59C25.79 13.96 26 14.47 26 15V26L22 22H16C15.47 22 14.96 21.79 14.59 21.41C14.21 21.04 14 20.53 14 20V19M18 13C18 13.53 17.79 14.04 17.41 14.41C17.04 14.79 16.53 15 16 15H10L6 19V8C6 7.47 6.21 6.96 6.59 6.59C6.96 6.21 7.47 6 8 6H16C16.53 6 17.04 6.21 17.41 6.59C17.79 6.96 18 7.47 18 8V13Z' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' stroke='url(%23paint0_linear_0_74)'/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_0_74' x1='9.33' y1='9.33' x2='22.67' y2='22.67' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%235AC8FA'/%3E%3Cstop offset='1' stop-color='%238E8CF8'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E") }

@media (max-width:991px) {
  .nx-duo.nx-support .c-row:has(.nx-help) > .inner { grid-template-columns: minmax(0,1fr)!important; gap: 24px }
}
@media (max-width:767px) {
  .c-section.nx-duo.nx-support { --row-gap: 24px }
  .nx-duo.nx-support .nx-copy > .vertical.inner { gap: 12px }
  .nx-sec .c-column.nx-help { padding: 20px!important; border-radius: 20px }
  .nx-sec .c-column.nx-help:first-child { background: var(--nx-tint)!important; border-color: var(--nx-lav-soft)!important }
  .nx-help > .vertical.inner { display: grid!important; grid-template-columns: 40px minmax(0,1fr); column-gap: 16px; row-gap: 4px; align-items: start!important }
  .nx-help > .vertical.inner::before { grid-row: 1 / span 2; width: 40px; height: 40px; border-radius: 12px; background-size: 24px 24px, auto }
  .nx-help > .vertical.inner > .c-wrapper { grid-column: 2; min-width: 0 }
  .nx-help > .vertical.inner > .c-button { grid-column: 1 / -1; margin-top: 12px!important }
  .nx-help-title, .nx-help-title :is(h1,h2,h3,h4,h5,h6,p,span) { font-size: 16px!important; line-height: 1.3!important }
  .nx-help .nx-body, .nx-help .nx-body :is(p,span,a) { font: 400 14px/1.55 var(--nx-text)!important; color: var(--nx-body)!important }
  .nx-help :is(a,button).nx-gbtn { width: 100%!important; display: flex!important }
}

/* ##################################################################### 05-book-a-call */
/* =====================================================================
   NURI · 05 BOOK A CALL · PAGE SECTIONS
   Figma: Radiant redesign → "05 Book a call · desktop · Radiant" (261:3045) / mobile (261:2246).
   ===================================================================== */

.nx-ico-headset   { --ico: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Participant support / editable paths'%3E%3Cpath id='Lucide / headset' d='M7 15H10C10.53 15 11.04 15.21 11.41 15.59C11.79 15.96 12 16.47 12 17V20C12 20.53 11.79 21.04 11.41 21.41C11.04 21.79 10.53 22 10 22H9C8.47 22 7.96 21.79 7.59 21.41C7.21 21.04 7 20.53 7 20V15ZM7 15C7 13.82 7.23 12.65 7.69 11.56C8.14 10.46 8.8 9.47 9.64 8.64C10.47 7.8 11.46 7.14 12.56 6.69C13.65 6.23 14.82 6 16 6C17.18 6 18.35 6.23 19.44 6.69C20.54 7.14 21.53 7.8 22.36 8.64C23.2 9.47 23.86 10.46 24.31 11.56C24.77 12.65 25 13.82 25 15M25 15V20M25 15H22C21.47 15 20.96 15.21 20.59 15.59C20.21 15.96 20 16.47 20 17V20C20 20.53 20.21 21.04 20.59 21.41C20.96 21.79 21.47 22 22 22H23C23.53 22 24.04 21.79 24.41 21.41C24.79 21.04 25 20.53 25 20M25 20V22C25 23.06 24.58 24.08 23.83 24.83C23.08 25.58 22.06 26 21 26H16' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' stroke='url(%23paint0_linear_0_56)'/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_0_56' x1='10' y1='9.33' x2='23.26' y2='21.27' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%235AC8FA'/%3E%3Cstop offset='1' stop-color='%238E8CF8'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E") }

/* Phones: every native button spans its column */
@media (max-width:767px) {
  .nx-sec .vertical.inner > .c-button, .nx-sec .c-wrapper:has(> :is(a,button).nx-gbtn) { width: 100%!important; max-width: none!important; align-self: stretch!important }
  .nx-sec :is(a,button).nx-gbtn { display: flex!important; width: 100%!important; justify-content: center!important }
}

/* ---------- HERO · section "nx-sec nx-hero nx-book-hero" ----------
   Row: column "nx-hero-copy" + column "nx-hero-visual nx-hero-visual--still nx-book-visual". */
.c-section.nx-book-hero { --sec-pt: 0px; --sec-pb: 0px;
  background-image:
    radial-gradient(closest-side, rgba(199,236,251,.9), rgba(199,236,251,0)),
    radial-gradient(closest-side, rgba(236,214,251,.85), rgba(236,214,251,0))!important;
  background-size: 1000px 1000px, 700px 700px!important;
  background-position: calc(50% + 290px) -270px, calc(50% - 810px) 300px!important }
.nx-book-hero .nx-mesh i:nth-child(1) { width: 820px; height: 820px; left: calc(50% - 120px); top: -180px; background: #c7ecfb }
.nx-book-hero .nx-mesh i:nth-child(2) { width: 540px; height: 540px; left: calc(50% - 900px); top: 380px; background: #ecd6fb }
.nx-book-hero .nx-mesh i:nth-child(3) { display: none }
.nx-book-hero > .inner { padding-right: 0!important }
.nx-book-hero .c-row > .inner { align-items: center!important; gap: 0 }
.nx-book-hero .c-column.nx-hero-copy { flex: 0 0 620px!important }
.nx-book-hero .nx-hero-copy > .vertical.inner { align-items: flex-start!important; justify-content: center; gap: 24px }
.nx-book-hero .nx-display :is(h1,h2,p) { max-width: 9em }   /* wraps as in Figma: "Not sure if a / program is right / for you? Let's talk." */
.nx-hero-note, .nx-hero-note :is(p,span) { font: 400 14px/1.55 var(--nx-text)!important; color: var(--nx-muted)!important }

/* Photo column: cut-out photo standing on the bottom edge, two float pills */
.nx-book-hero .c-column.nx-book-visual { flex: 1 1 0!important; align-self: stretch!important }
.nx-book-visual > .vertical.inner { position: relative; height: 760px }
.nx-book-visual .c-image { position: absolute!important; left: 0; right: 0; bottom: 0; top: 0; overflow: hidden }
.nx-book-visual .c-image :is(.image-container, .image-container > div, .image-container > div > div, picture) { width: 100%!important; height: 100%!important; max-width: none!important }
.nx-book-visual .c-image img { position: absolute; left: 50%; bottom: -10px; width: auto!important; height: 730px!important; max-width: none!important; transform: translateX(-50%); object-fit: contain }
.nx-book-visual .c-wrapper:has(> .nx-float--a) { right: 24px; top: 92px }
.nx-book-visual .c-wrapper:has(> .nx-float--b) { left: 24px; bottom: 55px }

@media (max-width:1279px) {
  .nx-book-hero .c-column.nx-hero-copy { flex: 0 0 520px!important }
  .nx-book-visual > .vertical.inner { height: 680px }
  .nx-book-visual .c-image img { height: 650px!important }
}
@media (max-width:991px) {
  .nx-book-hero > .inner { padding-right: var(--nx-gutter)!important }
  .nx-book-hero .c-row > .inner { flex-direction: column!important; align-items: stretch!important; gap: 32px }
  .nx-book-hero .c-column { flex: none!important; width: 100%!important }
  .c-section.nx-book-hero { --sec-pt: 56px }
  .nx-book-visual > .vertical.inner { height: 520px }
  .nx-book-visual .c-image img { height: 500px!important; bottom: 0 }
}
@media (max-width:767px) {
  .c-section.nx-book-hero { --sec-pt: 48px;
    background-size: 640px 640px, 480px 480px!important;
    background-position: calc(100% + 260px) -420px, -240px 280px!important }
  .nx-book-hero .nx-mesh i:nth-child(1) { width: 480px; height: 480px; left: auto; right: -225px; top: -260px }
  .nx-book-hero .nx-mesh i:nth-child(2) { width: 320px; height: 320px; left: -80px; top: 360px }
  .nx-book-hero .c-row > .inner { gap: 20px }
  .nx-book-hero .nx-hero-copy > .vertical.inner { gap: 20px }
  .nx-book-visual > .vertical.inner { height: 330px }
  .nx-book-visual > .vertical.inner::before { content: ""; position: absolute; left: 50%; top: 20px; width: 240px; height: 240px; margin-left: -120px; border-radius: 50%;
    background: radial-gradient(closest-side, rgba(199,236,251,.9), rgba(199,236,251,0)) }
  .nx-book-visual .c-image img { height: 330px!important; bottom: 0 }
  .nx-book-visual .c-wrapper:has(> .nx-float--a) { right: 0; top: 0 }
  .nx-book-visual .c-wrapper:has(> .nx-float--b) { left: 0; bottom: 27px }
}

/* ---------- WHAT TO EXPECT · section "nx-sec nx-expect" · cards "nx-xcard nx-ico-…" ---------- */
.c-section.nx-expect { --sec-pt: 96px; --sec-pb: 96px; --row-gap: 48px; background-image: var(--nx-wash)!important }
.nx-expect .nx-head > .vertical.inner { gap: 16px; max-width: 1200px }
.nx-expect .nx-head .c-paragraph { max-width: 680px }
.nx-expect .c-row:has(.nx-xcard) > .inner { display: grid!important; grid-template-columns: repeat(3,minmax(0,1fr))!important; align-items: stretch!important; gap: 24px; counter-reset: nx-x }
.nx-expect .c-row:has(.nx-xcard) > .inner > .c-column { width: auto!important; max-width: none!important; min-width: 0!important; height: auto!important }
.nx-sec .c-column.nx-xcard { position: relative; padding: 32px!important; background: #fff!important; border: 1px solid var(--nx-line)!important; border-radius: 28px;
  box-shadow: 0 40px 80px -50px rgba(60,40,140,.4); counter-increment: nx-x; transition: transform .6s var(--nx-ease), border-color .4s }
.nx-xcard:hover { transform: translateY(-6px); border-color: var(--nx-lav)!important }
.nx-xcard::after { content: counter(nx-x, decimal-leading-zero); position: absolute; top: 33px; right: 33px; font: 500 12.5px/1.2 var(--nx-display); letter-spacing: .09em; color: var(--nx-muted) }
.nx-xcard > .vertical.inner { align-items: flex-start!important; gap: 16px }
.nx-xcard > .vertical.inner::before { content: ""; width: 52px; height: 52px; flex: none; border-radius: 16px; background: var(--ico) center/32px 32px no-repeat, var(--nx-tint);
  transition: transform .6s var(--nx-ease) }
.nx-xcard:hover > .vertical.inner::before { transform: scale(1.08) rotate(-4deg) }
.nx-xcard-title, .nx-xcard-title :is(h1,h2,h3,h4,h5,h6,p,span) { font: 500 26px/1.25 var(--nx-display)!important; letter-spacing: -.01em!important; color: var(--nx-ink)!important }
.nx-xcard .nx-body, .nx-xcard .nx-body :is(p,span) { color: var(--nx-muted)!important }
@media (max-width:991px) {
  .nx-expect .c-row:has(.nx-xcard) > .inner { grid-template-columns: minmax(0,1fr)!important; gap: 20px; max-width: 560px!important; margin: 0 auto!important }
}
@media (max-width:767px) {
  .c-section.nx-expect { --sec-pt: 64px; --sec-pb: 64px; --row-gap: 20px }
  .nx-expect .nx-head { margin-bottom: 0 }
  .nx-sec .c-column.nx-xcard { padding: 24px!important; border-radius: 24px }
  .nx-xcard::after { top: 25px; right: 25px; color: var(--nx-accent) }
  .nx-xcard > .vertical.inner { gap: 12px }
  .nx-xcard > .vertical.inner::before { width: 32px; height: 32px; border-radius: 0; background: var(--ico) center/32px 32px no-repeat }
}

/* ---------- REASSURANCE · section "nx-sec nx-duo nx-reassure" (shared media + copy row) ---------- */
.nx-reassure .c-row > .inner { gap: 64px }
@media (min-width:992px) { .nx-reassure .c-column.nx-media { flex-basis: 580px!important; height: 460px } }
.nx-reassure .nx-copy > .vertical.inner { gap: 16px }
.nx-reassure .nx-copy > .vertical.inner > .c-bullet-list { margin-top: 16px!important }
.nx-reassure .nx-copy > .vertical.inner > .c-button { margin-top: 16px!important }
.nx-assure-list :is(ul,ol) { list-style: none!important; display: flex!important; flex-direction: column; gap: 16px }
.nx-assure-list li { display: flex!important; align-items: flex-start!important; gap: 12px; margin: 0!important; padding: 0!important; list-style: none!important;
  font: 300 16px/1.6 var(--nx-text)!important; color: var(--nx-body)!important }
.nx-assure-list li::before { margin-top: 2px!important; align-self: flex-start!important }
.nx-assure-list li :is(p,span) { margin: 0!important; padding: 0!important; font: inherit!important; color: inherit!important }
.nx-assure-list li :is(strong,b) { font-weight: 500!important; color: var(--nx-ink)!important }
@media (max-width:767px) {
  .nx-reassure .nx-copy > .vertical.inner { gap: 12px }
}

/* ---------- BEFORE YOU BOOK · section "nx-sec nx-infostrip" · column "nx-alert" ---------- */
.c-section.nx-infostrip { --sec-pt: 32px; --sec-pb: 32px; --sec-bg: var(--nx-subtle-bg) }
.nx-sec .c-column.nx-alert { position: relative; padding: 16px 16px 16px 48px!important; background: var(--nx-tint)!important; border-radius: 16px }
.nx-sec .c-column.nx-alert::before { content: ""; position: absolute; left: 16px; top: 16px; width: 20px; height: 20px; background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Icon'%3E%3Cpath id='Vector' d='M18.33 10C18.33 14.6 14.6 18.33 10 18.33C5.4 18.33 1.67 14.6 1.67 10C1.67 5.4 5.4 1.67 10 1.67C14.6 1.67 18.33 5.4 18.33 10Z' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' stroke='%236F62B8'/%3E%3Cpath id='Vector_2' d='M10 13.33V10' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' stroke='%236F62B8'/%3E%3Cpath id='Vector_3' d='M10 6.67H10.01' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' stroke='%236F62B8'/%3E%3C/g%3E%3C/svg%3E") center/contain no-repeat }
.nx-alert-title, .nx-alert-title :is(h1,h2,h3,h4,h5,h6,p,span) { font: 500 15px/1.2 var(--nx-display)!important; color: var(--nx-ink)!important }
.nx-alert-text { margin-top: 4px!important }
.nx-alert-text, .nx-alert-text :is(p,span,a) { font: 400 14px/1.55 var(--nx-text)!important; color: var(--nx-body)!important }
@media (max-width:767px) { .c-section.nx-infostrip { --sec-pt: 24px; --sec-pb: 24px } }

/* ---------- CALENDAR · section "nx-sec nx-calendar" · column "nx-cal" holds GHL's Calendar element ---------- */
.c-section.nx-calendar { --sec-pt: 96px; --sec-pb: 96px; --row-gap: 40px;
  background-image: radial-gradient(closest-side, rgba(199,236,251,.85), rgba(199,236,251,0)), var(--nx-wash)!important;
  background-size: 640px 640px, cover!important; background-position: calc(50% + 460px) -200px, 0 0!important; background-repeat: no-repeat!important }
.nx-calendar .nx-head > .vertical.inner { gap: 16px; max-width: 720px }
.nx-cal-hint, .nx-cal-hint :is(p,span) { font: 400 14px/1.55 var(--nx-text)!important; color: var(--nx-muted)!important }
.nx-calendar .c-row:has(.nx-cal) { max-width: 960px!important; margin: 0 auto!important }
.nx-sec .c-column:is(.nx-cal, :has(.c-calendar)) { padding: 24px!important; background: #fff!important; border: 1px solid var(--nx-line)!important; border-radius: 28px;
  box-shadow: 0 40px 80px -50px rgba(60,40,140,.4); min-height: 360px }
.nx-sec .c-column:is(.nx-cal, :has(.c-calendar)) :is(.c-calendar, .c-calendar > *, iframe) { width: 100%!important; max-width: none!important; margin: 0!important; border: 0!important }
.nx-calendar .c-row:has(.nx-fine) { max-width: 720px!important; margin: 0 auto!important }
.nx-fine, .nx-fine :is(p,span) { font: 400 12.5px/1.45 var(--nx-text)!important; color: var(--nx-muted)!important; text-align: center!important }
@media (max-width:767px) {
  .c-section.nx-calendar { --sec-pt: 64px; --sec-pb: 64px; --row-gap: 20px; background-position: calc(100% + 280px) -120px, 0 0!important; background-size: 400px 400px, cover!important }
  .nx-sec .c-column:is(.nx-cal, :has(.c-calendar)) { padding: 12px!important; border-radius: 20px }
}

/* ---------- GET IN TOUCH · section "nx-sec nx-cta" · row "nx-cta-card" ---------- */
.c-section.nx-cta { --sec-pt: 96px; --sec-pb: 96px }
.nx-sec .c-row.nx-cta-card { position: relative; isolation: isolate; overflow: hidden; box-sizing: border-box!important; padding: 64px!important; border: 1px solid var(--nx-line); border-radius: 28px;
  background: radial-gradient(260px circle at calc(100% - 121px) 79px, rgba(199,236,251,.95), rgba(220,214,253,.55) 55%, transparent 100%), var(--nx-wash)!important }
.nx-cta-card > .inner { align-items: center!important; justify-content: space-between!important; gap: 48px }
/* Copy column takes the free space but stops at 640px; the buttons column keeps its natural width,
   so in the editor both columns stay easy to click */
.nx-cta-card .c-column.nx-cta-copy { flex: 1 1 0%!important; min-width: 0!important; max-width: 640px!important; width: auto!important }
.nx-cta-copy > .vertical.inner { align-items: flex-start!important; gap: 16px }
.nx-cta-copy .nx-h2 { max-width: 620px }
.nx-cta-copy .nx-lead { max-width: 560px }
.nx-cta-card .c-column.nx-cta-actions { flex: 0 0 auto!important; width: auto!important; min-width: max-content!important; max-width: none!important }
.nx-cta-actions > .vertical.inner { flex-direction: row!important; align-items: center!important; gap: 12px }
.nx-cta-actions .c-button { width: auto!important; flex: none!important }
.nx-cta-actions :is(a,button).nx-gbtn, .nx-cta-actions :is(a,button).nx-gbtn * { white-space: nowrap!important }
/* In the GHL editor (no Header Code, so no html.nx-live) the buttons stack, which keeps the
   buttons column narrow and both buttons easy to click. Live pages keep them side by side. */
html:not(.nx-live) .nx-cta-actions > .vertical.inner { flex-direction: column!important; align-items: stretch!important }
html:not(.nx-live) .nx-cta-actions .c-button, html:not(.nx-live) .nx-cta-actions :is(a,button).nx-gbtn { width: 100%!important }
:is(a,button).nx-gbtn.nx-gbtn--plain::after { display: none }
/* Book-a-call buttons are 50px tall (scoped so the unified CSS keeps 52px on the other pages) */
:is(.nx-book-hero,.nx-expect,.nx-reassure,.nx-infostrip,.nx-calendar,.nx-cta) :is(a,button).nx-gbtn { height: 50px!important }
@media (max-width:991px) {
  .nx-cta-card > .inner { flex-direction: column!important; align-items: flex-start!important; gap: 32px }
  .nx-cta-card .c-column.nx-cta-copy, .nx-cta-card .c-column.nx-cta-actions { flex: none!important; width: 100%!important; max-width: none!important; min-width: 0!important }
}
@media (max-width:767px) {
  .c-section.nx-cta { --sec-pt: 56px; --sec-pb: 56px }
  .nx-sec .c-row.nx-cta-card { padding: 28px 24px!important; border-radius: 24px;
    background: radial-gradient(200px circle at calc(100% - 40px) 30px, rgba(199,236,251,.95), rgba(220,214,253,.55) 55%, transparent 100%), var(--nx-wash)!important }
  .nx-cta-card > .inner { gap: 24px }
  .nx-cta-copy > .vertical.inner { gap: 12px }
  .nx-cta-actions > .vertical.inner { flex-direction: column!important; align-items: stretch!important }
  .nx-cta-actions .c-button { width: 100%!important }
}

/* ##################################################################### 00-landing */
/* =====================================================================
   NURI · 00 LANDING PAGE  (https://…/preview/zu9T7EkR7yR3OZeHhINK)
   The LP keeps its own look (52px headings, 60px gutter, its icons),
   now built from native GHL elements on the shared section frame (nx-sec).
   Every LP section carries "nx-lp" next to its own class, e.g. "nx-sec nx-lp nx-lp-hero".
   The native "Explore your programs" section (class nx-programs) is unchanged.
   ===================================================================== */

/* ---------- LP tokens + type (only inside LP sections and Programs) ---------- */
.c-section.nx-lp, .c-section.nx-programs {
  --nx-line-soft: #e2e8f0;
  --nx-tint: #f8f9fc;
  --nx-muted-2: #5b5b6b;
  --nx-on-dark: #c5c5d1;
  --nx-dark: #07070f;
  --nx-wash: linear-gradient(90deg,#f1faff,#faf4ff);
  --nx-gutter: 60px;
  --nx-arrow: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none' stroke='%23000' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M.9 .9h10v10M.9 10.9l10-10'/%3E%3C/svg%3E");
}
@media (max-width:1279px) { .c-section.nx-lp, .c-section.nx-programs { --nx-gutter: 40px } }
@media (max-width:991px)  { .c-section.nx-lp, .c-section.nx-programs { --nx-gutter: 24px } }
@media (max-width:767px)  { .c-section.nx-lp, .c-section.nx-programs { --nx-gutter: 16px } }

:is(.nx-lp,.nx-programs) .nx-h2, :is(.nx-lp,.nx-programs) .nx-h2 :is(h1,h2,h3,h4,h5,h6,p,span,strong) { font-size: 52px!important; line-height: 1.08!important; text-wrap: balance }
:is(.nx-lp,.nx-programs) .nx-lead, :is(.nx-lp,.nx-programs) .nx-lead :is(p,span) { font-size: 17px!important }
:is(.nx-lp,.nx-programs) .nx-eyebrow, :is(.nx-lp,.nx-programs) .nx-eyebrow :is(h1,h2,h3,h4,h5,h6,p,span,strong) { line-height: 1!important }
@media (max-width:1279px) { .nx-lp .nx-h2, .nx-lp .nx-h2 :is(h1,h2,h3,h4,h5,h6,p,span,strong) { font-size: clamp(36px,4.1vw,52px)!important } }
@media (max-width:767px)  { .nx-lp .nx-h2, .nx-lp .nx-h2 :is(h1,h2,h3,h4,h5,h6,p,span,strong) { font-size: clamp(32px,8.6vw,40px)!important } }

/* Programs heading: GHL's own 48px size wins on the live page today, so it stays 48px at every width */
.nx-programs .nx-h2, .nx-programs .nx-h2 :is(h1,h2,h3,h4,h5,h6,p,span,strong) { font-size: 48px!important }

/* LP buttons: 50px, wider arrow gap, LP arrow (set by --nx-arrow above) */
.nx-lp :is(a,button).nx-gbtn { height: 50px!important; gap: 24px; border-color: var(--nx-line-soft)!important }
.nx-lp :is(a,button).nx-gbtn::after { width: 12px; height: 12px; margin-right: 10px }
/* Text button "nx-tlink": no resting underline on the LP, gradient line on hover, arrow turns */
.nx-lp :is(a,button).nx-tlink { gap: 24px; background: none!important }
.nx-lp :is(a,button).nx-tlink::after { width: 12px; height: 12px; margin-right: 10px }
.nx-lp :is(a,button).nx-tlink:hover::after { transform: rotate(45deg) }

/* Card badge (Paragraph "nx-float nx-float--card nx-ico-…"): white card, icon, title + one line.
   Type the title, press Shift+Enter, type the second line. The first line becomes the title,
   so no bold or other formatting is needed. */
.nx-float.nx-float--card { display: flex!important; align-items: center; gap: 12px; padding: 16px!important; border-radius: 18px; background: #fff!important;
  border: 1px solid var(--nx-line-soft); filter: none; box-shadow: 0 18px 40px -28px rgba(60,40,140,.35) }
.nx-float.nx-float--card::before { width: 32px; height: 32px; border-radius: 0; background: var(--ico) center/contain no-repeat }
.nx-float.nx-float--card, .nx-float.nx-float--card p { font: 400 12px/18px var(--nx-text)!important; color: var(--nx-muted-2)!important }
.nx-float.nx-float--card :is(span,strong,em,b,i) { font: inherit!important; color: inherit!important }
.nx-float.nx-float--card p::first-line { font: 500 14px/18px var(--nx-display); color: var(--nx-ink) }
.nx-float.nx-float--card p + p { margin-top: 2px!important }
/* Title-only badge (add nx-float--title): the whole text is the title, even when it wraps */
.nx-float.nx-float--card.nx-float--title, .nx-float.nx-float--card.nx-float--title p { font: 500 14px/1.2 var(--nx-display)!important; color: var(--nx-ink)!important }
@media (max-width:767px) {
  .nx-float.nx-float--card { padding: 12px 14px!important; gap: 10px; border-radius: 16px }
  .nx-float.nx-float--card::before { width: 28px; height: 28px }
}

/* LP icons (column / paragraph class nx-ico-…) */
.nx-ico-lp-referral     { --ico: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cpath d='M4.5 18.38C4.5 17.22 4.83 16.09 5.46 15.12C6.09 14.15 6.98 13.38 8.03 12.91C8.8 12.56 9.63 12.38 10.46 12.37M10.46 12.37C10.49 12.37 10.51 12.37 10.54 12.37M10.46 12.37C10.47 12.37 10.49 12.38 10.5 12.38C10.51 12.38 10.53 12.37 10.54 12.37M10.46 12.37C9.48 12.36 8.54 11.97 7.85 11.28C7.15 10.57 6.75 9.62 6.75 8.62C6.75 7.63 7.15 6.68 7.85 5.97C8.55 5.27 9.51 4.88 10.5 4.88C11.49 4.88 12.45 5.27 13.15 5.97C13.85 6.68 14.25 7.63 14.25 8.62C14.25 9.62 13.85 10.57 13.15 11.28C12.46 11.97 11.52 12.36 10.54 12.37M10.54 12.37C10.82 12.38 11.11 12.4 11.39 12.44C12.54 12.61 13.6 13.11 14.47 13.88M17.25 14.62V16.88M17.25 16.88V19.12M17.25 16.88H19.5M17.25 16.88H15' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' stroke='%235B5B6B'/%3E%3C/g%3E%3C/svg%3E") }
.nx-ico-lp-support      { --ico: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cpath d='M15 6.5V7.5M15 7.5V8.5M15 7.5H16C16.53 7.5 17.04 7.71 17.41 8.09C17.79 8.46 18 8.97 18 9.5V13.5C18 15.09 17.37 16.62 16.24 17.74C15.12 18.87 13.59 19.5 12 19.5M9 6.5V7.5M9 7.5V8.5M9 7.5H8C7.47 7.5 6.96 7.71 6.59 8.09C6.21 8.46 6 8.97 6 9.5V13.5C6 15.09 6.63 16.62 7.76 17.74C8.88 18.87 10.41 19.5 12 19.5M12 19.5C12 21.09 12.63 22.62 13.76 23.74C14.88 24.87 16.41 25.5 18 25.5C19.59 25.5 21.12 24.87 22.24 23.74C23.37 22.62 24 21.09 24 19.5V16.5M24 16.5C24.53 16.5 25.04 16.29 25.41 15.91C25.79 15.54 26 15.03 26 14.5C26 13.97 25.79 13.46 25.41 13.09C25.04 12.71 24.53 12.5 24 12.5C23.47 12.5 22.96 12.71 22.59 13.09C22.21 13.46 22 13.97 22 14.5C22 15.03 22.21 15.54 22.59 15.91C22.96 16.29 23.47 16.5 24 16.5Z' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' stroke='url(%23paint0_linear_0_22)'/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_0_22' x1='9.33' y1='9.67' x2='21.98' y2='22.98' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%235AC8FA'/%3E%3Cstop offset='1' stop-color='%238E8CF8'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E") }
.nx-ico-lp-supplies     { --ico: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cpath d='M16 16V18M16 18V20M16 18H18M16 18H14M20 11V9C20 8.47 19.79 7.96 19.41 7.59C19.04 7.21 18.53 7 18 7H14C13.47 7 12.96 7.21 12.59 7.59C12.21 7.96 12 8.47 12 9V11M20 11H12M20 11H22M12 11H10M22 11V25M22 11H24C25.33 11 26 11.67 26 13V23C26 24.33 25.33 25 24 25H22M22 25H10M10 11V25M10 11H8C6.67 11 6 11.67 6 13V23C6 24.33 6.67 25 8 25H10' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' stroke='url(%23paint0_linear_0_20)'/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_0_20' x1='9.33' y1='10' x2='21.27' y2='23.26' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%235AC8FA'/%3E%3Cstop offset='1' stop-color='%238E8CF8'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E") }
.nx-ico-lp-purity       { --ico: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg%3E%3Cg%3E%3Cuse xlink:href='%23stroke0_0_16' stroke='%238E8CF8'/%3E%3Cuse xlink:href='%23stroke0_0_16' stroke='url(%23paint0_linear_0_16)'/%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_0_16' x1='10' y1='9.33' x2='23.26' y2='21.27' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%235AC8FA'/%3E%3Cstop offset='1' stop-color='%238E8CF8'/%3E%3C/linearGradient%3E%3Cpath id='stroke0_0_16' d='M19 6V10C19 10.53 19.21 11.04 19.59 11.41C19.96 11.79 20.47 12 21 12H25M9.27 25C9.44 25.3 9.69 25.56 10 25.73C10.3 25.91 10.64 26 10.99 26H23C23.53 26 24.04 25.79 24.41 25.41C24.79 25.04 25 24.53 25 24V11L20 6H11C10.47 6 9.96 6.21 9.59 6.59C9.21 6.96 9 7.47 9 8V11M14 22L12.5 20.5M13 18C13 18.8 12.68 19.56 12.12 20.12C11.56 20.68 10.8 21 10 21C9.2 21 8.44 20.68 7.88 20.12C7.32 19.56 7 18.8 7 18C7 17.2 7.32 16.44 7.88 15.88C8.44 15.32 9.2 15 10 15C10.8 15 11.56 15.32 12.12 15.88C12.68 16.44 13 17.2 13 18Z' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/defs%3E%3C/svg%3E") }
.nx-ico-lp-endotoxin    { --ico: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cpath d='M18 6V12C18 12.34 18.08 12.67 18.25 12.96L21.55 19M18 6H14M18 6H19.5M21.55 19L23.75 23.04C23.92 23.34 24.01 23.69 24 24.03C23.99 24.38 23.9 24.72 23.72 25.02C23.54 25.32 23.29 25.57 22.99 25.74C22.69 25.91 22.35 26 22 26H10C9.65 26 9.31 25.91 9.01 25.74C8.71 25.57 8.46 25.32 8.28 25.02C8.1 24.72 8.01 24.38 8 24.03C7.99 23.69 8.08 23.34 8.24 23.04L10.45 19M21.55 19H10.45M21.55 19H21.55M10.45 19L13.76 12.96C13.92 12.67 14 12.34 14 12V6M10.45 19H10.45M14 6H12.5' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' stroke='url(%23paint0_linear_0_14)'/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_0_14' x1='10.67' y1='9.33' x2='23.67' y2='19.74' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%235AC8FA'/%3E%3Cstop offset='1' stop-color='%238E8CF8'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E") }
.nx-ico-lp-conversation { --ico: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cpath d='M7 15H10C10.53 15 11.04 15.21 11.41 15.59C11.79 15.96 12 16.47 12 17V20C12 20.53 11.79 21.04 11.41 21.41C11.04 21.79 10.53 22 10 22H9C8.47 22 7.96 21.79 7.59 21.41C7.21 21.04 7 20.53 7 20V15ZM7 15C7 13.82 7.23 12.65 7.69 11.56C8.14 10.46 8.8 9.47 9.64 8.64C10.47 7.8 11.46 7.14 12.56 6.69C13.65 6.23 14.82 6 16 6C17.18 6 18.35 6.23 19.44 6.69C20.54 7.14 21.53 7.8 22.36 8.64C23.2 9.47 23.86 10.46 24.31 11.56C24.77 12.65 25 13.82 25 15M25 15V20M25 15H22C21.47 15 20.96 15.21 20.59 15.59C20.21 15.96 20 16.47 20 17V20C20 20.53 20.21 21.04 20.59 21.41C20.96 21.79 21.47 22 22 22H23C23.53 22 24.04 21.79 24.41 21.41C24.79 21.04 25 20.53 25 20M25 20V22C25 23.06 24.58 24.08 23.83 24.83C23.08 25.58 22.06 26 21 26H16' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' stroke='%2316141F'/%3E%3C/g%3E%3C/svg%3E") }
.nx-ico-lp-guide        { --ico: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cpath d='M16 11V25M16 11C16 9.94 15.58 8.92 14.83 8.17C14.08 7.42 13.06 7 12 7H7C6.73 7 6.48 7.11 6.29 7.29C6.11 7.48 6 7.73 6 8V21C6 21.27 6.11 21.52 6.29 21.71C6.48 21.89 6.73 22 7 22H13C13.8 22 14.56 22.32 15.12 22.88C15.68 23.44 16 24.2 16 25M16 11C16 9.94 16.42 8.92 17.17 8.17C17.92 7.42 18.94 7 20 7H25C25.27 7 25.52 7.11 25.71 7.29C25.89 7.48 26 7.73 26 8V21C26 21.27 25.89 21.52 25.71 21.71C25.52 21.89 25.27 22 25 22H19C18.2 22 17.44 22.32 16.88 22.88C16.32 23.44 16 24.2 16 25' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' stroke='%2316141F'/%3E%3C/g%3E%3C/svg%3E") }
.nx-ico-lp-intake       { --ico: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cpath d='M20 6V8M20 8H12M20 8H23C24.33 8 25 8.67 25 10V24C25 25.33 24.33 26 23 26H21M11 26V24C11 23.47 11.21 22.96 11.59 22.59C11.96 22.21 12.47 22 13 22H19C19.53 22 20.04 22.21 20.41 22.59C20.79 22.96 21 23.47 21 24V26M11 26H21M11 26H9C7.67 26 7 25.33 7 24V10C7 8.67 7.67 8 9 8H12M12 6V8M19 15C19 15.8 18.68 16.56 18.12 17.12C17.56 17.68 16.8 18 16 18C15.2 18 14.44 17.68 13.88 17.12C13.32 16.56 13 15.8 13 15C13 14.2 13.32 13.44 13.88 12.88C14.44 12.32 15.2 12 16 12C16.8 12 17.56 12.32 18.12 12.88C18.68 13.44 19 14.2 19 15Z' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' stroke='url(%23paint0_linear_0_14)'/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_0_14' x1='10' y1='9.33' x2='23.26' y2='21.27' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%235AC8FA'/%3E%3Cstop offset='1' stop-color='%238E8CF8'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E") }
.nx-ico-lp-order        { --ico: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cpath d='M26 14V11C26 9.67 25.33 9 24 9H8C6.67 9 6 9.67 6 11V14M26 14V21C26 22.33 25.33 23 24 23H8C6.67 23 6 22.33 6 21V14M26 14H6' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' stroke='url(%23paint0_linear_0_12)'/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_0_12' x1='9.33' y1='11.33' x2='18.1' y2='23.86' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%235AC8FA'/%3E%3Cstop offset='1' stop-color='%238E8CF8'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E") }
.nx-ico-lp-shipping     { --ico: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cpath d='M18 22V12M18 22H19M18 22H13M18 12V10C18 9.47 17.79 8.96 17.41 8.59C17.04 8.21 16.53 8 16 8H8C7.47 8 6.96 8.21 6.59 8.59C6.21 8.96 6 9.47 6 10V21C6 21.27 6.11 21.52 6.29 21.71C6.48 21.89 6.73 22 7 22H9M18 12H21.52C21.67 12 21.82 12.03 21.95 12.1C22.09 12.16 22.21 12.26 22.3 12.38L25.78 16.73C25.92 16.9 26 17.12 26 17.35V21C26 21.27 25.89 21.52 25.71 21.71C25.52 21.89 25.27 22 25 22H23M9 22C9 22.53 9.21 23.04 9.59 23.41C9.96 23.79 10.47 24 11 24C11.53 24 12.04 23.79 12.41 23.41C12.79 23.04 13 22.53 13 22M9 22C9 21.47 9.21 20.96 9.59 20.59C9.96 20.21 10.47 20 11 20C11.53 20 12.04 20.21 12.41 20.59C12.79 20.96 13 21.47 13 22M19 22C19 22.53 19.21 23.04 19.59 23.41C19.96 23.79 20.47 24 21 24C21.53 24 22.04 23.79 22.41 23.41C22.79 23.04 23 22.53 23 22M19 22C19 21.47 19.21 20.96 19.59 20.59C19.96 20.21 20.47 20 21 20C21.53 20 22.04 20.21 22.41 20.59C22.79 20.96 23 21.47 23 22' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' stroke='url(%23paint0_linear_0_10)'/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_0_10' x1='9.33' y1='10.67' x2='19.74' y2='23.67' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%235AC8FA'/%3E%3Cstop offset='1' stop-color='%238E8CF8'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E") }

/* =====================================================================
   HERO  · section "nx-sec nx-hero nx-lp nx-lp-hero"
   Row: column "nx-hero-copy" + column "nx-hero-visual nx-hero-visual--still nx-lp-visual"
   ===================================================================== */
.c-section.nx-lp-hero { --sec-pt: 0px; --sec-pb: 0px;
  /* Static mesh (editor + no-JS). Live, the footer code swaps in drifting blobs. */
  background-image:
    radial-gradient(closest-side, #c7ecfb, rgba(199,236,251,.7) 55%, rgba(199,236,251,.5) 85%, rgba(199,236,251,0)),
    radial-gradient(closest-side, #ecd6fb, rgba(236,214,251,.7) 55%, rgba(236,214,251,.5) 85%, rgba(236,214,251,0)),
    radial-gradient(closest-side, #f1e4fd, rgba(241,228,253,.7) 55%, rgba(241,228,253,.5) 85%, rgba(241,228,253,0))!important;
  background-size: 820px 820px, 760px 760px, 720px 720px!important;
  background-position: calc(50% + 290px) 300px, calc(50% - 50px) -534px, calc(50% + 540px) -100px!important }
.nx-lp-hero .nx-mesh i { filter: blur(50px); opacity: 1 }
.nx-lp-hero .nx-mesh i:nth-child(1) { width: 820px; height: 820px; left: calc(50% - 120px); top: 300px; background: radial-gradient(closest-side, #c7ecfb, rgba(199,236,251,.7) 55%, rgba(199,236,251,.5) 85%, rgba(199,236,251,0)) }
.nx-lp-hero .nx-mesh i:nth-child(2) { width: 760px; height: 760px; left: calc(50% - 430px); top: -534px; background: radial-gradient(closest-side, #ecd6fb, rgba(236,214,251,.7) 55%, rgba(236,214,251,.5) 85%, rgba(236,214,251,0)) }
.nx-lp-hero .nx-mesh i:nth-child(3) { width: 720px; height: 720px; left: calc(50% + 180px); top: -100px; background: radial-gradient(closest-side, #f1e4fd, rgba(241,228,253,.7) 55%, rgba(241,228,253,.5) 85%, rgba(241,228,253,0)) }

.nx-lp-hero > .inner { padding-right: max(36px, env(safe-area-inset-right,0px))!important }
.nx-lp-hero .c-row > .inner { height: 754px; align-items: center!important; gap: 24px }
.nx-lp-hero .c-column.nx-hero-copy { flex: 0 0 690px!important }
/* Copy column: everything stacks, except the two buttons, which sit side by side */
.nx-lp-hero .nx-hero-copy > .vertical.inner { flex-direction: row!important; flex-wrap: wrap!important; align-items: center!important; align-content: center!important;
  justify-content: flex-start!important; gap: 30px 28px; height: auto!important }
.nx-lp-hero .nx-hero-copy > .vertical.inner > .c-wrapper { flex: 0 0 100%; max-width: 100%; min-width: 0 }
.nx-lp-hero .nx-hero-copy > .vertical.inner > .c-button { flex: 0 0 auto; width: auto!important }

/* "Referred by your healthcare provider" (Paragraph "nx-ref") */
.nx-ref { display: flex!important; align-items: center; gap: 10px }
.nx-ref::before { content: ""; width: 24px; height: 24px; flex: none; background: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cpath d='M4.5 18.38C4.5 17.22 4.83 16.09 5.46 15.12C6.09 14.15 6.98 13.38 8.03 12.91C8.8 12.56 9.63 12.38 10.46 12.37M10.46 12.37C10.49 12.37 10.51 12.37 10.54 12.37M10.46 12.37C10.47 12.37 10.49 12.38 10.5 12.38C10.51 12.38 10.53 12.37 10.54 12.37M10.46 12.37C9.48 12.36 8.54 11.97 7.85 11.28C7.15 10.57 6.75 9.62 6.75 8.62C6.75 7.63 7.15 6.68 7.85 5.97C8.55 5.27 9.51 4.88 10.5 4.88C11.49 4.88 12.45 5.27 13.15 5.97C13.85 6.68 14.25 7.63 14.25 8.62C14.25 9.62 13.85 10.57 13.15 11.28C12.46 11.97 11.52 12.36 10.54 12.37M10.54 12.37C10.82 12.38 11.11 12.4 11.39 12.44C12.54 12.61 13.6 13.11 14.47 13.88M17.25 14.62V16.88M17.25 16.88V19.12M17.25 16.88H19.5M17.25 16.88H15' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' stroke='%235B5B6B'/%3E%3C/g%3E%3C/svg%3E") center/contain no-repeat }
.nx-ref, .nx-ref :is(p,span) { font: 300 15px/1.6 var(--nx-text)!important; color: var(--nx-muted-2)!important }
.nx-lp-hero .nx-display, .nx-lp-hero .nx-display :is(h1,h2,h3,h4,h5,h6,p,span,strong) { font-size: 68px!important; line-height: 1.04!important; letter-spacing: -.035em!important }
.nx-lp-hero .nx-lead, .nx-lp-hero .nx-lead :is(p,span) { font-size: 19px!important; color: var(--nx-muted-2)!important }
/* Pills (Bullet List "nx-tags") */
.c-wrapper:has(> .nx-tags) { width: 100%!important }
.nx-tags :is(ul,ol) { display: flex!important; flex-wrap: wrap; gap: 10px; margin: 0!important; padding: 0!important; list-style: none!important }
.nx-tags li { margin: 0!important; padding: 10px 16px!important; list-style: none!important; text-indent: 0!important; background: #fff; border: 1px solid var(--nx-line-soft); border-radius: 999px }
.nx-tags li::marker { content: ""!important }
.nx-tags li::before { content: none!important; display: none!important }
.nx-tags li :is(i,svg,.fa,[class*="icon"]) { display: none!important }
.nx-tags li, .nx-tags li :is(p,span) { margin: 0!important; font: 300 14px/1 var(--nx-text)!important; color: var(--nx-ink)!important }

/* Photo column: the cut-out photo stands on the bottom edge, two card badges float */
.nx-lp-hero .c-column.nx-lp-visual { flex: 1 1 0!important; align-self: stretch!important; min-width: 0 }
.nx-lp-visual > .vertical.inner { position: relative; height: 100%!important }
.nx-lp-visual .c-image { position: absolute!important; inset: 0; margin: 0!important }
.nx-lp-visual .c-image :is(.image-container, .image-container > div, .image-container > div > div, picture) { width: 100%!important; height: 100%!important; max-width: none!important }
.nx-lp-visual .c-image img { position: absolute; left: 48.4%; bottom: -13px; width: auto!important; height: 96.55%!important; max-width: none!important; aspect-ratio: 1; object-fit: contain; transform: translateX(-50%) }
.nx-lp-visual .c-wrapper:has(> .nx-float--a) { right: 0; top: 192px }
.nx-lp-visual .c-wrapper:has(> .nx-float--b) { left: 2px; bottom: 75px }

@media (max-width:1279px) {
  .nx-lp-hero .c-column.nx-hero-copy { flex: 1 1 52%!important }
  .nx-lp-hero .nx-display, .nx-lp-hero .nx-display :is(h1,h2,h3,h4,h5,h6,p,span,strong) { font-size: clamp(48px,5.4vw,68px)!important }
}
@media (max-width:991px) {
  .c-section.nx-lp-hero { --sec-pt: 72px;
    background-size: 550px 550px, 510px 510px, 482px 482px!important;
    background-position: right -219px top 365px, right 29px top -193px, right -353px top 98px!important }
  .nx-lp-hero .nx-mesh i:nth-child(1) { width: 550px; height: 550px; left: calc(100% - 331px); top: 365px }
  .nx-lp-hero .nx-mesh i:nth-child(2) { width: 510px; height: 510px; left: calc(100% - 539px); top: -193px }
  .nx-lp-hero .nx-mesh i:nth-child(3) { width: 482px; height: 482px; left: calc(100% - 129px); top: 98px }
  .nx-lp-hero > .inner { padding-right: var(--nx-gutter)!important }
  .nx-lp-hero .c-row > .inner { flex-direction: column!important; align-items: stretch!important; height: auto; gap: 0 }
  .nx-lp-hero .c-column { flex: none!important; width: 100%!important }
  .nx-lp-hero .nx-display, .nx-lp-hero .nx-display :is(h1,h2,h3,h4,h5,h6,p,span,strong) { font-size: clamp(40px,8vw,64px)!important }
  .nx-lp-visual > .vertical.inner { height: 520px!important; margin-top: 40px!important }
  .nx-lp-visual .c-image img { height: 100%!important; bottom: -8px; left: 50% }
  .nx-lp-visual .c-wrapper:has(> .nx-float--a) { top: 6%; right: 4% }
  .nx-lp-visual .c-wrapper:has(> .nx-float--b) { bottom: 10%; left: 4% }
}
@media (max-width:767px) {
  .c-section.nx-lp-hero { --sec-pt: 48px }
  .nx-lp-hero .nx-hero-copy > .vertical.inner { gap: 24px 12px }
  .nx-lp-hero .nx-hero-copy > .vertical.inner > .c-button { flex: 0 0 100%; width: 100%!important }
  .nx-lp-hero .nx-hero-copy > .vertical.inner > .c-button + .c-button { margin-top: -12px!important }
  .nx-lp-hero .nx-display, .nx-lp-hero .nx-display :is(h1,h2,h3,h4,h5,h6,p,span,strong) { font-size: clamp(38px,10.4vw,52px)!important }
  .nx-lp-hero .nx-lead, .nx-lp-hero .nx-lead :is(p,span) { font-size: 17px!important }
  .nx-lp-visual > .vertical.inner { height: 420px!important; margin-top: 32px!important }
  .nx-lp-visual .c-image img { height: 104%!important }
  .nx-lp-visual .c-wrapper:has(> .nx-float--a) { top: -6px; right: 0 }
  .nx-lp-visual .c-wrapper:has(> .nx-float--b) { bottom: 8%; left: 0 }
}

/* =====================================================================
   EXPLORE YOUR PROGRAMS  · native section "nx-programs" (unchanged, kept as built)
   ===================================================================== */
/* Width: lift GHL's 1170px cap to the 1440px frame with the shared gutter.
   .c-section.nx-programs outranks GHL's mobile rule that zeroes section padding. */
.nx-programs{ padding-top:112px!important; padding-bottom:80px!important }
.c-section.nx-programs > .inner, .nx-programs > .inner{ max-width:1440px!important; width:100%!important; margin:0 auto!important;
  padding-left:max(var(--nx-gutter),env(safe-area-inset-left,0px))!important;
  padding-right:max(var(--nx-gutter),env(safe-area-inset-right,0px))!important;
  display:flex!important; flex-direction:column!important; gap:48px }
.nx-programs > .inner > .c-row{ padding:0!important; margin:0!important; width:100%!important }
.nx-programs > .inner > .c-row > .inner{ padding:0!important }

/* Heading row: title left, lead right, bottom aligned */
.nx-programs > .inner > .c-row:not(:has(.nx-card)) > .inner{ align-items:flex-end!important; gap:30px }
.nx-programs > .inner > .c-row:not(:has(.nx-card)) .c-column{ padding:0!important }
.nx-programs > .inner > .c-row:not(:has(.nx-card)) .vertical.inner{ gap:18px }
.nx-programs .c-column:has(.nx-lead) > .vertical.inner{ align-items:flex-end!important }
.nx-programs .c-column:has(.nx-lead) .c-paragraph{ width:380px!important; max-width:100% }
.nx-programs .text-output{ padding:0!important; margin:0!important }   /* GHL adds 10px above every text element */
.nx-programs .nx-note p{ text-align:center; font-size:14px!important; color:var(--nx-muted)!important }

/* Cards: whichever wrapper holds the six cards becomes the grid */
.nx-programs :has(> .nx-card){ display:grid!important; grid-template-columns:repeat(3,minmax(0,1fr)); gap:28px 24px; width:100% }
.nx-card{ width:auto!important; max-width:none!important; margin:0!important; padding:0!important; background:#fff!important;
  border:1px solid var(--nx-line)!important; border-radius:28px!important; overflow:hidden!important;
  transition:transform .6s var(--nx-ease),box-shadow .6s var(--nx-ease),border-color .4s }
.nx-card:hover{ transform:translateY(-6px); border-color:var(--nx-lav)!important; box-shadow:0 30px 60px -34px rgba(110,90,220,.45) }
.nx-card > .vertical.inner{ display:flex!important; flex-direction:column!important; height:100%; padding:0!important; gap:0 }

/* Card image: square (1:1), cropped to fill */
.nx-card .c-image, .nx-card .image-container, .nx-card .image-container > div, .nx-card picture{
  margin:0!important; padding:0!important; width:100%!important; overflow:hidden; line-height:0 }
img.nx-card-media, .nx-card-media img{ display:block!important; width:100%!important; height:auto!important; aspect-ratio:1/1!important; max-width:none!important;
  object-fit:cover!important; border-radius:0!important; transition:transform 1s var(--nx-ease) }
.nx-card:hover img.nx-card-media, .nx-card:hover .nx-card-media img{ transform:scale(1.04) }

/* Card body: one 28px-padded stack with 24px between blocks */
.nx-card .c-row{ padding:0!important; margin:0!important; flex:1 1 auto; display:flex!important }
.nx-card .c-row > .inner{ padding:0!important; width:100% }
.nx-card .c-row .c-column{ padding:28px!important; width:100%!important; display:flex!important }
.nx-card .c-row .vertical.inner{ display:flex!important; flex-direction:column!important; gap:24px; width:100%; height:100% }
.nx-card .c-row .vertical.inner > *{ margin:0!important }
.nx-card .c-row .vertical.inner > .c-sub-heading:has(.nx-card-formula){ margin-top:-15px!important }   /* 9px under the name */

.nx-card-name :is(h1,h2,h3,h4,p), .nx-card-name span{ font-family:var(--nx-display)!important; font-weight:500!important;
  font-size:25px!important; letter-spacing:-.02em; line-height:1.2!important; color:var(--nx-ink)!important; margin:0!important }
.nx-card-formula :is(h1,h2,h3,h4,p), .nx-card-formula span{ font-family:var(--nx-text)!important; font-weight:300!important;
  font-size:16px!important; line-height:1.2!important; color:var(--nx-muted)!important; margin:0!important }

.nx-card .c-divider, .nx-card .c-divider > div{ padding:0!important; margin:0!important }
.nx-card .c-divider .divider-element{ border-top:1px solid var(--nx-line)!important; border-color:var(--nx-line)!important; width:100%!important }

.nx-label :is(p,span), .nx-label{ font:500 11.5px/1 var(--nx-display)!important; letter-spacing:.09em; text-transform:uppercase; color:var(--nx-muted)!important; margin:0!important }
.nx-card .c-row .vertical.inner > .c-paragraph:has(.nx-label){ margin-bottom:-11px!important }   /* 13px above the list */

/* Bullets: replace GHL's marker with a 6px gradient dot */
.nx-bullets :is(ul,ol) {
    list-style: none!important;
    padding: 0!important;
    margin: 0!important;
    display: flex!important;
    flex-direction: column;
    gap: 13px
}

.nx-bullets li {
    position: relative!important;
    list-style: none!important;
    padding: 0 0 0 18px!important;
    margin: 0!important;
    font-family: var(--nx-text)!important;
    font-weight: 300!important;
    font-size: 16px!important;
    line-height: 1.45!important;
    color: var(--nx-body)!important
}

.nx-bullets li p, .nx-bullets li span {
    margin: 0!important;
    padding: 0!important;
    font: inherit!important;
    color: inherit!important;
    line-height: inherit!important
}

.nx-bullets li::marker {
    content: ""!important
}

.nx-bullets li::before {
    content: ""!important;
    position: absolute!important;
    left: 0!important;
    top: 8.6px!important;
    width: 6px!important;
    height: 6px!important;
    min-width: 0!important;
    margin: 0!important;
    padding: 0!important;
    border: 0!important;
    border-radius: 50%!important;
    background: var(--nx-grad)!important;
    font-size: 0!important;
    line-height: 0!important;
    transform: none!important
}

.nx-bullets li :is(i,svg) {
    display: none!important
}

/* Native GHL button: tag the Button element nx-gbtn (+ nx-gbtn--block).
   The class lands on the <button>/<a> itself; the wrapper form is covered too. */
.nx-card .c-button {
    margin-top: auto!important;
    width: 100%
}

.nx-programs :is(button,a).nx-gbtn, .nx-programs .nx-gbtn :is(button,a) {
    display: flex!important;
    align-items: center;
    justify-content: center;
    gap: 24px;
    height: 50px!important;
    padding: 0 24px!important;
    border-radius: 999px!important;
    border: 1px solid var(--nx-line-soft)!important;
    background: var(--nx-ink)!important;
    color: #fff!important;
    box-shadow: none;
    font-family: var(--nx-display)!important;
    font-weight: 500!important;
    font-size: 15px!important;
    line-height: 1!important;
    text-decoration: none!important;
    position: relative;
    box-sizing: border-box!important;
    max-width: 100%;
    transition: box-shadow .4s var(--nx-ease)
}

.nx-programs :is(button,a).nx-gbtn *, .nx-programs .nx-gbtn :is(button,a) * {
    font: inherit!important;
    color: inherit!important;
    text-decoration: none!important;
    margin: 0!important;
    padding: 0!important
}

.nx-programs :is(button,a).nx-gbtn .main-heading-group {
    display: inline-flex!important;
    align-items: center;
    gap: 0
}

.nx-programs :is(button,a).nx-gbtn :is(.button-icon-start,.button-icon-end):empty {
    display: none!important
}

.nx-programs :is(button,a).nx-gbtn::after, .nx-programs .nx-gbtn :is(button,a)::after {
    content: ""!important;
    display: block;
    width: 12px;
    height: 12px;
    flex: none;
    background: currentColor;
    -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' fill='none' stroke='%23000' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M.9 .9h10v10M.9 10.9l10-10'/%3E%3C/svg%3E") center/contain no-repeat;
    mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' fill='none' stroke='%23000' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M.9 .9h10v10M.9 10.9l10-10'/%3E%3C/svg%3E") center/contain no-repeat;
    transition: transform .45s var(--nx-ease)
}

.nx-programs :is(button,a).nx-gbtn:hover::after, .nx-programs .nx-gbtn :is(button,a):hover::after {
    transform: rotate(45deg)
}

.nx-programs :is(button,a).nx-gbtn:hover, .nx-programs .nx-gbtn :is(button,a):hover {
    box-shadow: 0 14px 30px -12px rgba(10,10,12,.55)!important
}

.nx-programs :is(button,a).nx-gbtn:focus-visible {
    outline: 2px solid #8e8cf8!important;
    outline-offset: 3px
}

.nx-programs :is(button,a).nx-gbtn--block, .nx-gbtn--block :is(button,a) {
    width: 100%!important
}

@media (max-width:991px) {
    .nx-programs :has(> .nx-card) {
        grid-template-columns: repeat(2,minmax(0,1fr))
    }

    .nx-programs > .inner > .c-row:not(:has(.nx-card)) > .inner {
        flex-direction: column!important;
        align-items: flex-start!important;
        gap: 20px
    }

    .nx-programs .c-column:has(.nx-lead) > .vertical.inner {
        align-items: flex-start!important
    }

    .nx-programs > .inner > .c-row:not(:has(.nx-card)) .c-column {
        width: 100%!important
    }
}

@media (max-width:767px) {
    .nx-programs {
        padding-top: 80px!important;
        padding-bottom: 64px!important
    }

    .nx-programs > .inner {
        gap: 36px
    }

    .nx-programs :has(> .nx-card) {
        grid-template-columns: 1fr;
        gap: 20px
    }

    .nx-card .c-row .c-column {
        padding: 24px!important
    }

    .nx-card-name :is(h1,h2,h3,h4,p), .nx-card-name span {
        font-size: 24px!important
    }
}

@media (prefers-reduced-motion:reduce) {
    .nx-card, img.nx-card-media {
        transition: none!important;
        animation: none!important
    }
}


/* =====================================================================
   STANDARDS STRIP  · section "nx-sec nx-lp nx-lp-standards"
   One row, 4 columns "nx-standard nx-ico-lp-…", each holding one Paragraph.
   ===================================================================== */
.c-section.nx-lp-standards { --sec-pt: 32px; --sec-pb: 32px; border-top: 1px solid var(--nx-line)!important; border-bottom: 1px solid var(--nx-line)!important }
.nx-lp-standards .c-row > .inner { display: grid!important; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 0 }
.nx-lp-standards .c-row > .inner > .c-column { width: auto!important; min-width: 0 }
.nx-sec .c-column.nx-standard > .vertical.inner { flex-direction: row!important; align-items: center!important; justify-content: center!important; gap: 14px }
.nx-standard > .vertical.inner::before { content: ""; width: 32px; height: 32px; flex: none; background: var(--ico) center/contain no-repeat }
.nx-standard > .vertical.inner > .c-wrapper { width: auto!important; min-width: 0 }
.nx-standard .text-output, .nx-standard .text-output :is(h1,h2,h3,h4,h5,h6,p,span,strong) { font: 500 16px/1.25 var(--nx-display)!important; color: var(--nx-ink)!important }
@media (max-width:991px) {
  .nx-lp-standards .c-row > .inner { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 24px 16px }
  .nx-sec .c-column.nx-standard > .vertical.inner { justify-content: flex-start!important }
}
@media (max-width:767px) {
  .c-section.nx-lp-standards { --sec-pt: 28px; --sec-pb: 28px }
  .nx-sec .c-column.nx-standard > .vertical.inner { gap: 10px }
  .nx-standard > .vertical.inner::before { width: 28px; height: 28px }
  .nx-standard .text-output, .nx-standard .text-output :is(h1,h2,h3,h4,h5,h6,p,span,strong) { font-size: 14px!important }
}

/* =====================================================================
   LICENSED SUPPORT  · section "nx-sec nx-duo nx-lp nx-lp-support"
   Row: column "nx-media" (photo + card badge) + column "nx-copy".
   The hero's "Have Questions?" button (#lp-support) glides here.
   ===================================================================== */
.c-section.nx-lp-support { --sec-pt: 112px; --sec-pb: 112px }
.nx-lp-support .c-row > .inner { gap: 72px!important; align-items: center!important }
.nx-lp-support .c-column.nx-media { flex: 0 0 624px!important; height: 510px }
.nx-lp-support .nx-float.nx-float--card { padding: 18px!important; gap: 14px; border: 0 }
.nx-lp-support .nx-float.nx-float--card.nx-float--title, .nx-lp-support .nx-float.nx-float--card.nx-float--title p { color: #000!important }
.nx-lp-support .nx-copy > .vertical.inner { gap: 24px }
.nx-lp-support .nx-copy > .vertical.inner > .c-wrapper { margin-top: 0!important }
.nx-lp-support .nx-h2, .nx-lp-support .nx-h2 :is(h1,h2,h3,h4,h5,h6,p,span,strong) { font-size: 50px!important }
/* "Detailed instructions…" (Paragraph "nx-guide nx-ico-lp-guide") */
.nx-guide { display: flex!important; align-items: center; gap: 14px }
.nx-guide::before { content: ""; width: 32px; height: 32px; flex: none; background: var(--ico, url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cpath d='M16 11V25M16 11C16 9.94 15.58 8.92 14.83 8.17C14.08 7.42 13.06 7 12 7H7C6.73 7 6.48 7.11 6.29 7.29C6.11 7.48 6 7.73 6 8V21C6 21.27 6.11 21.52 6.29 21.71C6.48 21.89 6.73 22 7 22H13C13.8 22 14.56 22.32 15.12 22.88C15.68 23.44 16 24.2 16 25M16 11C16 9.94 16.42 8.92 17.17 8.17C17.92 7.42 18.94 7 20 7H25C25.27 7 25.52 7.11 25.71 7.29C25.89 7.48 26 7.73 26 8V21C26 21.27 25.89 21.52 25.71 21.71C25.52 21.89 25.27 22 25 22H19C18.2 22 17.44 22.32 16.88 22.88C16.32 23.44 16 24.2 16 25' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' stroke='%2316141F'/%3E%3C/g%3E%3C/svg%3E")) center/contain no-repeat }
.nx-guide, .nx-guide :is(p,span) { font: 300 16px/1.6 var(--nx-text)!important; color: var(--nx-body)!important }
@media (max-width:1279px) {
  .nx-lp-support .c-row > .inner { gap: 48px!important }
  .nx-lp-support .c-column.nx-media { flex-basis: 48%!important }
  .nx-lp-support .nx-h2, .nx-lp-support .nx-h2 :is(h1,h2,h3,h4,h5,h6,p,span,strong) { font-size: clamp(34px,3.9vw,50px)!important }
}
@media (max-width:991px) {
  .nx-lp-support .c-row > .inner { flex-direction: column!important; align-items: stretch!important; gap: 40px!important }
  .nx-lp-support .c-column.nx-media { flex: none!important; width: 100%!important; height: clamp(360px,60vw,510px); aspect-ratio: auto }
}
@media (max-width:767px) {
  .c-section.nx-lp-support { --sec-pt: 80px; --sec-pb: 80px }
  .nx-lp-support .nx-h2, .nx-lp-support .nx-h2 :is(h1,h2,h3,h4,h5,h6,p,span,strong) { font-size: clamp(32px,8.6vw,40px)!important }
  .nx-lp-support .c-column.nx-media { height: 360px; aspect-ratio: auto }
  .nx-lp-support .nx-media .c-wrapper:has(> .nx-float) { left: 12px; right: 12px; bottom: 12px }
  .nx-lp-support .nx-float.nx-float--card, .nx-lp-support .nx-float.nx-float--card p { white-space: normal }
}

/* =====================================================================
   REVIEWS  · section "nx-sec nx-lp nx-lp-reviews"
   Row 1: column "nx-reviews-title" (eyebrow + headline) + column "nx-reviews-aside" (note)
   Row 2 (row class "nx-quotes"): 3 columns "nx-quote" (quote + name).
   Desktop: 3 cards. Tablet and phone: a swipe row.
   ===================================================================== */
.c-section.nx-lp-reviews { --sec-pt: 0px; --sec-pb: 112px; --row-gap: 40px }
.nx-lp-reviews .c-row:has(.nx-reviews-title) > .inner { justify-content: space-between!important; align-items: flex-end!important; gap: 30px }
.nx-lp-reviews .c-column.nx-reviews-title { flex: 0 1 820px!important }
.nx-reviews-title > .vertical.inner { gap: 18px }
.nx-lp-reviews .c-column.nx-reviews-aside { flex: 0 0 305px!important }
.nx-reviews-note, .nx-reviews-note :is(p,span) { font: 300 14px/1.6 var(--nx-text)!important; color: var(--nx-muted)!important }
.nx-lp-reviews .c-row.nx-quotes > .inner { display: grid!important; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 24px }
.nx-lp-reviews .c-row.nx-quotes > .inner > .c-column { width: auto!important; min-width: 0 }
.nx-sec .c-column.nx-quote { min-height: 540px; padding: 30px!important; background: var(--nx-tint)!important; border-radius: 20px }
.nx-quote > .vertical.inner { gap: 18px }
.nx-quote > .vertical.inner::before { content: "\201C"; display: block; height: 51px; flex: none; font: 400 64px/.8 var(--nx-display);
  background: var(--nx-grad); -webkit-background-clip: text; background-clip: text; color: transparent; -webkit-text-fill-color: transparent }
.nx-quote .c-wrapper:has(> .nx-quote-text) { flex: 1 1 auto }
.nx-quote-text, .nx-quote-text :is(p,span) { font: 300 16px/1.65 var(--nx-text)!important; color: var(--nx-body)!important }
.nx-quote-name { padding-top: 18px!important; border-top: 1px solid var(--nx-line) }
.nx-quote-name, .nx-quote-name :is(h1,h2,h3,h4,h5,h6,p,span) { font: 500 15px/1.2 var(--nx-display)!important; color: var(--nx-ink)!important }
@media (max-width:991px) {
  .nx-lp-reviews .c-row:has(.nx-reviews-title) > .inner { flex-direction: column!important; align-items: flex-start!important; gap: 20px }
  .nx-lp-reviews .c-row:has(.nx-reviews-title) .c-column { flex: none!important; width: 100%!important; max-width: 820px }
  .nx-lp-reviews .c-row.nx-quotes > .inner { grid-template-columns: none; grid-auto-flow: column; grid-auto-columns: min(420px,82%);
    overflow-x: auto; scroll-snap-type: x mandatory; scroll-padding-inline: var(--nx-gutter); overscroll-behavior-x: contain; scrollbar-width: none;
    width: auto!important; margin: 0 calc(var(--nx-gutter) * -1)!important; padding: 0 var(--nx-gutter) 8px!important }
  .nx-lp-reviews .c-row.nx-quotes > .inner::-webkit-scrollbar { display: none }
  .nx-sec .c-column.nx-quote { min-height: 0; scroll-snap-align: start }
  .nx-quote .c-wrapper:has(> .nx-quote-text) { flex: none }
  .nx-quote .c-wrapper:has(> .nx-quote-name) { margin-top: auto!important }
}
@media (max-width:767px) {
  .c-section.nx-lp-reviews { --sec-pb: 80px }
  .nx-sec .c-column.nx-quote { padding: 26px!important }
}

/* =====================================================================
   WHAT TO EXPECT  · section "nx-sec nx-lp nx-lp-steps"
   Row 1: column "nx-head" · Row 2: 3 columns "nx-step nx-ico-lp-…" (number, title, text).
   Uses the shared step card (it lights up 01 → 02 → 03), at the LP's size.
   ===================================================================== */
.c-section.nx-lp-steps { --sec-pt: 100px; --sec-pb: 100px; --row-gap: 44px; background-image: var(--nx-wash)!important }
.nx-lp-steps .c-row:has(.nx-step) > .inner { display: grid!important; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 22px }
.nx-lp-steps .c-row:has(.nx-step) > .inner > .c-column { width: auto!important; min-width: 0 }
.nx-lp-steps .c-column.nx-step { min-height: 310px; padding: 32px!important; border-radius: 20px }
.nx-lp-steps .nx-step > .vertical.inner { gap: 24px }
.nx-lp-steps .nx-step > .vertical.inner::before { width: 32px; height: 32px; margin-bottom: 0; border-radius: 0; background: var(--ico) center/contain no-repeat }
.nx-lp-steps .nx-step .c-wrapper:has(> .nx-step-num) { top: 42px; right: 32px }
.nx-lp-steps .nx-step-num, .nx-lp-steps .nx-step-num :is(p,span) { font: 500 13px/1 var(--nx-display)!important; letter-spacing: 0!important; opacity: 1 }
.nx-lp-steps .nx-step-title, .nx-lp-steps .nx-step-title :is(h1,h2,h3,h4,h5,h6,p,span) { font: 500 26px/1.1 var(--nx-display)!important; letter-spacing: -.02em!important }
.nx-lp-steps .nx-step .nx-body, .nx-lp-steps .nx-step .nx-body :is(p,span) { color: var(--nx-muted)!important }
.nx-lp-steps .nx-step.is-on { border-color: var(--nx-lav); box-shadow: 0 30px 60px -34px rgba(110,90,220,.45) }
@media (max-width:991px) {
  .nx-lp-steps .c-row:has(.nx-step) > .inner { grid-template-columns: minmax(0,1fr) }
  .nx-lp-steps .c-column.nx-step { min-height: 0 }
}
@media (max-width:767px) {
  .c-section.nx-lp-steps { --sec-pt: 80px; --sec-pb: 80px }
  .nx-lp-steps .c-column.nx-step { padding: 26px!important }
  .nx-lp-steps .nx-step > .vertical.inner { gap: 24px }
  .nx-lp-steps .nx-step > .vertical.inner::before { width: 32px; height: 32px; margin-bottom: 0; border-radius: 0; background: var(--ico) center/contain no-repeat }
  .nx-lp-steps .nx-step .c-wrapper:has(> .nx-step-num) { top: 36px; right: 26px }
  .nx-lp-steps .nx-step-num, .nx-lp-steps .nx-step-num :is(p,span) { font-family: var(--nx-display)!important; font-weight: 500!important }
  .nx-lp-steps .nx-step-title, .nx-lp-steps .nx-step-title :is(h1,h2,h3,h4,h5,h6,p,span) { font-size: 24px!important; line-height: 1.1!important; letter-spacing: -.02em!important }
}

/* =====================================================================
   RESPONSIBLE RESEARCH  · section "nx-sec nx-lp nx-lp-research"
   One column "nx-pcard": Image (fills the card) + eyebrow + headline + text.
   Uses the shared program card (opens out on scroll, spotlight), at the LP's size.
   ===================================================================== */
.c-section.nx-lp-research { --sec-pt: 112px; --sec-pb: 112px }
.nx-lp-research .c-column.nx-pcard { height: auto; min-height: 530px; padding: 48px!important; border-radius: 34px; background: var(--nx-dark)!important }
.nx-lp-research .nx-pcard > .vertical.inner { justify-content: center!important; gap: 22px }
.nx-lp-research .nx-pcard > .vertical.inner > .c-wrapper:not(.c-image) { max-width: 513px }
.nx-lp-research .nx-pcard .c-image { top: -10%; bottom: -10%; height: auto }
.nx-lp-research .nx-pcard .c-image img { object-position: 50% 50% }
.nx-lp-research .nx-pcard::after { content: none }
.nx-lp-research .nx-pcard .nx-eyebrow, .nx-lp-research .nx-pcard .nx-eyebrow :is(h1,h2,h3,h4,h5,h6,p,span) { color: var(--nx-on-dark)!important }
.nx-lp-research .nx-pcard-title, .nx-lp-research .nx-pcard-title :is(h1,h2,h3,h4,h5,h6,p,span) { font: 500 37px/1.18 var(--nx-display)!important; letter-spacing: -.02em!important; color: #fff!important; text-wrap: balance }
.nx-pcard-text, .nx-pcard-text :is(p,span) { font: 300 16px/1.7 var(--nx-text)!important; color: var(--nx-on-dark)!important }
@media (max-width:991px) {
  .nx-lp-research .c-column.nx-pcard { min-height: 640px; padding: 32px!important }
  .nx-lp-research .nx-pcard > .vertical.inner { justify-content: flex-end!important; gap: 22px }
  .nx-lp-research .nx-pcard .c-image { top: -8%; bottom: auto; height: 72% }
  .nx-lp-research .nx-pcard .c-image img { object-position: 72% 50% }
  .nx-lp-research .nx-pcard::after { content: ""; background: linear-gradient(0deg,var(--nx-dark) 38%,rgba(7,7,15,.6) 62%,rgba(7,7,15,0) 82%) }
}
@media (max-width:767px) {
  .c-section.nx-lp-research { --sec-pt: 64px; --sec-pb: 64px }
  .nx-lp-research .c-column.nx-pcard { min-height: 600px; padding: 24px!important; border-radius: 28px }
  .nx-lp-research .nx-pcard > .vertical.inner { gap: 22px }
  .nx-lp-research .nx-pcard .c-image { height: 72% }
  .nx-lp-research .nx-pcard .c-image img { object-position: 72% 50% }
  .nx-lp-research .nx-pcard::after { background: linear-gradient(0deg,var(--nx-dark) 38%,rgba(7,7,15,.6) 62%,rgba(7,7,15,0) 82%) }
  .nx-lp-research .nx-pcard-title, .nx-lp-research .nx-pcard-title :is(h1,h2,h3,h4,h5,h6,p,span) { font-size: 28px!important }
  .nx-pcard-text, .nx-pcard-text :is(p,span) { font-size: 15.5px!important }
}
