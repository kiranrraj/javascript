const btn1_ctn = document.querySelector(".btn1_container");
const btn2_ctn = document.querySelector(".btn2_container");
const one = document.querySelector(".btn1_container .fas");
const two = document.querySelector(".btn2_container .fas");
const card = document.querySelector(".card");
const front_side = document.querySelector(".front_side");
const block = document.querySelector(".clock_block");
const btn = document.querySelector(".btn");
const timezone = document.querySelector("#timezone");
let count = 1;
createDiv(0);

// Dark Mode
btn1_ctn.addEventListener("click", () => {
  one.classList.toggle("fa-circle");
  one.classList.toggle("fa-moon");
  one.classList.toggle("active1");
  btn1_ctn.classList.toggle("changeBg");
  block.classList.toggle('darkMode');
});
// Dark Mode -- ends


// Analogue Clock Flip
btn2_ctn.addEventListener("click", () => {
  two.classList.toggle("active1");
  btn2_ctn.classList.toggle("changeBg");
  card.classList.toggle('flip_side');
});
// Analogue Clock Flip --ends


// Analogue Clock -- Starts
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
    
    hr_hand.style.transform = `rotate(${hr_rotate}deg)`;
    min_hand.style.transform = `rotate(${min_rotate}deg)`;
    sec_hand.style.transform = `rotate(${sec_rotate}deg)`;
}, 1000)

// Analogue Clock -- Ends


btn.addEventListener('click', ()=>{

  if(timezone.value){

    let local_offset = new Date().getTimezoneOffset() * 60;
    let current_offset = +timezone.value * 60 * 60;
    let offset = current_offset + local_offset;
    console.log(current_offset, local_offset);
  
    if(count<4){
      count++;
      createDiv(offset);
    }
  
    if (count != 0){
      const sub_block = document.getElementsByClassName("sub_block")[0];
      front_side.style.display = 'grid';
      front_side.style.gridTemplateColumns = 'repeat(2,1fr)';
      if(count>2){
        front_side.style.gridTemplateRows = 'repeat(2,1fr)';
  
      }
    }
  }

})

function createDiv(current_offset){

  const timeElem = document.createElement('div')
  timeElem.className = `section1 s${count}`;
  timeElem.textContent = update(current_offset);
  timeElem.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;


  setInterval(()=>{
    timeElem.textContent = update(current_offset);
  },1000);

  front_side.append(timeElem);
}


function update(offset) {
  let x1 = new Date();
  let s1 = x1.setSeconds(x1.getSeconds() + offset);
  return new Date(s1).toLocaleTimeString();
}
