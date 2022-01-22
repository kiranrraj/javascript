const textArea = document.querySelector('.textArea');

textArea.addEventListener('input', e => {

    let elementHeight = e.target.scrollHeight;
    textArea.style.height = `${elementHeight}px`; 

    if(textArea.value === "" || textArea.value === undefined){
        e.target.style.height = '100px';
    }
}); 
