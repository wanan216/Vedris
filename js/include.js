window._includeReady = (async () => {
    for (const el of document.querySelectorAll('[data-include]')) {
        try {
            const resp = await fetch(el.getAttribute('data-include'));
            el.insertAdjacentHTML('afterend', await resp.text());
            el.remove();
        } catch (e) {
            console.warn('Failed to load:', el.getAttribute('data-include'));
        }
    }
})();
