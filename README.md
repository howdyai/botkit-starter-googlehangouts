# This repo is deprecated!

To get a fresh Botkit starter kit, use the Yeoman generator or [remix a starter kit on Glitch](https://glitch.com/botkit)

```
npm install -g yo generator-botkit
yo botkit
```


# Botkit Starter Kit for Google Hangouts Chat Bots

This repo contains everything you need to get started building a Google Hangouts Chat bot with [Botkit](https://botkit.ai).

Botkit is designed to ease the process of designing and running useful, creative bots that live inside messaging platforms. Bots are applications that can send and receive messages, and in many cases, appear alongside their human counterparts as users.

Some bots talk like people, others silently work in the background, while others present interfaces much like modern mobile applications. Botkit gives developers the necessary tools for building bots of any kind! It provides an easy-to-understand interface for sending and receiving messages so that developers can focus on creating novel applications and experiences instead of dealing with API endpoints.

Our goal with Botkit is to make bot building easy, fun, and accessible to anyone with the desire to create a future filled with talking machines!

### What's Included
* [Botkit core](https://botkit.ai/docs/core.html) - a complete programming system for building conversational software
* [Pre-configured Express.js webserver](https://expressjs.com/) including:
   * A customizable "Install my Bot" homepage
   * Webhook endpoints for communicating with platforms
* Sample skill modules that demonstrate various features of Botkit


## Setup Botkit for Google Hangouts

[Documentation for Botkit's Google Hangouts Adapter](https://botkit.ai/docs/readme-google-hangouts.html);

### Deploy to Glitch

[Remix this project on Glitch](https://glitch.com/~botkit-googlehangouts)

### Deploy Locally

Clone this repository:

`git clone https://github.com/howdyai/botkit-starter-googlehangouts.git`

Install dependencies, including [Botkit](https://github.com/howdyai/botkit):

```
cd botkit-starter-googlehangouts
npm install
```

### Add Google Credentials

Get a google credentials file `GOOGLE_APPLICATION_CREDENTIALS` [as described here](https://developers.google.com/hangouts/chat/how-tos/bots-publish)

Update the `.env` file with your newly acquired tokens.

Launch your bot application by typing:

`GOOGLE_APPLICATION_CREDENTIALS=YOUR_GOOGLE_CREDENTIALS_FILE node bot.js`

You can also specify a verification token `GOOGLE_VERIFICATION_TOKEN` and `PORT` and lunch your bot application by typing :

`PORT=YOUR_APP_PORT GOOGLE_APPLICATION_CREDENTIALS=YOUR_GOOGLE_CREDENTIALS_FILE GOOGLE_VERIFICATION_TOKEN=YOUR_GOOGLE_VERIFICATION_TOKEN node bot.js`

### Configure Webhook URL

By default, your bot will receive messages from Google at `https://<my_url>/hangouts/receive`. You will need to configure your Google Hangouts Bot profile with this URL.

Google Hangouts Chat API requires your application be available at an SSL-enabled endpoint. To expose an endpoint during development, we recommend using [localtunnel.me](http://localtunnel.me) or [ngrok](http://ngrok.io), either of which can be used to temporarily expose your bot to Google Hangouts Chat API. Both Glitch and Heroku deployments will provide this to you automatically.

Once stable and published to the real internet, use nginx or another web server to provide an SSL-powered front end to your bot application.

Now comes the fun part of [making your bot!](https://botkit.ai/docs/)

### Extend This Starter kit

This starter kit is designed to provide developers a robust starting point for building a custom bot. Included in the code are a set of sample bot "skills" that illustrate various aspects of the Botkit SDK features.  Once you are familiar with how Botkit works, you may safely delete all of the files in the `skills/` subfolder.

Developers will build custom features as modules that live in the `skills/` folder. The main bot application will automatically include any files placed there.

A skill module should be in the format:

```
module.exports = function(controller) {

    // add event handlers to controller
    // such as hears handlers that match triggers defined in code
    // or controller.studio.before, validate, and after which tie into triggers
    // defined in the Botkit Studio UI.

}
```


### Customize Storage

By default, the starter kit uses a simple file-system based storage mechanism to record information about the teams and users that interact with the bot. While this is fine for development, or use by a single team, most developers will want to customize the code to use a real database system.

There are [Botkit plugins for all the major database systems](https://botkit.ai/docs/readme-middlewares.md#storage-modules) which can be enabled with just a few lines of code.


# Developer & Support Community

You can find full documentation for Botkit on our [Docs site](https://botkit.ai/docs/).

###  Need more help?

* Glitch allows users to ask the community for help directly from the editor! For more information on raising your hand, [read this blog post.](https://medium.com/glitch/just-raise-your-hand-how-glitch-helps-aa6564cb1685)

* Join our thriving community of Botkit developers and bot enthusiasts at large. Over 4500 members strong, [our open Google Hangouts group](http://community.botkit.ai) is _the place_ for people interested in the art and science of making bots.

 Come to ask questions, share your progress, and commune with your peers!

* We also host a [regular meetup and annual conference called TALKABOT.](http://talkabot.ai) Come meet and learn from other bot developers!

 [Full video of our 2016 event is available on Youtube.](https://www.youtube.com/playlist?list=PLD3JNfKLDs7WsEHSal2cfwG0Fex7A6aok)


# About Botkit

Botkit is a product of [Howdy](https://howdy.ai) and made in Austin, TX with the help of a worldwide community of botheads.
