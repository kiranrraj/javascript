let time = 0;
let timeInterval, minute=0, seconds=0, milliSeconds=0;
let flag = "stopped";
let start = document.querySelector('.start')
let stop = document.querySelector('.stop')
let reset = document.querySelector('.reset')
let span_minute = document.querySelector('.minute');
let span_seconds = document.querySelector('.seconds');
let span_milli = document.querySelector('.milli');


// Initial state
clearDisp();
disable_btn();


// When start button is clicked
start.addEventListener('click', ()=>{
    timerStart(0);
    disable_btn();
})


// When stop button is clicked
stop.addEventListener('click', ()=>{
    timerStop();
    clearDisp();
    disable_btn();
})


// When reset button is clicked
reset.addEventListener('click', ()=>{
    timerPause();
    disable_btn();
})


// main timer function
function timerStart(val=0){
    flag = "started";
    time = val;
    timeInterval = setInterval(()=>{
        time = time+1;
        display(time);
    }, 10);
}


// stop function, clearing interval
function timerStop(){
    clearInterval(timeInterval);
    flag="stopped";
}


// pause function
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


// display function
function display(time){

    milliSeconds = time%100;
    if (milliSeconds >= 99){
        seconds++;
    } else if(seconds >= 60){
        minute++;
        seconds = 0;
    }else if(minute >=60){
        clearInterval(timeInterval);
        clearDisp();
    }
    span_minute.textContent = `${padZero(minute)}`;
    span_seconds.textContent  =  `${padZero(seconds)}` 
    span_milli.textContent = `${padZero(milliSeconds) }`;
}


// reset function
function clearDisp(){
    span_minute.textContent = `00`;
    span_seconds.textContent  =  `00` 
    span_milli.textContent = `00`;
    milliSeconds=0;
    time=0;
    minute=0;
    seconds=0
}


// padding zero function
function padZero(time){
    if(time < 10){
        time = `0${time}`;
        return time
    }
    return time
}


// button status function
function disable_btn(){
    if(flag=="stopped"){
        start.disabled =false;
        stop.disabled = true;
        reset.disabled = true;
    }else if(flag=="started" || flag=="paused"){
        start.disabled =true;
        stop.disabled = false;
        reset.disabled = false;
    }
    console.log(flag)
}