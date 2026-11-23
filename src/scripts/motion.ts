const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
document.addEventListener('keydown', () => document.documentElement.classList.add('keyboard-input'));
document.addEventListener('pointerdown', () => document.documentElement.classList.remove('keyboard-input'));

// No hidden pre-state: if JS, observer or animation fails, all content stays visible.
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      if (reduced.matches || document.documentElement.classList.contains('keyboard-input')) return;
      entry.target.animate([{ transform: 'translateY(12px)' }, { transform: 'translateY(0)' }], { duration: 520, easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)' });
    });
  }, { threshold: .15 });
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach(element => observer.observe(element));
  reduced.addEventListener('change', () => { if (reduced.matches) document.getAnimations().forEach(animation => animation.finish()); });
}
