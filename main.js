
// const sideMenu = document.querySelector('.c-sideMenu');
// const menuBtn = document.querySelector('.c-menuBtn');
// const closeIcon = document.querySelector('.c-closeIcon');




// menuBtn.addEventListener('click', () => {

//     if (sideMenu.classList.contains("close")) {

//         sideMenu.classList.remove("close");
//         sideMenu.classList.add("open");
//         closeIcon.style.display = 'inline';
//         menuBtn.textContent = "";



//     } else {

//         sideMenu.classList.remove("open");
//         sideMenu.classList.add("close");
//         menuBtn.textContent = 'Menu';
//         closeIcon.style.display = 'none';

//     }
// });


const sideMenu = document.querySelector('.c-sideMenu');
const menuBtn = document.querySelector('.c-menuBtn');
const closeIcon = document.querySelector('.c-closeIcon');
const menuText = document.querySelector('.c-menuText');

menuBtn.addEventListener('click', () => {
    if (sideMenu.classList.contains("close")) {
        sideMenu.classList.remove("close");
        sideMenu.classList.add("open");
        menuText.style.display = 'none';
        closeIcon.style.display = 'inline-block'; // spanなのでこれ
    } else {
        sideMenu.classList.remove("open");
        sideMenu.classList.add("close");
        menuText.style.display = 'inline';
        closeIcon.style.display = 'none';
    }
});
