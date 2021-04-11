const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    card.addEventListener('click', ()=> {
        removeActiveClass()
        card.classList.add('active')
    })
});


function removeActiveClass(){
    cards.forEach(card => {
        card.classList.remove('active')
    })
}