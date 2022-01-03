let mainText, num, char;
let statusText = document.querySelector('.status');
let padLeft = document.querySelector('.pad--left');
let padRight = document.querySelector('.pad--right');
const btn = document.querySelector('.btn');
const btnLeft = document.querySelector('.btn--left');
const btnRight = document.querySelector('.btn--right');

function reset(){
    statusText.textContent = "";
    document.querySelector('.mainText').value = "";
    document.querySelector('.num').value = "";
    document.querySelector('.char').value = "";
}

function checkInputs(){
    mainText = document.querySelector('.mainText');
    num = document.querySelector('.num');
    char = document.querySelector('.char');
    if(mainText.value == "" || num.value =="" || char.value == ""){
        statusText.textContent = "Please enter all details";
        return;
    }

    if(num.value < 2){
        statusText.textContent = "Length should be greater than 1";
        return;
    }
}

btn.addEventListener('click', ()=>{
    reset();
});

btnLeft.addEventListener('click', ()=>{
    checkInputs();
    result = mainText.value.padStart(parseInt(num.value), char.value);
    if(result != "") {
        padLeft.textContent = result;
        return;
    }
});

btnRight.addEventListener('click', ()=>{
    checkInputs();
    result = mainText.value.padEnd(parseInt(num.value), char.value);
    if(result != "") {
        padRight.textContent = result;
        return;
    }
});