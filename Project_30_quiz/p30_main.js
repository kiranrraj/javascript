const qusAns = [
    {
        question: "Brass gets discoloured in air because of the presence of which of the following gases in air?",
        answers: ["Oxygen", "Hydrogen sulphide", "Carbon dioxide", "Nitrogen"],
        correct: 2
    },
    {
        question: "Gandhi Peace Prize for the year 2000 was awarded to the former President of South Africa along with",
        answers: ["Sathish Dawan", "C. Subramanian", "	Grameen Bank of Bangladesh", "WHO"],
        correct: 3
    },
    {
        question: "The lead character in the film 'The Bandit Queen' has been played by",
        answers: ["Seema Biswas", "Rupa Ganguly", "Pratiba Sinha", "Shabama Azmi"],
        correct: 1
    },
    {
        question: "Sometimes computers and cache registers in a foodmart are connected to a UPS system. What does UPS mean?",
        answers: ["United Parcel Service", "Uniform Product Support", "Under Paneling Storage", "Uninterruptable Power Supply"],
        correct: 4
    },
    {
        question: "Which of the following is a non metal that remains liquid at room temperature?",
        answers: ["Phosphorous", "Bromine", "Chlorine", "Helium"],
        correct: 2
    },
    {
        question: "Which country, which made its debut in the Norwich Union League in 2003, signed Rahul Dravid as their overseas player?",
        answers: ["Scotland", "Holland", "Ireland", "Wales"],
        correct: 1
    },
    {
        question: "Which of the following is used as a moderator in nuclear reactor?",
        answers: ["Thorium", "Radium", "Ordinary water", "Graphite"],
        correct: 4
    },
    {
        question: "The great Victoria Desert is located in",
        answers: ["Canada", "West Africa", "Australia", "North America"],
        correct: 3
    },
    {
        question: "Who said 'I therefore, want freedom immediately, this very night, before dawn, if it can be had'?",
        answers: ["Jawaharlal Nehru", "Rajendra Prasad", "Nelson Mandela", "Mahatma Gandhi"],
        correct: 4
    },
    {
        question: "Who is the first Indian woman to win an Asian Games gold in 400m run?",
        answers: ["M.L.Valsamma", "P.T.Usha", "Kamaljit Sandhu", "K.Malleshwari"],
        correct: 3
    },
    {
        question: "The famous book 'Anna Karenina' written by ?",
        answers: ["Leo Tolstoy", "Lewis Carroll", "Victor Hugo", "Boris Pasternak"],
        correct: 1
    },
    {
        question: "The prestigious Ramon Magsaysay Award was conferred was conferred upon Ms. Kiran Bedi for her excellent contribution to which of the following fields?",
        answers: ["Literature", "Community Welfare", "Government Service", "Journalism"],
        correct: 3
    },
    {
        question: "Nuclear sizes are expressed in a unit named",
        answers: ["Fermi", "Amstrong", "Newton", "Tesla"],
        correct: 1
    },
    {
        question: "The words 'Satyameva Jayate' inscribed below the base plate of the emblem of India are taken from",
        answers: ["Rigveda", "Satpath Brahmana","Ramayana", "Mundak Upanishad"],
        correct: 4
    },
    {
        question: "National Institute of Nutrition is located in which of the following place?",
        answers: ["Bangalore", "Kerala", "Gandhinagar", "Hyderabad"],
        correct: 4
    }
];

let currentQuestionCount = 0, correctAnswerCount = 0, correctAnswerArray=[];
const questionPara = document.querySelector('.quizCard--question');
const markIndex = document.querySelector('.mark');
const labels = document.querySelectorAll('.label')
const answersRadio = document.querySelectorAll('.ans')
const questionIndex = document.querySelector('.questionIndex');
const prevBtn = document.querySelector('.btn--prev');
const nextBtn = document.querySelector('.btn--next');

const prevButtonStatus = (index, clsName) => {
    if(index <= 0){
        prevBtn.disabled = true;
        prevBtn.classList.add(clsName);
    } else{
       prevBtn.disabled = false;
       prevBtn.classList.remove(clsName);
    }
}

const nextButtonStatus = (index, clsName) => {
   if(index >= 14){
       nextBtn.disabled = true;
       nextBtn.classList.add(clsName);
   } else{
      nextBtn.disabled = false;
      nextBtn.classList.remove(clsName);
   }
}

const btnStatus = (index, clsName) => {
   nextButtonStatus(index, clsName);
   prevButtonStatus(index, clsName);
}

const resetRadio = (radioCount) => {
    for(let i = 0; i < radioCount.length; i++){
        radioCount[i].checked = false;
    }
}

const updateQuestionNumber = (qusNum=0) => {
    questionIndex.textContent = `Questions: ${qusNum + 1} / ${qusAns.length}`;
}

const updateCorrectCount = (correct=0) => {
    markIndex.textContent = `Mark: ${correct} / ${qusAns.length}`;
}

const createQuestion = (qusCount) => {
    questionPara.textContent = qusAns[qusCount].question;
    updateAnswer(qusCount);
};

const updateAnswer = (qusCount) => {
    let answersArray = qusAns[qusCount].answers;
    for(let i = 0; i < answersArray.length; i++){
        labels[i].textContent = answersArray[i];
        answersRadio[i].value = answersArray[i];
    }
    resetRadio(answersRadio);
}

const checkCorrectness = (array, index) => {
    let answersArray = array[index].answers;
    let correctAnswerIndex = array[index].correct - 1;
    for(let i = 0; i < answersRadio.length; i++){
        if(answersRadio[i].checked && answersRadio[i].value === answersArray[correctAnswerIndex]){
            correctAnswerArray.push(answersRadio[i].value);
        }
    }
    correctAnswerCount = [...new Set(correctAnswerArray)].length;
    updateCorrectCount(correctAnswerCount);
}

nextBtn.addEventListener('click', (e) => {
    checkCorrectness(qusAns, currentQuestionCount);
    if(currentQuestionCount < qusAns.length-1){
        currentQuestionCount++;
        btnStatus(currentQuestionCount, "btn--disabled");
    } else {
        btnStatus(currentQuestionCount, "btn--disabled");
    }
    createQuestion(currentQuestionCount);
    updateQuestionNumber(currentQuestionCount);
});

prevBtn.addEventListener('click', (e) => {
    if(currentQuestionCount > 0){
        btnStatus(currentQuestionCount, "btn--disabled");
        currentQuestionCount--;
    } else {
        btnStatus(currentQuestionCount, "btn--disabled"); 
    }
    createQuestion(currentQuestionCount);
    updateQuestionNumber(currentQuestionCount);
});

const initialLoad = () => {
    correctAnswerArray = [];
    correctAnswerCount = 0;
    createQuestion(currentQuestionCount);
    updateQuestionNumber();
    updateCorrectCount();
    btnStatus(currentQuestionCount, "btn--disabled");
}

initialLoad();