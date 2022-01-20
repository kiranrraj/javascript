
const cardCreateBtn = document.querySelector('.btn--create');
const createWindow = document.querySelector('.flashCard__create');

const closeBtn = document.querySelector('.flashCard__create--close');

const mainBlock = document.querySelector('.main');

const cardSaveBtn = document.querySelector('.flashCard__create--btn');
const userQuestion = document.querySelector('.flashCard__create--question');
const userAnswer = document.querySelector('.flashCard__create--answer');


cardCreateBtn.addEventListener('click', ()=>{
    createWindow.classList.toggle('flashCard__createShow');
});

closeBtn.addEventListener('click', () => {
    createWindow.classList.remove('flashCard__createShow');
});

const createContent = (type, text, className, parentElem, style="block") => {
    let content = document.createElement(type);
    content.style.display = style;
    content.textContent = text;
    content.classList.add(className);
    parentElem.appendChild(content);
    return content;
}

const createCard = (userQus, userAns) => {
    let flashCard = document.createElement('div');
    flashCard.classList.add('flashCard');

    // let flashCardHeading = document.createElement('h3');
    // flashCardHeading.textContent = "Flash Card";
    // flashCardHeading.classList.add('flashCard--heading');
    // flashCard.appendChild(flashCardHeading);
    createContent("h3", "Flash Card", "flashCard--heading", flashCard);

    // let flashCardQuestion = document.createElement('p');
    // flashCardQuestion.innerText = userQus;
    // flashCardQuestion.classList.add('flashCard--question');
    // flashCard.appendChild(flashCardQuestion);
    createContent("p", userQus, "flashCard--question", flashCard);

    // let flashCardAnswer = document.createElement('p');
    // flashCardAnswer.style.display = 'none';
    // flashCardAnswer.innerText = userAns;
    // flashCardAnswer.classList.add('flashCard--answer');
    // flashCard.appendChild(flashCardAnswer);
    createContent("p", userAns, "flashCard--answer", flashCard, "none");

    // let flashCardBtn = document.createElement('button');
    // flashCardBtn.innerText = "Show Answer";
    // flashCardBtn.classList.add('flashCard--btn');
    // flashCardBtn.onclick = function() {
    //     let answer = document.querySelector('.flashCard--answer');
    //     answer.style.display === "none" ? answer.style.display = "block": 
    //     answer.style.display = "none";
    // }
    // flashCard.appendChild(flashCardBtn);

    const showBtn = createContent("button", "Show Answer", "flashCard--btn", flashCard, "none");
    showBtn.onclick = function() {
        let answer = document.querySelector('.flashCard--answer');
        answer.style.display === "none" ? answer.style.display = "block": 
        answer.style.display = "none";
    };

    mainBlock.appendChild(flashCard);
};

cardSaveBtn.addEventListener('click', () => {
    let qus = userQuestion.value;
    let ans = userAnswer.value;
    createWindow.classList.remove('flashCard__createShow');
    createCard(qus, ans);
});

let qusAndAns = localStorage.getItem('qusAns_local') ? 
                JSON.parse(localStorage.getItem('qusAns_local')) : [];

const qusAndAnsObj = () => {
    let obj = {
        "question" : userQuestion.value,
        "answer" : userAnswer.value
    }
}   

qusAndAns.push(obj);
localStorage.setItem('qusAns_local', JSON.stringify(qusAndAns));

const deleteCards = () => {
    localStorage.clear();
    mainBlock.innerHTML = "";
    qusAndAns = [];
}
