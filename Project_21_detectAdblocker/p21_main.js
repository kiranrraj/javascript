const classNames = "adsbox ad-space ad-unit ad-zone banner-ads banner_ads textads";
const card = document.querySelector('.card');
const container = document.querySelector('.container');

const disableBtn = document.querySelector('.btn--disable');
const reloadBtn = document.querySelector('.btn--reload');

let createElement = (height) => {
    let adElement = document.createElement("div");
    adElement.className = classNames;
    adElement.style.height = `${height}px`;
    document.body.appendChild(adElement);
    return adElement;
}

let createAd = (classNames) => {

    let elemHeight = createElement(1).offsetHeight;
    
    if(!elemHeight){
        card.style.display = "block";
        console.log("AdBlocker Detected");
        return -1;
    }else{
        card.style.display = "none";
        console.log("No Ad Blocker Detected");
    }
}

const displayMsg = (msg, color) => {
    const elem = document.createElement('div');
    elem.classList.add('alert');

    const para = document.createElement('p');
    para.classList.add('alertMsg');

    para.textContent = msg;
    para.style.color = `#${color}`
    elem.appendChild(para);
    container.appendChild(elem);

    setTimeout( () => {
        elem.remove();
    },1500);
};


reloadBtn.addEventListener('click', () =>{
    location.reload();
});

document.addEventListener('DOMContentLoaded', () => {
    createAd(classNames);
});

disableBtn.addEventListener('click', () => {
    card.style.display = "none";
    setTimeout( () => {
        createAd(classNames);
    }, 5000);
});
