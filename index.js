const { Telegraf } = require('telegraf');

console.log("BOT_TOKEN is:", process.env.BOT_TOKEN);

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(ctx => ctx.reply('سلام! ربات توی Railway فعاله 🚀'));

bot.launch()
  .then(() => console.log("✅ Bot is running"))
  .catch(console.error);
