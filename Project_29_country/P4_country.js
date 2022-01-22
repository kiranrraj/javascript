const countyCode = document.querySelector('.code'),
countyName = document.querySelector('.name'),
flag = document.querySelector('.flag'),
capital = document.querySelector('.capital'),
region = document.querySelector('.region'),
currency = document.querySelector('.currency'),
inputText = document.querySelector('.inputText'),
btn = document.querySelector('.btn'),
cards = document.querySelector('.cards'),
msg = document.querySelector('.msg');
 
let Cname, result, url;

function getUserData(){
    Cname = inputText.value.trim();
    if (Cname.trim() == ""){
        msg.textContent = "Please enter a value";
    } else{
        msg.textContent = "";
        createElement([]);
        // API Key not provided
        url = `https://restcountries.eu/rest/v2/name/${Cname}`;
        getData();
    }
}

btn.addEventListener('click', ()=> {
    cards.innerHTML = "";
    getUserData();
});

function createContent(json){
    let content = `<div class="container_top">
<div class="code">${json.alpha3Code}</div>
<div class="name">${json.name}</div>
<img src="${json.flag}" alt="flag" class="flag">
</div>
<div class="container_bottom">
<div class="name">${json.name}</div>
<div class="capital">Capital: <span>${json.capital}</span></div>
<div class="region">Region: <span>${json.region}--${json.subregion}</span></div>
<div class="currency">Currency: <span>${json.currencies[0].name}</span> <br/>Code: <span>${json.currencies[0].code}</span></div>
</div>`
return content
}

function getData(){
    fetch(url)
    .then((res) => res.json())
    .then((json) => createElement(json))
    .catch((e) => msg.textContent = `No country under the name "${Cname}"` )
}

function createElement(arr){
    arr.forEach(element => {
        const card = document.createElement('div');
        card.className = "card";
        card.innerHTML = createContent(element);
        cards.appendChild(card);
    });
}

