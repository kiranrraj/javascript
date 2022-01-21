const uri = "https://api.quotable.io/random";
const btnRead = document.querySelector('.btn--audio');
const btnCopy = document.querySelector('.btn--copy');
const btnQuote = document.querySelector('.btn--getQuote');
let displayQuote = document.querySelector('.card--quote');
let displayAuthor = document.querySelector('.card--author');
let data

const getQuote = async (uri) => {
    if(!uri) return "URI not found";
    try {
        await fetch(uri)
            .then(res => res.json())
            .then(data => {
                setContent(data);
            });
    } catch (err) {
        console.error(err);
    }
};

const setContent = (obj) => {
    displayQuote.textContent = obj.content;
    displayAuthor.textContent = obj.author;   
}

btnQuote.addEventListener('click', () => {
    getQuote(uri);
});

btnCopy.addEventListener('click', () => {
    copyText(displayQuote);
})

const copyText = (element) => {

    if(navigator.clipboard) {
        navigator.clipboard.writeText(element.textContent.trim());
        btnCopy.textContent = "Copied"
    }

    setTimeout(()=> {
        btnCopy.textContent = "Copy"
    }, 1000);
}