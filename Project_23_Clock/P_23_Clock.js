const btn1_ctn = document.querySelector(".btn1_container");
const one = document.querySelector(".btn1_container .fas");
const block = document.querySelector(".clock_block");
console.log(block)


btn1_ctn.addEventListener("click", () => {
  one.classList.toggle("fa-circle");
  one.classList.toggle("fa-moon");
  one.classList.toggle("active1");
  btn1_ctn.classList.toggle("changeBg");
  block.classList.toggle('darkMode');
});


const btn2_ctn = document.querySelector(".btn2_container");
const two = document.querySelector(".btn2_container .fas");
btn2_ctn.addEventListener("click", () => {
  two.classList.toggle("active1");
  btn2_ctn.classList.toggle("changeBg");
});

