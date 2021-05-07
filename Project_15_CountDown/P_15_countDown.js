let countDown = 0;
const start = document.querySelector('.start');
const reset = document.querySelector('.reset');
const disp_min = document.querySelector('.disp_minutes');
const disp_sec = document.querySelector('.disp_seconds');

start.addEventListener('click', ()=>{
    let minute_in = parseInt(document.querySelector('#minutes').value) || 0;
    let second_in = parseInt(document.querySelector('#seconds').value) || 0;
    let secondsToadd = (minute_in * 60) + second_in;

    if (secondsToadd != 0) {
        console.log(minute_in, second_in, secondsToadd)
        timer(secondsToadd);
    }
});

reset.addEventListener('click', ()=>{
    document.querySelector('#minutes').value = "00";
    document.querySelector('#seconds').value = "00";
    disp_min.textContent = "00";
    disp_sec.textContent = "00";
    clearInterval(countDown)
})



function timer(sec){
    const startTime = Date.now();
    const endTime = startTime + (sec * 1000);
    display(sec);

    countDown = setInterval(()=>{
        const remainingTime = Math.round((endTime - Date.now())/1000);

        if(remainingTime< 0){
            clearInterval(countDown);
            return;
        }

        display(remainingTime)
    }, 1000)
}

function display(sec){
    const minutes = padZero(Math.floor(sec/60));
    const seconds = padZero( sec % 60);
    disp_min.textContent = minutes;
    disp_sec.textContent = seconds;
    console.log(minutes,seconds)
    
}

function padZero(time){
    if(time < 10){
        time = `0${time}`;
        return time
    }
    return time
}