let pswdLength, selectedTypes=[];

const btn = document.querySelector('.btn--generate');
const copyBtn = document.querySelector('.display--copy');
const display = document.querySelector('.display--out');
const message = document.querySelector('.msg');
const length = document.querySelector('#length');
const checkBoxes = document.querySelectorAll('input[type="checkbox"]');

if(display.value === "Password"){
    copyBtn.disabled = true;
}

length.value = 8;

copyBtn.addEventListener('click', ()=>{
    navigator.clipboard.writeText(display.value).then(function() {
        message.textContent = "Copied";
        setTimeout(()=>{
            message.textContent = "";
        }, 1000);
        console.log('Copied Successfully!', );

    }, function(err) {
        console.error(`Could not copy: ${err}`);
    });
        
});

btn.addEventListener('click', () =>{
    pswdLength = parseInt(length.value) || 8;
    selectedTypes=[];
    display.value = "Password";

    for(elem of checkBoxes){
        if(elem.checked){
            selectedTypes.push(elem.name)
        }
    }
    copyBtn.disabled = false;
    generatePassword(pswdLength);
});

// Generators
function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]+=/';
    let value = Math.floor(Math.random() * symbols.length );
    return symbols[value];
}

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()*26) + 97);
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26) + 65);
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10) + 48);
}


const passwordIncludes = {
    symbol: getRandomSymbol,
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber
}

function generatePassword(length){
    let password = "";
    let typeLength = selectedTypes.length;

    if(selectedTypes.length == 0){
        for(let i=0; i<2; i++){
            for (const [key, value] of Object.entries(passwordIncludes)){
                password+=value();
                }
            }
        }else {
            for(let i=0; i<=pswdLength-1; i+=typeLength){
    
                for (const [key, value] of Object.entries(passwordIncludes)){
                    if(selectedTypes.includes(key)){
                        password+=value();
                        console.log(key, value());
                    }
                }
            }
        } 

    display.value = password.substring(0, length)
}