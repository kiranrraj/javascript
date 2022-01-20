const notifyContainer = document.querySelector('.notifyContainer');
const btn = document.querySelector('.btn');
const userMsg = document.querySelector('.msg');


const getMsg = (msg) => {
    let msgVal = msg.value.trim();
    return msgVal ? msgVal : "No message provided";
}

const notifyElement = () => {

    let notificationMsg = getMsg(userMsg);

    const msgContainer = document.createElement('div');
    msgContainer.classList.add('notify');
    msgContainer.textContent = notificationMsg;
    notifyContainer.appendChild(msgContainer);

    setTimeout(() => {
        msgContainer.remove();
    }, 3000);
}

btn.addEventListener('click', notifyElement)