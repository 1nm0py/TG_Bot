const TelegramBot = require('node-telegram-bot-api');
const { start } = require('repl');
const port = process.env.PORT || 1080;

const token = '7209232715:AAGWIFS4Ho2bWA5sm9fh7Ooe8ftcpE3a1KM';

const bot = new TelegramBot(token);

// 


bot.on('message', (msg) => {
    const chatId = msg.chat.id
    console.log(msg.chat.first_name + " " + msg.chat.last_name);
    if (msg.text === "/start") {
        bot.sendMessage(chatId, "Assalomu alaykum " + msg.chat.first_name + " " + msg.chat.last_name + " 😇!!! 1nm0py ni botiga xushkelibsiz!!! ")
    } else if (msg.text === "/help") {
        bot.sendMessage(chatId, "Assalomu alaykum. Qanday yordam bera olaman??? ")
    }
    else {
        bot.sendMessage(chatId, "Assalomu alaykum. Xato ma'lumot!!! ")
    }
});

// server.listen(port);