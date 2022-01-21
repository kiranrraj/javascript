var a = document.getElementsByTagName('a')[0];
var p = document.getElementsByClassName('colorCode')[0];


function randomNumer(){
    var val = Math.round(Math.random()*255 + 1);
    return val;
}

function hexColor(){
    var r = randomNumer();
    var g = randomNumer();
    var b = randomNumer();
    // console.log(r,g,b);
    var hexVal = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    // console.log(hexVal)
    p.textContent = `Current Color Code is ${hexVal}`
    return hexVal;
}

a.onclick = () => {
    document.body.style.backgroundColor = hexColor();
    // console.log(document.body.style.backgroundColor);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
  
  