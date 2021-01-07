
const text_1 = document.getElementsByClassName('inner__text')[0];
const inner_div = document.getElementsByClassName('inner')[0];
let load = 0;


const interval = setInterval(blurring, 30);
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

function blurring(){
    load++;

    if(load > 99){
        clearInterval(interval);
    }

    text_1.innerText = `${load}%`;
    text_1.style.opacity = scale(load, 0, 100, 1, 0);
    inner_div.style.filter=`blur(${scale(load, 0, 100, 30, 0)}px)`;
    document.documentElement.style.setProperty('--width', `${scale(load, 0, 100, 0, 100)}%`)

}