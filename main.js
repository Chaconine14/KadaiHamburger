const sideMenu = document.querySelector('.l-sideMenu');
const menuBtn = document.querySelector('.c-menuBtnSPTB');
const closeIcon = document.querySelector('.js-closeIcon');
const menuText = document.querySelector('.js-menuText');

menuBtn.addEventListener('click', () => {
    if (sideMenu.classList.contains("is-close")) {
        sideMenu.classList.remove("is-close");
        sideMenu.classList.add("is-open");
        menuText.style.display = 'none';
        closeIcon.style.display = 'inline-block'; // spanなのでこれ
    } else {
        sideMenu.classList.remove("is-open");
        sideMenu.classList.add("is-close");
        menuText.style.display = 'inline';
        closeIcon.style.display = 'none';
    }
});
