const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = document.querySelectorAll('.img');
let counter = 0;
var autoInterval = setInterval(autoSlide, 3000); 

function removeGlitch(){
    clearInterval(autoInterval);
    autoInterval = setInterval(autoSlide, 3000); 
}

next.addEventListener('click', ()=>{
    removeGlitch()
    changeInCounter();
    changeImage()
})

prev.addEventListener('click', ()=>{
    removeGlitch();
    changeDecCounter();
    changeImage();
})

function changeInCounter(){
    if (counter >= 4) {
        counter = -1
    }
    counter++;
}

function changeDecCounter(){
    if (counter <= 0) {
        counter = 5
    }
    counter--;
}


function changeImage(){
    images.forEach((elem) => {
        elem.style.transform = `translate(-${counter * 100}%`;
    })
}

function autoSlide(){
    changeInCounter();
    changeImage();
}

