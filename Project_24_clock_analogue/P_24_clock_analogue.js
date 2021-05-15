let hr_hand = document.querySelector('.hour');
let min_hand = document.querySelector('.minute');
let sec_hand = document.querySelector('.second');

setInterval(() => {
    const time = new Date();
    let hr = (time.getHours() % 12);
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let hr_rotate = (360 / 12) * hr + 270;
    let min_rotate = (360 / 60) * min + 270;
    let sec_rotate = ((sec / 60) * 360) + 270;
    
    console.log(hr_rotate)
    hr_hand.style.transform = `rotate(${hr_rotate}deg)`;
    min_hand.style.transform = `rotate(${min_rotate}deg)`;
    sec_hand.style.transform = `rotate(${sec_rotate}deg)`;
    console.log(hr_rotate, min_rotate, sec_rotate)
}, 1000)
