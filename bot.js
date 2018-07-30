/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
           ______     ______     ______   __  __     __     ______
          /\  == \   /\  __ \   /\__  _\ /\ \/ /    /\ \   /\__  _\
          \ \  __<   \ \ \/\ \  \/_/\ \/ \ \  _"-.  \ \ \  \/_/\ \/
           \ \_____\  \ \_____\    \ \_\  \ \_\ \_\  \ \_\    \ \_\
            \/_____/   \/_____/     \/_/   \/_/\/_/   \/_/     \/_/

This is a sample Google Hangouts Chat bot built with Botkit.

# RUN THE BOT :

  Follow the instructions here to set up your Facebook app and page:
    -> https://developers.google.com/hangouts/chat/how-tos/bots-publish

  Run your bot from the command line:
    DEBUG=botkit:*
    PORT=YOUR_APP_PORT \
    GOOGLE_APPLICATION_CREDENTIALS=YOUR_GOOGLE_CREDENTIALS_FILE \
    GOOGLE_VERIFICATION_TOKEN=YOUR_GOOGLE_VERIFICATION_TOKEN \
     node bot.js
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var env = require('node-env-file');
env(__dirname + '/.env');


if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    console.log('Error: Specify a GOOGLE_APPLICATION_CREDENTIALS in environment.');
    process.exit(1);
}

var Botkit = require('botkit');
var debug = require('debug')('botkit:main');

// Create the Botkit controller, which controls all instances of the bot.
var controller = Botkit.googlehangoutsbot({
    endpoint: 'Axjn86rTGRQwisaYFyT0XZyiOCh7rZUPGx1A',
    token: process.env.GOOGLE_VERIFICATION_TOKEN,
    port: process.env.PORT,
    debug: true,
});

var bot = controller.spawn({});

// Set up an Express-powered webserver to expose oauth and webhook endpoints
var webserver = require(__dirname + '/components/express_webserver.js')(controller, bot);

var normalizedPath = require("path").join(__dirname, "skills");
require("fs").readdirSync(normalizedPath).forEach(function(file) {
    require("./skills/" + file)(controller);
});
