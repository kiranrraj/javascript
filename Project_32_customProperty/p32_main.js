let root = document.documentElement;
let element = document.querySelector('.progressBar--wrapper');

document.addEventListener('mousemove', (e)=>{
    // console.log(element.offsetLeft)
    root.style.setProperty('--value', `${e.clientX - 483}px` );
})