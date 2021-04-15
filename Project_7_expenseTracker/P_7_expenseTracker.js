let balance = 0, income = 0, expense = 0, inputAmt, inputType, inputName;
let transactionAmt = [];
let transactionName = [];

const show = document.getElementById('show');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.fas');
const list = document.querySelector('.history__list');

const balanceDisp = document.getElementById('balAmt');
const incomeDisp = document.getElementById('inAmt');
const expenseDisp = document.getElementById('exAmt');
const msg = document.querySelector('.msgPara');

updateDisplay();
createTransaction();
list.style.display = "none";

icon.addEventListener('click', () => {
    if(show.checked == true) {
        console.log(window.getComputedStyle(list).display);
        list.style.display = "block";
    }else {
        list.style.display = "none";
    }
})

btn.addEventListener('click', () => {
    getData();
    calculateAmounts(inputType, inputAmt);
    updateDisplay();
});

function calculateAmounts(type, inAmt) {
    console.log(type, inAmt);
    if (inAmt != NaN || inAmt != 0) {
        if (type == "expense") {
            expense += inAmt;
        } else if (type == "income") {
            income += inAmt;
        }
    }
    balance = income - expense;
    setLocalStorage();
}

function getData() {
    inputType = document.getElementById('selectType').value;
    inputName = document.getElementById('nameTrans').value;
    inputAmt = document.getElementById('amtTrans').value;
    inputAmt = parseFloat(inputAmt);
    lastTransactions(transactionName,inputName, "localStorageTname");
    lastTransactions(transactionAmt,inputAmt, "localStorageTamt");
    createTransaction();
}

function updateDisplay() {
    getLocalStorage();
    balanceDisp.textContent = `${balance}$`;
    expenseDisp.textContent = `${expense}$`;
    incomeDisp.textContent = `${income}$`;
}

function setLocalStorage() {
    localStorage.setItem('balance', balance);
    localStorage.setItem('expense', expense);
    localStorage.setItem('income', income);
}

function getLocalStorage() {
    balance = Number(localStorage.getItem('balance'));
    expense = Number(localStorage.getItem('expense'));
    income = Number(localStorage.getItem('income'));
}

function lastTransactions(arr, name, localStorageName){
    if (arr.length <5){
        arr.push(name);
    }else {
        arr = JSON.parse(localStorage.getItem(localStorageName));
        arr.shift();
        arr.push(name);
    }
    localStorage.setItem(localStorageName, JSON.stringify(arr));
}

function createTransaction(){
    let arrName = getLocalSValues("localStorageTname");
    let arrAmt = getLocalSValues("localStorageTamt");
    list.innerHTML = "";
    if (arrName != undefined){
        for (let count = 0; count<arrName.length && count < 5; count++){
            let listItem = document.createElement("li");
            listItem.innerHTML = `<span>${arrName[count]}</span><span>${arrAmt[count]}$</span>`;
            list.append(listItem);
        } 
    } 
}

function getLocalSValues(lsName){
    let arr1 = JSON.parse(localStorage.getItem(lsName));
    return arr1
}
