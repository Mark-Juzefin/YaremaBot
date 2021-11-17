import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class BotService implements OnModuleInit {
  onModuleInit() {
    this.botMessage();
  }

  botMessage() {
    process.env.NTBA_FIX_319 = '1';
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const TelegramBot = require('node-telegram-bot-api');

    const token = '2121172922:AAFBlYR7crrhP67H6mTu5-22Sp2JondxMQs';

    const bot = new TelegramBot(token, { polling: true });

    const answerCallbacks = {};

    bot.on('message', function (message) {
      console.log(`req: ${message.text}`);
      const callback = answerCallbacks[message.chat.id];
      if (callback) {
        delete answerCallbacks[message.chat.id];
        return callback(message);
      }
    });

    bot.onText(/add a friend/, function (message, match) {
      bot.sendMessage(message.chat.id, 'What is his name?').then(function () {
        answerCallbacks[message.chat.id] = function (answer) {
          const name = answer.text;
          bot
            .sendMessage(message.chat.id, 'what is his age?')
            .then(function () {
              answerCallbacks[message.chat.id] = function (answer) {
                const age = answer.text;
                bot
                  .sendMessage(message.chat.id, 'what phone does he have? ')
                  .then(function () {
                    answerCallbacks[message.chat.id] = function (answer) {
                      const phone = answer.text;
                      bot.sendMessage(
                        message.chat.id,
                        `${name} ${age} ${phone}  saved!`,
                      );
                    };
                  });
              };
            });
        };
      });
    });
  }
}
