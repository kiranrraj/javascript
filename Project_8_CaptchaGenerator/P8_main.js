const captchaDisplay = document.querySelector('.captcha--text');
const captchaInput = document.querySelector('.validate--input');

const resetCaptcha = document.querySelector('.captcha--btn');
const checkCaptcha = document.querySelector('.validate--btn');

const msg = document.querySelector('.msg');

let letterArray = [];


const createStringArray = (start, end) => {
    for (let i = parseInt(start); i < parseInt(end); i++){
        letterArray.push(String.fromCharCode(i));
    }
    return letterArray;
}

createStringArray(65, 90);
createStringArray(48, 57);
createStringArray(97, 122);

const createCaptcha = (arr) => {
    let captcha = [];
    for(let i=0; i<6; i++){
        let character = arr[Math.floor(Math.random() * arr.length)]
        captcha.push(character);
    }
    return captcha.join("");
}


const reset = () => {
    let captcha = createCaptcha(letterArray);
    captchaDisplay.textContent = captcha;
    msg.textContent = "";
    captchaInput.value= "";
}

const validateUser = () => {
    
    let userCaptcha = captchaInput.value.trim();
    let generatedCaptcha = captchaDisplay.textContent;

    if(userCaptcha === undefined || userCaptcha === "") {
        msg.textContent = "Please enter the captcha code."
        return;
    }

    if(userCaptcha === generatedCaptcha){
        msg.textContent = "Verified!! You are a human.";
    }else{
        msg.textContent = "Wrong Captcha!! Please enter again.";
    }
}

document.addEventListener('DOMContentLoaded', reset);
resetCaptcha.addEventListener('click', reset);
checkCaptcha.addEventListener('click', validateUser);
console.log(createCaptcha(letterArray));