const moment = require('moment');

const formatChatMsg = (userName, chatText) =>{
    return {
        userName,
        chatText,
        time: moment().format('h::mm a')
    }
}

module.exports = formatChatMsg;