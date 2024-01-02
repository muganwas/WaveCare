(function (win, doc) {
    win.onload = () => {
        const five_star = document.getElementsByClassName('5-star');
        const four_star = document.getElementsByClassName('4-star');
        const slides = document.getElementsByClassName('slide');
        const prev = document.getElementById('nav-left');
        const next = document.getElementById('nav-right');

        Array.from(five_star).forEach(s => {
            for (let i = 0; i < 5; i++) {
                const star = doc.createElement('span');
                star.classList.add('star');
                s.appendChild(star);
            }
        });
        Array.from(four_star).forEach(s => {
            for (let j = 0; j < 4; j++) {
                const star = doc.createElement('span');
                star.classList.add('star');
                s.append(star);
            }
        });

        prev.addEventListener('click', (e) => {
            e.preventDefault();
            Array.from(slides).forEach((s, i) => {
                const cur = Array.from(slides)[i]
                const pre = Array.from(slides)[i - 1];
                if (i > 0 && s.classList.contains('active') && pre) {
                    cur.classList.remove('active');
                    pre.classList.add('active');
                }
            });
        });
        next.addEventListener('click', (e) => {
            e.preventDefault();
            Array.from(slides).forEach((s, i) => {
                const cur = Array.from(slides)[i]
                const nex = Array.from(slides)[i + 1];
                if (i < Array.from(slides).length && s.classList.contains('active') && nex) {
                    cur.classList.remove('active');
                    nex.classList.add('active');
                }
            });
        });
    }

})(window, document);