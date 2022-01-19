let playground = document.querySelector('.playground')

const swapElement = (element1, element2) => {
    return new Promise((resolve, reject) => {

        // Swap the elements 
        [element1.style.transform, element2.style.transform] = 
        [element2.style.transform, element1.style.transform];

        // With the help of "requestAnimationFrame" we can call
        // a specified function that updates an animation before 
        // the next repaint
        window.requestAnimationFrame( () => {

            // To add a delay so that we can see the comparing effect
            setTimeout(() => {
                playground.insertBefore(element2, element1);
                resolve();
            }, 500)
        });
    });
}

const generateArray = () => {
	for (let i = 0; i < 20; i++) {

        // Create random values
		let arrayValue = Math.floor(Math.random() * 50) + 1;
        
        // Create a div that represents an element in the array
		let arrayElement = document.createElement("div");

        // Add class to the array
		arrayElement.classList.add("element");

        // Set data attribute with value to the element
        arrayElement.setAttribute("data-value", arrayValue);

        // Set the value as innertext, so the value will be visible
        // to the user.
        arrayElement.textContent = arrayValue;

        // Set height of elements based on the value generated
		arrayElement.style.height = `${(arrayValue * 8) + 20}px`;
        
        // To keep the absolute elements from stacking on top of
        // each other 
        arrayElement.style.transform = `translate(${i * 35}px)`;

        // Add the div element to the array, 
        // here array is the div element with class playground
		playground.appendChild(arrayElement);
	}
}




const BubbleSort = async () => {

    generateArray();

    let elements = document.querySelectorAll(".element");
    let length = elements.length;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            
            // Setting the color of comparing elements 
            elements[j].style.backgroundColor = "#f0f";
            elements[j + 1].style.backgroundColor = "#f0f";
            

            // Getting the value of element to compare
            let elementValue1 = parseInt(elements[j].dataset.value);
            let elementValue2  = parseInt(elements[j+1].dataset.value);
            // console.log(elementValue1 , elementValue2);
                
            // If the first element is greater than the second element
            // make the swap 
            if (elementValue1  > elementValue2 ) {
                await swapElement(elements[j], elements[j + 1]);
                
                // To get the current elements array after comparison
                elements = document.querySelectorAll(".element");
            }
            
            // Reset the colot back after the comparison completed
            elements[j].style.backgroundColor = "#f00";
            elements[j + 1].style.backgroundColor = "#f00";
        }
        // Set the sorted element's color
        elements[elements.length - i - 1].style.backgroundColor = "#0f0";
    }
}



BubbleSort();

