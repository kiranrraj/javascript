const bars = document.getElementsByClassName('fa-bars')[0];
const close = document.getElementsByClassName('fa-times')[0];
const topCircle = document.getElementsByClassName('top_circle')[0];
const sideBar = document.getElementsByClassName('sideBar')[0];
const ul = document.querySelector('.sideBar ul');
const content = document.getElementsByClassName('content')[0];


bars.addEventListener('click',()=>{
    sideBar.style.width = "200px";
    sideBar.style.height = "100%";
    topCircle.style.transform = "rotate(270deg)";
    ul.style.opacity = 1;
    content.style.transform = "translateX(200px)"

});

close.addEventListener('click',()=>{
    topCircle.style.transform = "rotate(0deg)";
    sideBar.style.width = "0px";
    sideBar.style.height = "0%";
    ul.style.opacity = 0;
    content.style.transform = "translateX(0px)"

});
