const header = document.querySelector<HTMLElement>('.site-header');
const toggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
const nav = document.querySelector<HTMLElement>('#navegacao');
const mobile = window.matchMedia('(max-width: 850px)');
const isMobile = () => window.innerWidth <= 850;

if (header && toggle && nav) {
  document.documentElement.classList.add('js-menu');
  toggle.hidden = false;
  let mobileMode = isMobile();
  const setOpen = (open: boolean, restoreFocus = false) => {
    // Move focus before hiding its current container (WebKit otherwise blurs it).
    if (restoreFocus) toggle.focus();
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    nav.hidden = isMobile() && !open;
  };
  const syncMode = () => {
    const nextMode = isMobile();
    if (nextMode === mobileMode) return;
    mobileMode = nextMode;
    setOpen(false);
  };
  setOpen(false);
  toggle.addEventListener('click', () => {
    syncMode();
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isMobile() && toggle.getAttribute('aria-expanded') === 'true') {
      event.preventDefault();
      setOpen(false, true);
    }
  });
  document.addEventListener('click', (event) => {
    if (event.target instanceof Node && !header.contains(event.target) && isMobile()) setOpen(false);
  });
  nav.addEventListener('click', (event) => {
    const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href^="#"]') : null;
    if (!link) return;
    setOpen(false);
    document.querySelector<HTMLElement>(link.hash)?.focus({ preventScroll: true });
  });
  nav.addEventListener('focusout', () => {
    requestAnimationFrame(() => {
      if (isMobile() && !header.contains(document.activeElement)) setOpen(false);
    });
  });
  mobile.addEventListener('change', syncMode);
  window.addEventListener('resize', syncMode);
}
