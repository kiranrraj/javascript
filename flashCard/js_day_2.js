const add_btn = document.querySelector('.main__btn');
const qus_card = document.querySelector('.card__form');
const qus_close = document.querySelector('.form__close-btn');
const save = document.querySelector('.save');
const qus = document.querySelector('#qus');
const ans = document.querySelector('#ans');
const card_display = document.querySelector('.card__display');
const toggle_btn = document.querySelector('.display__toggle-btn');
const display_qus =document.querySelector('.display__qus');
const display_ans =document.querySelector('.display__ans');
const btn_del = document.querySelector('.btn-del');
const btn_edit = document.querySelector('.btn_edit');

add_btn.addEventListener('click', ()=>{
    // console.log('clicked')
    qus_card.style.display="block"
})

qus_close.addEventListener('click', ()=>{
    // console.log("Close button");
    qus_card.style.display="none"
})

save.addEventListener('click', ()=>{
    if (qus.value.trim() != "" || ans.value.trim() != ""){
        // console.log(qus.value, ans.value);
        show_qus(qus.value, ans.value)
        card_display.style.display="block"
        qus.value="";
        ans.value=""
    }
    
})

function show_qus(qval, aval){
    display_qus.textContent = qval;
    display_ans.textContent = aval;
    // console.log(display_qus.textContent , display_ans.textContent);
}

    
toggle_btn.addEventListener('click', ()=>{
    display_ans.classList.toggle('toggle-btn');
    // console.log("working", display_ans)
});

btn_del.addEventListener('click', ()=>{
    card_display.style.display="none";
})