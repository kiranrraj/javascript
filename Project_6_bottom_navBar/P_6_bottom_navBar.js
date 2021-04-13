const items = document.querySelectorAll('.item');
const blocks = document.querySelectorAll('.block')
let page = "";

items.forEach((item)=>{
    item.addEventListener('click', ()=>{
        const id = item.dataset.id;
        page = document.querySelector(`#${id}`);
        removeClass(blocks);
        page.classList.add('show')
    })
})

function removeClass(list){
    list.forEach(elem=>{
        elem.classList.remove('show');
    })
}

