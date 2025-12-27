/* =========================================================
    SCROLLIFY-JS - SCROLL PROGRESS INDICATOR WHEN SCROLLING ON WEB PAGE
    https://github.com/emmanpbarrameda/scrollify-js
    © emmanpbarrameda - https://emmanpbarrameda.github.io/
============================================================ */

/*
    This implementation uses:
    - transform: scaleX() (GPU-friendly)
    - requestAnimationFrame throttling
    - passive listeners
    - progress clamping (0..1)
    - resize handling
    - small-delta update guard
*/

(() => {
    const SELECTOR = '.scrollify_scroll_progress';
    const DELTA_THRESHOLD = 0.001;

    function init() {
        const progressBar = document.querySelector(SELECTOR);
        if (!progressBar) return;

        // Apply custom data attributes (kept from original)
        const height = progressBar.dataset.height || '4px';
        const background = progressBar.dataset.background || 'linear-gradient(to left, #B374F8, #4da3ff)';
        const zIndex = progressBar.dataset.zIndex || '999';
        const top = progressBar.dataset.top || '0px';

        progressBar.style.height = height;
        progressBar.style.background = background;
        progressBar.style.zIndex = zIndex;
        progressBar.style.top = top;

        const barStyle = progressBar.style;

        let ticking = false;
        let lastProgress = -1;

        function updateProgress() {
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;

            if (docHeight <= 0) {
                barStyle.transform = 'scaleX(0)';
                lastProgress = 0;
                ticking = false;
                return;
            }

            const rawProgress = window.scrollY / docHeight;
            const progress = Math.min(1, Math.max(0, rawProgress));

            if (Math.abs(progress - lastProgress) > DELTA_THRESHOLD) {
                barStyle.transform = `scaleX(${progress})`;
                lastProgress = progress;
            }

            ticking = false;
        }

        function onTick() {
            if (!ticking) {
                requestAnimationFrame(updateProgress);
                ticking = true;
            }
        }

        window.addEventListener('scroll', onTick, { passive: true });
        window.addEventListener('resize', onTick, { passive: true });

        // Initialize
        updateProgress();
    }

    window.addEventListener('load', init);
})();
