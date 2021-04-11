const circles = document.querySelectorAll('.circle');
const bar = document.getElementsByClassName('bar')[0];
const prev = document.getElementsByClassName('btn1')[0];
const next = document.getElementsByClassName('btn2')[0];
let count = 1;

disableBtn(count);

next.addEventListener("click",() => {
    updateCount("plus");
});

prev.addEventListener("click",() => {
    updateCount("minus");
});

function updateCount(type){
    if (type == "minus"){

        if (count > 1){
            count--;
            circles[count].classList.remove('active');
        } else{
            count = 1;
        }

    } else if (type == "plus"){

        if (count < circles.length || count ==1){
            circles[count].classList.add('active');
            count++;
        } else{
            count = circles.length
        }
    }
    update(count);
    disableBtn(count);
    return count;
}


function update(count){
    count = count -1;
    let total = circles.length
    bar.style.width = `${(count/(total-1)) * 100}%`; 
}


function disableBtn(count){
    if (count == 1){
        prev.disabled = true;    
    } else if(count == 5){
        next.disabled = true;
    } else{
        next.disabled = false
        prev.disabled = false;
    }
}