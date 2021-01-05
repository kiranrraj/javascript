const slider = document.querySelector('.slider');
const slider_left = document.querySelector('.slider__left');
const slider_right = document.querySelector('.slider__right');
const btn_up = document.querySelector('.button__up');
const btn_down = document.querySelector('.button__down');
const s_length = slider_left.querySelectorAll('div').length;

let index = 0
slider_left.style.top = `-${(s_length - 1) * 100}vh`;
btn_up.addEventListener('click', ()=> moveSlide('up'));
btn_down.addEventListener('click', ()=> moveSlide('down'));

function moveSlide(direction){
    const slide_height = slider.clientHeight;
    if (direction == 'up'){
        index++;
        // console.log("up", slider_left.style.top, index)
        if (index > s_length-1){
            index = 0
            console.log("up", slider_left.style.top, index)
        }
    }else if(direction == 'down'){
        index--;
        // console.log("down", slider_left.style.top, index)
        if(index < 0) {
            index = s_length -1;
        }
            
    }
    //  else if (direction == 'down'){
    //     slider_right.style.transform = `translateY(-${index * slide_height}px)`;
   
    slider_right.style.transform = `translateY(-${index * slide_height}px)`;
    slider_left.style.transform = `translateY(${index * slide_height}px)`;
}
