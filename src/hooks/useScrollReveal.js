import { useEffect, useRef } from 'react';

/**
 * useScrollReveal
 * Lightweight IntersectionObserver hook for continuous scroll-reveal animations.
 * Adds 'is-revealed' class when element enters viewport (scroll down or up),
 * and resets it when element leaves viewport so animation re-triggers.
 *
 * @param {Object} options
 * @param {number}  options.threshold - 0.0 to 1.0, fraction of element visible to trigger (default 0.08)
 * @param {string}  options.rootMargin - CSS margin applied to root viewport (default '0px 0px -30px 0px')
 * @param {boolean} options.once - Set to false for continuous animations on every scroll (default false)
 * @returns {React.RefObject} ref - Attach to the DOM element you want to observe
 */
export function useScrollReveal({
  threshold = 0.08,
  rootMargin = '0px 0px -30px 0px',
  once = false
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect system reduced-motion preference
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      el.classList.add('is-revealed');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove('is-revealed');
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [threshold, rootMargin, once]);

  return ref;
}

/**
 * useScrollRevealGroup
 * Observes multiple child elements inside a container, staggering their reveal.
 * Automatically handles dynamic additions (filters, load more) via MutationObserver.
 * Triggers continuously on scroll down and scroll up.
 *
 * @param {string} childSelector - CSS selector for children to observe inside the container
 * @param {Object} options - Same as useScrollReveal options
 * @returns {React.RefObject} containerRef - Attach to the wrapper element
 */
export function useScrollRevealGroup(childSelector = '.reveal-on-scroll', {
  threshold = 0.06,
  rootMargin = '0px 0px -25px 0px',
  once = false
} = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove('is-revealed');
          }
        });
      },
      { threshold, rootMargin }
    );

    const observeChildren = () => {
      const children = Array.from(container.querySelectorAll(childSelector));
      children.forEach((el) => {
        if (mq.matches) {
          el.classList.add('is-revealed');
        } else {
          observer.observe(el);
        }
      });
    };

    observeChildren();

    // Watch for DOM changes like category filter clicks or load more
    const mutationObserver = new MutationObserver(() => {
      observeChildren();
    });

    mutationObserver.observe(container, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [childSelector, threshold, rootMargin, once]);

  return containerRef;
}
