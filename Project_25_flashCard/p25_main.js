
const container = document.querySelector('.container');
const cardCreateBtn = document.querySelector('.btn--create');
const createWindow = document.querySelector('.flashCard__create');
const closeBtn = document.querySelector('.flashCard__create--close');
const mainBlock = document.querySelector('.main');
const saveBtn = document.querySelector('.flashCard__create--btn');
const userQuestion = document.querySelector('.flashCard__create--question');
const userAnswer = document.querySelector('.flashCard__create--answer');


const checkInput = (userInput) => {
    let data = userInput.trim();
    if(data === "" || data === undefined) return -1
    return data;
}

const createContent = (type, text, className, parentElem, style="block") => {
    let content = document.createElement(type);
    content.textContent = text;
    content.classList.add(className);
    parentElem.appendChild(content);
    content.style.display = style;
    return content;
}

const createCard = (userQus, userAns) => {
    let flashCard = document.createElement('div');
    flashCard.classList.add('flashCard');
    createContent("h3", "Flash Card", "flashCard--heading", flashCard);
    createContent("p", userQus, "flashCard--question", flashCard);
    createContent("p", userAns, "flashCard--answer", flashCard, "none");

    const showBtn = createContent("button", "Show Answer", "flashCard--btn", flashCard);
    showBtn.onclick = function(e) {
        let answer = flashCard.querySelector('.flashCard--answer');
        console.log(answer);
        answer.style.display === "none" ? answer.style.display = "block": 
        answer.style.display = "none";
    };

    mainBlock.appendChild(flashCard);
};


const onClickingSaveBtn = () => {
    let qus = checkInput(userQuestion.value);
    let ans = checkInput(userAnswer.value);

    if(qus !== -1 && ans !== -1){
        insertDataIntoLocalStorage(qus, ans);
        loadNowSavedCard();
        createWindow.classList.remove('flashCard__createShow');
    }else {
        let notification = createContent('p', "Enter a valid input", 'notify', container);
        setTimeout(()=>{
            notification.remove();
        }, 1500);
    }
    
    userQuestion.value = "";
    userAnswer.value = "";
    
}

const insertDataIntoLocalStorage = (question, answer) => {
    let obj = {
        "question" : question,
        "answer" : answer
    };
    qusAndAns.push(obj);
    localStorage.setItem('flashCardArray', JSON.stringify(qusAndAns));
}   

const readDataFromLocalStorage = () => {
    let objInLocalStorage = JSON.parse(localStorage.getItem('flashCardArray'));
    for(let obj in objInLocalStorage){
        let qusFromLocalStorage = objInLocalStorage[obj].question;
        let ansFromLocalStorage = objInLocalStorage[obj].answer;
        createCard(qusFromLocalStorage, ansFromLocalStorage);
    }
}

const loadNowSavedCard = () => {
    let objInLocalStorage = JSON.parse(localStorage.getItem('flashCardArray'));
    let lastObject = objInLocalStorage[objInLocalStorage.length - 1];
    let qusFromLocalStorage = lastObject.question;
    let ansFromLocalStorage = lastObject.answer;
    createCard(qusFromLocalStorage, ansFromLocalStorage);
}

loadNowSavedCard();

let qusAndAns = localStorage.getItem('flashCardArray') ? 
    JSON.parse(localStorage.getItem('flashCardArray')) : [];

cardCreateBtn.addEventListener('click', ()=>{
    createWindow.classList.toggle('flashCard__createShow');
});

closeBtn.addEventListener('click', () => {
    createWindow.classList.remove('flashCard__createShow');
});

// Load Cards when the DOM is loaded.
document.addEventListener('DOMContentLoaded', readDataFromLocalStorage);

saveBtn.addEventListener('click', onClickingSaveBtn);