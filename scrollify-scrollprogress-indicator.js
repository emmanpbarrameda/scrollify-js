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

window.addEventListener('scroll', function () {
    const progressBar = document.querySelector('.scrollify_scroll_progress');
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = `${scrolled}%`;
});