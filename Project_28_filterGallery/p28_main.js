
const buttons = document.querySelectorAll('.btn');
const images = document.querySelectorAll('.img');
addShow('All');

buttons.forEach(elem => {
    elem.addEventListener('click', (e) => {
        removeActive();
        e.target.classList.add('active');
        addShow(e.target.dataset.type);
    })
});

function removeActive(){
    buttons.forEach(elem =>{
        elem.classList.remove('active');
    })
}

function removeClass() {
    images.forEach(img => {
        img.classList.remove('show');
    })
}

function addShow(cls){
    removeClass();
    images.forEach(elem => {
        if(elem.classList.contains(cls)) {
            console.log(elem.classList.contains(cls));
             elem.classList.add('show');
        } else if(cls == "All"){
            elem.classList.add('show');
        }
    })
}
