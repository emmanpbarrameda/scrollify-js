/* ==================== SCROLLIFY-JS - SCROLL PROGRESS INDICATOR WHEN SCROLLING ON WEB PAGE ==================== */

/* =================== PAGE LOAD EVENT =================== */
/* 
    This event listener ensures that the progress bar starts with a width of 0 when the page is loaded.
    It is triggered when the page finishes loading.
*/

window.addEventListener('load', function () {
    const progressBar = document.querySelector('.scrollify_scroll_progress');

    /* -------------------------------------
     * Reset the progress bar width to 0 on page load
    ------------------------------------- */
    progressBar.style.width = '0%';
});

/* =================== SCROLL EVENT =================== */
/* 
    This event listener calculates the scroll position on every scroll event.
    It updates the width of the progress bar based on how far the user has scrolled through the page.
*/

window.addEventListener('load', function () {
    const progressBar = document.querySelector('.scrollify_scroll_progress');

    // Read custom data attributes
    const height = progressBar.dataset.height || '4px';
    const background = progressBar.dataset.background || 'linear-gradient(to left, #4E73DF, #4da3ff)';
    const zIndex = progressBar.dataset.zIndex || '999';
    const top = progressBar.dataset.top || '89px';

    // Apply the attributes to the progress bar
    progressBar.style.height = height;
    progressBar.style.background = background;
    progressBar.style.zIndex = zIndex;
    progressBar.style.top = top;

    // Reset the width on page load
    progressBar.style.width = '0%';
});