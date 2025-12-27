/* =========================================================
    SCROLLIFY-JS - SCROLL PROGRESS INDICATOR WHEN SCROLLING ON WEB PAGE
    https://github.com/emmanpbarrameda/scrollify-js
    © emmanpbarrameda - https://emmanpbarrameda.github.io/
============================================================ */

/* =========================================================
    ! MARK: 1) SCROLL PROGRESS (TOP BAR)
============================================================ */

(() => {
    const SELECTOR = '.scrollify_scroll_progress';
    const DELTA_THRESHOLD = 0.001;

    function init() {
        const progressBar = document.querySelector(SELECTOR);
        if (!progressBar) return;

        const docEl = document.documentElement;

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
            const docHeight = docEl.scrollHeight - window.innerHeight;

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
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(updateProgress);
        }

        window.addEventListener('scroll', onTick, { passive: true });
        window.addEventListener('resize', onTick, { passive: true });
        updateProgress();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init, { once: true });
    } else {
        init();
    }
})();


/* =========================================================
    ! MARK: 2) BACK TO TOP (CIRCULAR PROGRESS)
============================================================ */

(() => {
    const BTN_ID = "scrollify_scroll_progress_backToTop";
    const DELTA_THRESHOLD = 0.001;

    function parseLinearGradientColors(input) {
        if (!input || typeof input !== "string") return null;

        const m = input.match(/linear-gradient\s*\((.*)\)\s*$/i);
        if (!m) return null;

        const parts = m[1].split(",").map((s) => s.trim());
        const maybeDir = parts[0];

        const isDir =
            /^to\s+/i.test(maybeDir) ||
            /-?\d+(\.\d+)?(deg|rad|turn|grad)$/i.test(maybeDir);

        const colorParts = isDir ? parts.slice(1) : parts;

        const colors = colorParts
            .map((p) => p.split(/\s+/)[0])
            .filter(Boolean);

        return colors.length >= 2 ? colors : null;
    }

    function applySvgGradient(svg, id, colors) {
        const ns = "http://www.w3.org/2000/svg";

        let defs = svg.querySelector("defs");
        if (!defs) {
            defs = document.createElementNS(ns, "defs");
            svg.insertBefore(defs, svg.firstChild);
        }

        const existing = defs.querySelector(`#${CSS.escape(id)}`);
        if (existing) existing.remove();

        const grad = document.createElementNS(ns, "linearGradient");
        grad.setAttribute("id", id);
        grad.setAttribute("x1", "0%");
        grad.setAttribute("y1", "0%");
        grad.setAttribute("x2", "100%");
        grad.setAttribute("y2", "0%");

        const n = colors.length;
        for (let i = 0; i < n; i++) {
            const stop = document.createElementNS(ns, "stop");
            stop.setAttribute("offset", `${(i / (n - 1)) * 100}%`);
            stop.setAttribute("stop-color", colors[i]);
            grad.appendChild(stop);
        }

        defs.appendChild(grad);
        return `url(#${id})`;
    }

    function ensureBackToTopMarkup(btn) {
        if (btn.querySelector(".scrollify-btt__ring") && btn.querySelector(".scrollify-btt__icon")) return;

        btn.innerHTML = `
      <span class="scrollify-btt__ring" aria-hidden="true">
        <svg viewBox="0 0 48 48" class="scrollify-btt__svg">
          <circle class="scrollify-btt__track" cx="24" cy="24" r="20"></circle>
          <circle class="scrollify-btt__progress" cx="24" cy="24" r="20"></circle>
        </svg>
      </span>

      <span class="scrollify-btt__icon" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 500 500" class="scrollify-btt__iconSvg">
          <path
            d="m250.00416666666663 211.459375 -91.66666666666667 91.66666666666667c-3.1249999999999996 3.1249999999999996 -6.770833333333333 4.601041666666666 -10.9375 4.427083333333333 -4.166666666666667 -0.17395833333333333 -7.8125 -1.8229166666666665 -10.9375 -4.947916666666666 -3.1249999999999996 -3.1249999999999996 -4.6875 -6.857291666666666 -4.6875 -11.197916666666666 0 -4.340625 1.5624999999999998 -8.072916666666666 4.6875 -11.197916666666666l102.60416666666666 -102.60416666666666c3.1249999999999996 -3.1249999999999996 6.770833333333333 -4.6875 10.9375 -4.6875s7.8125 1.5624999999999998 10.9375 4.6875l103.125 103.125c3.1249999999999996 3.1249999999999996 4.6875 6.770833333333333 4.6875 10.9375s-1.5624999999999998 7.8125 -4.6875 10.9375c-3.1249999999999996 3.1249999999999996 -6.857291666666666 4.6875 -11.197916666666666 4.6875 -4.340625 0 -8.072916666666666 -1.5624999999999998 -11.197916666666666 -4.6875l-91.66666666666667 -91.14583333333333Z"
            stroke-width="10.4167"
          ></path>
        </svg>
      </span>
    `;
    }

    function initBackToTop() {
        const btn = document.getElementById(BTN_ID);
        if (!btn) return;

        const docEl = document.documentElement;

        ensureBackToTopMarkup(btn);

        const track = btn.querySelector(".scrollify-btt__track");
        const progressCircle = btn.querySelector(".scrollify-btt__progress");
        const svg = btn.querySelector(".scrollify-btt__svg");
        if (!track || !progressCircle || !svg) return;

        const showAfter = Number(btn.dataset.show || 300);

        // position
        const position = (btn.dataset.position || "right").toLowerCase();
        btn.classList.remove("scrollify-btt--left", "scrollify-btt--right");
        btn.classList.add(position === "left" ? "scrollify-btt--left" : "scrollify-btt--right");

        // offset
        const offset = Number(btn.dataset.offset || 20);
        btn.style.bottom = `${offset}px`;
        if (position === "left") btn.style.left = `${offset}px`;
        else btn.style.right = `${offset}px`;

        // size
        const size = Number(btn.dataset.size || 44);
        btn.style.width = `${size}px`;
        btn.style.height = `${size}px`;

        // stroke
        const stroke = Number(btn.dataset.stroke || 3);
        track.style.strokeWidth = `${stroke}`;
        progressCircle.style.strokeWidth = `${stroke}`;

        // track color
        const trackColor = btn.dataset.trackColor || "rgba(14,165,233,0.2)";
        track.setAttribute("stroke", trackColor);

        // progress gradient or color
        const progressGradient = btn.dataset.progressGradient;
        const progressColor = btn.dataset.progressColor || "#0ea5e9";

        const colors = parseLinearGradientColors(progressGradient);
        if (colors) {
            const gradId = `scrollifyBttGrad-${Math.random().toString(36).slice(2, 9)}`;
            const strokeValue = applySvgGradient(svg, gradId, colors);
            progressCircle.setAttribute("stroke", strokeValue);
            btn.style.color = colors[0];
        } else {
            progressCircle.setAttribute("stroke", progressColor);
            btn.style.color = progressColor;
        }

        // circle math
        const r = Number(progressCircle.getAttribute("r"));
        const circumference = 2 * Math.PI * r;

        progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
        progressCircle.style.strokeDashoffset = `${circumference}`;

        let ticking = false;
        let lastProgress = -1;

        function setProgress(p01) {
            const p = p01 < 0 ? 0 : p01 > 1 ? 1 : p01;
            if (Math.abs(p - lastProgress) <= DELTA_THRESHOLD) return;

            progressCircle.style.strokeDashoffset = `${circumference * (1 - p)}`;
            lastProgress = p;
        }

        function update() {
            const scrollTop = window.scrollY ?? docEl.scrollTop ?? 0;

            if (scrollTop > showAfter) btn.classList.add("is-visible");
            else btn.classList.remove("is-visible");

            const docHeight = docEl.scrollHeight - window.innerHeight;
            const raw = docHeight > 0 ? (scrollTop / docHeight) : 0;
            const progress = Math.min(1, Math.max(0, raw));

            setProgress(progress);
            ticking = false;
        }

        function onTick() {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(update);
        }

        window.addEventListener("scroll", onTick, { passive: true });
        window.addEventListener("resize", onTick, { passive: true });

        btn.addEventListener("click", () => {
            const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
            window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
        });

        update();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initBackToTop, { once: true });
    } else {
        initBackToTop();
    }
})();