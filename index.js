'use strict';

let util = require('util');
let http = require('http');
let Bot  = require('@kikinteractive/kik');

let messageFilter = require('./messageFilter.js')

let bot = new Bot({

  username: 'clutchman_300',
  apiKey: 'b9f58814-ffec-47f5-9571-085b2194a740',
  baseUrl:'https://9c7e9eb1.ngrok.io'

});

console.log('Bot initiated!')

bot.updateBotConfiguration();

bot.onTextMessage((message) => {
  let input = message
  let output = messageFilter.mFilter(input)

  message.reply(output);

});


let server = http
.createServer(bot.incoming())
.listen(process.env.PORT || 139);
