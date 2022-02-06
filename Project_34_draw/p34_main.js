const colorPalette1 = [ 
    '#540d6e', 
    '#ee4266', 
    '#ffd23f', 
    '#3bceac', 
    '#0ead69', 
    '#e2a0ff',
    '#e8ffb7'
];

const colorPalette2 = [
    '#2d00f7',
    '#6a00f4',
    '#8900f2',
    '#bc00dd',
    '#5a189a',
    '#db00b6',
    '#f20089'
];

const colorPalette3 = [
    '#007f5f',
    '#2b9348',
    '#80b918',
    '#bfd200',
    '#dddf00',
    '#ffff3f',
    '#e9ff70'
];

const colorPalette4 = [
    '#70d6ff',
    '#ff70a6',
    '#ff9770',
    '#ffd670',
    '#e9ff70',
    '#00a896',
    '#6d23b6'
];


const colorPalette5 = [
    '#d72638',
    '#3f88c5',
    '#f49d37',
    '#140f2d',
    '#f22b29',
    '#00f5d4',
    '#9b5de5'
];

const clickBtn = document.querySelector('.btn1');
const clickHover = document.querySelector('.btn2');
const clickClear = document.querySelector('.btn3');
const radioBtns = document.querySelectorAll('.color');
const squares = document.querySelectorAll('board--unit');

const generateRandomNumber = () => {
    return Math.floor( 7 * Math.random() );
}

const getColor = (colorPalette) => {
    let randomNumber = generateRandomNumber();
    return colorPalette[randomNumber];
}

