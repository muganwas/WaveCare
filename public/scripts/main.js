(function (win, doc) {
    const hamburger = doc.getElementById('hamburger');
    const links = doc.getElementById('links');
    hamburger.addEventListener('click', (e) => {
        e.preventDefault();
        const style = links.currentStyle || window.getComputedStyle(links, null);
        if (style.display === 'none')
            links.style.display = 'flex';
        else
            links.style.display = 'none';
    });
})(window, document);