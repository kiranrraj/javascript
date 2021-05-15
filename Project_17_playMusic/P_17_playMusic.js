const keys = document.querySelectorAll('.key');
const audio = document.querySelectorAll('audio');
// let audio_files = document.querySelectorAll('audio');

function addAnimation(key){
    keys.forEach((key)=>{
        key.classList.remove('active')
    })

    key.classList.add('active');
    key.addEventListener('transitionend', ()=>{
        key.classList.remove('active');
    })
}

function playAudio(audio_file, key){
    if(audio_file){
        audio.forEach((file)=>{
            file.pause();
            file.currentTime = 0;
        })
        audio_file.play();
        addAnimation(key);
    }
}

window.addEventListener("keydown", (e)=>{
    let key_pressed = e.key.toLowerCase();
    let audio_file = document.querySelector(`audio[data-keypress="${key_pressed}"]`);
    let key = document.querySelector(`div[data-keypress="${key_pressed}"]`);
    playAudio(audio_file, key);
})
