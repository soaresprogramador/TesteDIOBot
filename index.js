const TelegramBot = require('node-telegram-bot-api');
//colocar token
const token = '#';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', function(msg){
    const chatId = msg.chat.id;
    console.log(msg.text);
    bot.sendMessage(chatId, '')
});