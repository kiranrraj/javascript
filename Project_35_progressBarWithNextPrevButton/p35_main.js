const previousBtn = document.querySelector('.btn1');
const nextBtn = document.querySelector('.btn2');
const root = document.documentElement;
let value=0; ;

function btnDisabled(){
    if(value<=0) {
        previousBtn.disabled = true;
    } else if(value>=100) {
        nextBtn.disabled = true;
    }else{
        previousBtn.disabled = false;
        nextBtn.disabled = false;
    }
}

btnDisabled();

previousBtn.addEventListener('click', (e) => {
    console.log(value);
    if( value<=0 ){
        return;
    };
    value = value - 10;
    btnDisabled();
    // console.log(value);
    root.style.setProperty('--value', `${value}%`);
});

nextBtn.addEventListener('click', (e) => {
    console.log(value);
    if( value>= 100 ){
        btnDisabled();
        return;
    }
    value = value + 10;
    btnDisabled();
    // console.log(value);
    root.style.setProperty('--value', `${value}%`);
})
