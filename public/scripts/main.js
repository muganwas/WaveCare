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
    /** Nav */
    const prodLink = doc.getElementById('products');
    const aboutLink = doc.getElementById('about');
    const contactLink = doc.getElementById('contact');
    const navLinks = doc.getElementsByClassName('nav-link');
    const loc = win.location.pathname;

    if (loc.includes('Product')) {
        Array.from(navLinks).forEach(l => {
            l.classList.remove('active');
        });
        prodLink.classList.add('active');
    }
    if (loc.includes('About')) {
        Array.from(navLinks).forEach(l => {
            l.classList.remove('active');
        });
        aboutLink.classList.add('active');
    }
    if (loc.includes('Contact')) {
        Array.from(navLinks).forEach(l => {
            l.classList.remove('active');
        });
        contactLink.classList.add('active');
    }

    /** Product Tabs */

    const tabs = doc.getElementsByClassName('tab');
    const sections = doc.getElementsByClassName('section');
    Array.from(tabs).forEach(t => {
        t.addEventListener('click', (e) => {
            e.preventDefault();
            const tId = e.target.id;
            const sectionId = tId + '-sect';
            const currentSection = doc.getElementById(sectionId);
            Array.from(tabs).forEach(t => t.classList.remove('active'));
            t.classList.add('active');
            Array.from(sections).forEach(s => s.classList.remove('active'));
            currentSection.classList.add('active');
        });
    })


})(window, document);