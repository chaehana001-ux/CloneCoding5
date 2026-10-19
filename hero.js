(() => {
    const hero = document.querySelector('.choco-hero');
    if (!hero) return;
    const slides = [...hero.querySelectorAll('.choco-hero-slide')];
    const buttons = [...hero.querySelectorAll('.choco-hero-pagination button')];
    let active = 0;
    function selectSlide(index) {
        active = (index + slides.length) % slides.length;
        slides.forEach((slide, i) => { slide.hidden = i !== active; });
        buttons.forEach((button, i) => button.setAttribute('aria-current', String(i === active)));
        hero.querySelector('.choco-hero-counter').textContent = `${String(active + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
    }
    buttons.forEach((button, i) => button.addEventListener('click', () => selectSlide(i)));
    hero.querySelector('[data-hero-prev]').addEventListener('click', () => selectSlide(active - 1));
    hero.querySelector('[data-hero-next]').addEventListener('click', () => selectSlide(active + 1));
    if (matchMedia('(pointer:fine) and (prefers-reduced-motion:no-preference)').matches) {
        hero.addEventListener('pointermove', (event) => {
            const art = slides[active].querySelector('.choco-hero-art');
            const rect = art.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width - .5;
            const y = (event.clientY - rect.top) / rect.height - .5;
            art.style.transform = `perspective(900px) rotateX(${-y * 3}deg) rotateY(${x * 4}deg)`;
        });
        hero.addEventListener('pointerleave', () => {
            slides.forEach((slide) => { slide.querySelector('.choco-hero-art').style.transform = ''; });
        });
    }
})();
