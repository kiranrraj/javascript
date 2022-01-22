const container = document.querySelector('.container');
const cookieAccept = document.querySelector('.btn--yes');
const cookieDialogBox = document.querySelector('.cookieRequest');
const closeBtn = document.querySelector('.fa-times-circle');

const displayMsg = (msg, color) => {
    const elem = document.createElement('div');
    elem.classList.add('alert');

    const para = document.createElement('p');
    para.classList.add('alertMsg');

    para.textContent = msg;
    para.style.color = `#${color}`
    elem.appendChild(para);
    container.appendChild(elem);

    setTimeout( () => {
        elem.remove();
    },1500);
};

const setDisplay = (element, value) => {
    element.style.display = `${value}`;
}

const checkCookie = () => {
    if(!document.cookie) return displayMsg("No cookie found.", 'f00');
    let isCookieSet = document.cookie.includes("Name=KiranRajR");
    isCookieSet ? 
       setDisplay(cookieDialogBox, "none") : 
       setDisplay(cookieDialogBox, "block"); 
       console.log(document.cookie);
       return displayMsg("Cookie Not Expired.", '0f0');
};

cookieAccept.addEventListener('click', () => {
    
    if(document.cookie){
        setDisplay(cookieDialogBox, "block");
        return displayMsg("Cookie set.", '0f0');
    } else { 
        document.cookie = `Name=KiranRajR; max-age=${60*60}`;
        setDisplay(cookieDialogBox, "none");
        return displayMsg("Cookie set.", '0f0');
    }
});

closeBtn.addEventListener('click', () => {
    cookieDialogBox.style.display = "none";
});

checkCookie();


    // let cookiesArray = document.cookie.split(';');
    // for(let i=0; i<cookiesArray.length; i++){
    //     let cookieName = cookiesArray[i].split('=')[0].trim();
    //     let cookieValue = cookiesArray[i].split('=')[1].trim();
    //     console.log(`Cookies ${cookieName} = ${cookieValue}`);
    // }