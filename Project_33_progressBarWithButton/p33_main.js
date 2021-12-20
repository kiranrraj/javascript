const btns = document.querySelectorAll('.btn');
let value = 0;
let root = document.documentElement;

btns.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        value = e.target.getAttribute('data-value');
        console.log(value, root.style.getPropertyValue('--value') );
        root.style.setProperty('--value', `${value}%`);
    })
})