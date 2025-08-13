const pageNum = document.querySelectorAll('.p-page-num__btn');

// 取得した各要素にループでイベントリスナーを追加
for (const btn of pageNum) {
    btn.addEventListener('mouseover', () => {
        btn.classList.add("is-mouseover");
    });

    btn.addEventListener('mouseleave', () => {
        btn.classList.remove("is-mouseover");
    });
}



const cardBtn = document.querySelectorAll('.p-archive__card-area__btn');

for (const btn of cardBtn) {
    btn.addEventListener('mouseover', () => {
        btn.classList.add("is-mouseover");
    });

    btn.addEventListener('mouseleave', () => {
        btn.classList.remove("is-mouseover");
    });
}
