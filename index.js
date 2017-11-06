const { MessengerBot, FileSessionStore } = require('bottender');
const { createServer } = require('bottender/express');

const config = require('./bottender.config.js').messenger;

const bot = new MessengerBot({
  accessToken: config.accessToken,
  appSecret: config.appSecret,
  sessionStore: new FileSessionStore(),
});

bot.onEvent(async context => {
  await context.sendText('Hello World');
});

const server = createServer(bot, {
  verifyToken: config.verifyToken
});

server.listen(5000, () => {
  console.log('server is running on 5000 port...');
});
