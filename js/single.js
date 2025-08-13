const singleBtn = document.querySelector('.p-single__btn-area__btn');

singleBtn.addEventListener('mouseover', () => {
    singleBtn.classList.add("is-mouseover");
});

singleBtn.addEventListener('mouseleave', () => {
    singleBtn.classList.remove("is-mouseover");
});