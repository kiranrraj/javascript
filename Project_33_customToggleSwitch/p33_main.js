const checkboxes = document.querySelectorAll( '.toggleSwitch--btn' );
const checkboxeLabels = document.querySelectorAll( '.toggleSwitch--label' );
const container = document.querySelector( '.container' );


function reset() {
    container.style.backgroundColor= "#ffffff";
    checkboxeLabels.forEach( label => {
        label.classList.remove( 'btnChecked' )
    });
    checkboxes.forEach( checkbox => {
        checkbox.checked = false;
    })
    
}

function changeBgColor( element ){
    let label = element.nextElementSibling;
    labelColor = window.getComputedStyle( label ).backgroundColor;
    label.classList.add( 'btnChecked' );
    container.style.backgroundColor = labelColor;
}

function main(elements){
    elements.forEach( checkbox => {
        checkbox.addEventListener( 'click', ( e )=>{
            if( e.target.checked ){
                reset();
                e.target.checked = true;
                changeBgColor( e.target );
            } else { 
                reset();
            }
        });
    });
}



main(checkboxes);