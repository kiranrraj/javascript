let label = document.querySelector('label');
let input = document.querySelector('#msg');
let tags = document.querySelector('.tags');
let list = document.querySelector('.tags__list');
let close = document.querySelector('.tags__icon i');
let btn = document.querySelector('.btn');
let reset = document.querySelector('.reset');
let val = null;

input.addEventListener('focus', ()=>{
    label.classList.add('up');
    tags.classList.add('down');
});

input.addEventListener('keyup', ()=>{
    if(input.value != ""){
        val = input.value.split(",").map((elem) =>{
            if (elem.trim() != ""){
                return `<span>${elem.trim()}</span>`
            }
            
        }).join("\n");
    }
})

btn.addEventListener('click', () =>{
    if(input.val != ""){
        list.innerHTML=val; 
        input.value="";
    }
})

close.addEventListener('click', ()=>{
    resetVal();
})

reset.addEventListener('click', ()=>{
    resetVal();
})


function resetVal(){
    val="";
    input.value="";
    list.innerHTML="";
    label.classList.remove('up');
    tags.classList.remove('down');
}
