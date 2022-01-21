let menu = document.querySelector('.context--menu');
let container = document.querySelector('.container');

document.addEventListener('contextmenu', (e) =>{
    e.preventDefault();

    let menuWidth = menu.offsetWidth,
    menuHeight = menu.offsetHeight,
    mouseX = e.clientX,
    mouseY = e.clientY;

    let windowWidth = window.innerWidth 
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    let windowHeight = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    mouseX = mouseX > (windowWidth - menuWidth) ? 
        (windowWidth - menuWidth) : 
        mouseX;
    
    mouseY = mouseY > (windowHeight - menuHeight) ? 
        (windowHeight - menuHeight) : 
        mouseY;

    menu.style.visibility = "visible";
    menu.style.top = `${window.scrollY + mouseY}px`;
    menu.style.left = `${mouseX}px`;
});
