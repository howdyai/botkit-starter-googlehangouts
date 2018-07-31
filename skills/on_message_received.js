module.exports = (controller) => {
    controller.on('message_received',  (bot, message) => {
        bot.reply(message, `You said '${message.text}'`);
    });
}