const btns = document.querySelectorAll('.btn');
let value = 0, btnNum =0;
let root = document.documentElement;

btns.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        btnNum = e.target.getAttribute('data-value');
        value = btnNum * 150;
        // console.log(value,);
        root.style.setProperty('--value', `${value}px`);
        updateBtn(btnNum);
    });
});

function updateBtn(x){
    btns.forEach(elem => {
        if(elem.getAttribute('data-value') < x){
            elem.classList.add('active');
        }else{
            elem.classList.remove('active');
        }
    })
}
