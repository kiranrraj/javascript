const socket = io();
const form = document.querySelector('.bottom--form');
const messageWindow = document.querySelector('.window--right');

const {userName, chatRoomName} = Qs.parse(location.search, {ignoreQueryPrefix: true});
console.log(userName, chatRoomName);

socket.emit('joinRoom', {userName, chatRoomName});

socket.on('message', message =>{
    outputMessage(message);
    console.log(message);
});


form.addEventListener('submit', (e)=>{
    e.preventDefault();

    messageWindow.scrollTop = messageWindow.scrollHeight;
    // Get user input from form
    let msg = e.target.elements['form--msg'].value;
    msg = msg.trim();

    if(msg !== ""){
        // Emit message to the server
        socket.emit('chatMessage', msg);
    }

    // To reset the input field
    e.target.elements['form--msg'].value = "";

});

const outputMessage = (msg) =>{
    const messageWrapper = document.createElement('div');
    messageWrapper.classList.add('chatMessage');
    messageWrapper.innerHTML =`
    <p class="chatMessage--msg">${msg.chatText}</p>
    <p class="chatMessage--name">${msg.userName}</p>
    <p class="chatMessage--time">${msg.time}</p>
    `;
    messageWindow.appendChild(messageWrapper);
}
