let time = 0;
let timeInterval, minute=0, seconds=0, milliSeconds=0;
let flag = "stopped";
let para = document.querySelector('.time')
let start = document.querySelector('.start')
let stop = document.querySelector('.stop')
let reset = document.querySelector('.reset')


clearDisp();
start.addEventListener('click', ()=>{
    timerStart(0);
})

stop.addEventListener('click', ()=>{
    timerStop();
    clearDisp();
})

reset.addEventListener('click', ()=>{
    timerPause();
})

function timerStart(val=0){
    flag = "started";
    time = val;
    timeInterval = setInterval(()=>{
        time = time+1;
        display(time);
    }, 10);
}

function timerStop(){
    clearInterval(timeInterval);
}


function timerPause(){
    if(flag == "stopped"){
        clearInterval(timeInterval);
    }else if(flag=="started"){
        timerStop();
        flag = "paused"
   }else if(flag == "paused"){
       timerStart(time+100);
   }

}


function display(time){
    milliSeconds = time%100;
    if (milliSeconds >= 99){
        seconds++;
    } else if(seconds >= 59){
        minute++;
        seconds = 0;
    }else if(minute >= 59){
        clearInterval(timeInterval);
        clearDisp();
    }
    para.textContent = `${padZero(minute)} : ${padZero(seconds)} : ${padZero(milliSeconds) }`;
}


function clearDisp(){
    para.textContent = "00 : 00 : 00";
    milliSeconds=0;
    time=0;
    minute=0;
    seconds=0
}

function padZero(time){
    if(time < 10){
        time = `0${time}`;
        return time
    }
    return time
}