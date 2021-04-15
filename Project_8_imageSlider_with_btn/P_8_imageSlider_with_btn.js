const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = document.querySelectorAll('.img');
let counter = 0;

next.addEventListener('click', ()=>{
    changeInCounter();
    changeImage()
})

prev.addEventListener('click', ()=>{
    changeDecCounter();
    changeImage();
})

function changeInCounter(){
    if (counter >= 4) {
        counter = -1
    }
    counter++;
    console.log(counter);
}

function changeDecCounter(){
    if (counter <= 0) {
        counter = 5
    }
    counter--;
    console.log(counter);
}


function changeImage(){
    images.forEach((elem) => {
        elem.style.transform = `translate(-${counter * 100}%`;
    })
}