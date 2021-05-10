const text = document.querySelector('.typeWriter');
const cursor = document.querySelector('.blink');
const text_arr = ["Web Developer", "Web Designer", "Content Creator"];
let i=0, j=0;
let word = [];
let deleting;
let finished;
let limit = 0
let interval

function mainLoop(){
    text.textContent = word.join("");
    
    if(i < text_arr.length){

        if(!deleting && j <= text_arr[i].length){
            word.push(text_arr[i][j]);
            j++;
        }


        if(deleting && j <= text_arr[i].length){
            word.pop();
            j--;
            finished = true;
        }

        // If you add this if before the pop if block then the last element 
        // will be skipped as the last element is immediately removed by the pop operation.
        if(j == text_arr[i].length){
            deleting = true;
        }

        if(finished && j==0){
            i++;
            deleting = false;
        }

        if( i == text_arr.length){
            i = 0;
            limit++;
        }
    }
}

interval = setInterval(()=>{
    mainLoop();
}, 300)



