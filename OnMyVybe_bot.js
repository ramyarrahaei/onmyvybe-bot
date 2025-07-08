require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;

if (!token) {
  console.error("❌ توکن بات داخل فایل .env پیدا نشد");
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, `سلام ${msg.chat.first_name}! 🌟 به ربات خوش اومدی!`);
});

bot.on('message', (msg) => {
  // اگه کاربر پیامی داد که /start نبود
  if (msg.text !== '/start') {
    bot.sendMessage(msg.chat.id, `پیامتو دریافت کردم: ${msg.text}`);
  }
});

console.log("✅ ربات در حال اجراست...");
