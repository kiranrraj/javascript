const colorPalette1 = ['#7400b8', '#5e60ce', '#4ea8de', '#56cfe1', '#72efdd', '#80ffdb', '#480ca8'];
const colorPalette2 = ['#004b23', '#007200', '#008000', '#38b000', '#70e000', '#9ef01a', '#ccff33'];
const colorPalette3 = ['#ff5400', '#ff8500', '#ff9e00', '#00b4d8', '#0077b6', '#023e8a', '#ff6d00'];
const colorPalette4 = ['#70d6ff', '#ff70a6', '#ff9770', '#ffd670', '#e9ff70', '#00a896', '#d72638'];
const colorPalette = [colorPalette1, colorPalette2, colorPalette3, colorPalette4];

const clickBtn = document.querySelector( '.btn1' );
const clickHover = document.querySelector( '.btn2' );
const clickClear = document.querySelector( '.btn3' );
const radioBtns = document.querySelectorAll( '.color' );
const squares = document.querySelectorAll( '.board--unit' );

const generateRandomNumber = () => {
    return Math.floor( Math.random() * 7 );
}

const changeBackgroundColor = (element, color) => {
    element.style.backgroundColor = color;
}

const getColor = (palette) => {
    let index = generateRandomNumber();
    return palette[index];
} 

const applyToElements = ( elements, userFunction, parameters ) => {
    elements.forEach( element => {
        userFunction( element, parameters)
    });
}

const getPalette = (radioBtns) => {
    let palett;
    radioBtns.forEach( radio => {
        if( radio.checked ){
            palett = colorPalette[radio.dataset.val];
        }
    });
    return palett;
}


const activateHover = ( squareCollection ) =>{
    squareCollection.forEach( square => {
        square.addEventListener('mouseover', (e) => {
            let palette = getPalette(radioBtns);
            let color = getColor(palette);
            changeBackgroundColor( e.target, color);
        });
    });
}

clickClear.addEventListener( 'click', () => {
    applyToElements( squares, changeBackgroundColor, '#333' );
});

clickHover.addEventListener( 'click', () => {
    activateHover( squares );  
});


