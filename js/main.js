const sideMenu = document.querySelector('.p-side-menu');
const menuBtn = document.querySelector('.c-menu-btn__sptb');
const closeIcon = document.querySelector('.js-icon__close');
const menuText = document.querySelector('.js-menu-text');
const overlay = document.querySelector('.c-container');

menuBtn.addEventListener('click', () => {
    if (sideMenu.classList.contains("is-close")) {
        sideMenu.classList.remove("is-close");
        sideMenu.classList.add("is-open");
        menuText.style.display = 'none';
        closeIcon.style.display = 'inline-block'; // spanなのでこれ

        overlay.classList.add('is-open');
        document.body.classList.add('no-scroll'); // 背景は固定

    } else {
        sideMenu.classList.remove("is-open");
        sideMenu.classList.add("is-close");
        menuText.style.display = 'inline';
        closeIcon.style.display = 'none';

        overlay.classList.remove('is-open');
        document.body.classList.remove('no-scroll');
    }
});


