'use strict';

let util = require('util');
let http = require('http');
let Bot  = require('@kikinteractive/kik');

let bot = new Bot({

  username: 'clutchman_300',
  apiKey: 'b9f58814-ffec-47f5-9571-085b2194a740',
  baseUrl:'https://eb8e0784.ngrok.io'
});

bot.updateBotConfiguration();

bot.onTextMessage((message) => {
  message.reply("Head ass nigga im not about to repeat that shit");
});

let server = http
.createServer(bot.incoming())
.listen(process.env.PORT || 139);
