const btns = document.querySelectorAll('.btn');
const tooltip = document.querySelector('.tooltip');
let value = 0, btnNum = 0, tooltipLeft = 0;
let root = document.documentElement;

btns.forEach(btn => {

    btn.addEventListener('click', (e)=>{
        btnNum = e.target.getAttribute('data-value');
        value = btnNum * 150;
        root.style.setProperty('--value', `${value}px`);
        // console.log(value,);
        updateBtn(btnNum);
    });

    btn.addEventListener('mouseover', (e)=>{
        tooltipLeft = e.target.offsetLeft;
        console.log(tooltipLeft);
        value = e.target.getAttribute('data-value') * 25;
        root.style.setProperty('--tooltip-left', `${tooltipLeft - 30}px`);
        tooltip.textContent = `${value}%`
    })

});



function updateBtn(x){
    btns.forEach(elem => {

        let dataValue = elem.getAttribute('data-value');
        if( dataValue < x){
            elem.classList.add('active');
            elem.textContent = `${dataValue * 25}%`;
        }else{
            elem.classList.remove('active');
            elem.textContent = "";
        }
    })
}
