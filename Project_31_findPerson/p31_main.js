const usersArray = [];
const search = document.querySelector('.search--input');
const userList = document.querySelector('.card--list');

// Function to create individual user card
const createUserElement = (type, className) => {
    const elem = document.createElement(type);
    elem.classList.add(className);
    return elem;
}

// Create user card
const createUserCard = ({name, email, image}) => {
    const wrapper = createUserElement('div', "list--person");
    const imgWrapper = createUserElement('div', "person--image");
    const imgElement = createUserElement('img', "image");
    const dataWrapper = createUserElement('div', "person--data");
    const nameElement = createUserElement('p', "data--name");
    const emailElement = createUserElement('p', "data--email");

    imgElement.src = image;
    nameElement.textContent = name;
    emailElement.textContent = email;

    dataWrapper.appendChild(nameElement);
    dataWrapper.appendChild(emailElement);
    imgWrapper.appendChild(imgElement);
    wrapper.appendChild(imgWrapper);
    wrapper.appendChild(dataWrapper);
    userList.appendChild(wrapper);
}

// Push required details to usersArray
const getRequiredData = (user) =>  {
    let name = `${user.name.first.toLowerCase()} ${user.name.last.toLowerCase()}`;
    let email = user.email.toLowerCase();
    let image = user.picture.thumbnail;
    return {name, email, image};
}

// Push data to the DOM and to the usersArray
const pushData = ({results}) => {
    results.forEach(userData => {
        let requiredUserData = getRequiredData(userData);
        usersArray.push(requiredUserData);
        createUserCard(requiredUserData);
    });
}

// Find user based on search
const findUser = (search, array) =>  {
    search.addEventListener('input', (e) => {
        let searchvalue = e.target.value;
        userList.innerHTML = "";
        array.forEach(user => {
            if(user.name.includes(searchvalue) || user.email.includes(searchvalue)){
                createUserCard(user);
            }
        });
    });
}

// Get data from the API
const getUsers = async () => {
    findUser(search, usersArray);
    const res = await fetch('https://randomuser.me/api?results=50');
    const usersData = await res.json();
    pushData(usersData);
} 

getUsers();


