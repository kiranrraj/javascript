
function updateProgress(){

    let pBar = document.querySelector(".progressBar--bar");
    let percentage = document.querySelector(".percentage");
    let barWidth = 0;
    let intervalVariable = setInterval(progress, 10);

    function progress(){
        if(barWidth>= 100){
            clearInterval(intervalVariable);
        } else{
            barWidth++;
            pBar.style.width = `${barWidth}%`;
            percentage.textContent = `${barWidth}%`;
        }
    }
}

document.querySelector('.para').addEventListener('click', updateProgress);