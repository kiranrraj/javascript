var a = document.getElementsByTagName('a')[0];
// console.log(a);

function randomNumer(){
    var r = Math.random()*255 + 1;
    var g = Math.random()*255 + 1;
    var b = Math.random()*255 + 1;
    return `rgb(${r},${g},${b})`;
}


a.onclick = () => {
    document.body.style.backgroundColor = randomNumer();
    // console.log(document.body.style.backgroundColor);
}