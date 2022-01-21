const btns = document.querySelector('#btn');
const text = document.querySelector('.text');
let value = btn.value;
let root = document.documentElement;


btn.addEventListener('mousemove', (e) => {
    if(btn.value != value){
        value = btn.value;
        // console.log(value);
        root.style.setProperty('--value', `${value}%`);
        text.textContent = `${value} %`;
    }
})
