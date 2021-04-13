const show = document.getElementById('show');
const icon = document.getElementsByClassName('fas')[0];
const list = document.getElementsByClassName('history__list')[0];

icon.addEventListener('click', ()=>{
    console.log(show.checked);
})