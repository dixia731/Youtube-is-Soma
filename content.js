(function() {
    'use strict';
    
    if (!window.location.hostname.includes('youtube.com')) return;

    function injectOverlay() {
        if (document.getElementById("brave-local-intro-overlay")) return;

        const overlay = document.createElement('div');
        overlay.id = "brave-local-intro-overlay";
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.backgroundColor = 'black';
        overlay.style.zIndex = '2147483647';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.transition = 'opacity 0.5s ease';
        overlay.style.opacity = '1';

        const gif = document.createElement('img');
        gif.src = 'https://github.com/dixia731/Youtube-is-Soma/blob/main/soma.gif?raw=true'; 
        gif.style.width = '80%';
        gif.style.height = '80%';
        gif.style.objectFit = 'contain';

        overlay.appendChild(gif);
        (document.head || document.documentElement).appendChild(overlay);

        // Triggers opacity shift at 5.5 seconds
        setTimeout(() => {
            overlay.style.opacity = '0';
        }, 5500);

        // Destroys overlay node layout at 6 seconds
        setTimeout(() => {
            overlay.remove();
        }, 6000);
    }

    if (document.documentElement) {
        injectOverlay();
    } else {
        const observer = new MutationObserver(() => {
            if (document.documentElement) {
                injectOverlay();
                observer.disconnect();
            }
        });
        observer.observe(document, { childList: true, subtree: true });
    }
})();
