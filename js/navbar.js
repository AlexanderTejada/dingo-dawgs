const openIcon = document.querySelector('.icon-menu-open');
const closeIcon = document.querySelector('.icon-menu-close');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

openIcon.addEventListener('click', () => {
    navLinks.classList.add('mobile-active');
    openIcon.style.display = 'none';
    closeIcon.style.display = 'block';
    body.classList.add('no-scroll');
});

closeIcon.addEventListener('click', () => {
    navLinks.classList.remove('mobile-active');
    closeIcon.style.display = 'none';
    openIcon.style.display = 'block';
    body.classList.remove('no-scroll');
});

navLinks.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        navLinks.classList.remove('mobile-active');
        closeIcon.style.display = 'none';
        openIcon.style.display = 'none';
        body.classList.remove('no-scroll');
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 650) {
        navLinks.classList.remove('mobile-active');
        openIcon.style.display = 'none';
        closeIcon.style.display = 'none';
        body.classList.remove('no-scroll');
    } else {
        openIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
});
