const Discord = require('discord.js');
const client = new Discord.Client();
const { token } = require("./config.json");
const fs = require('fs');

const config = require('./config.json');
client.config = config;
client.login(process.env.BOT_TOKEN)

// Init discord giveaways
const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./database.json",
    updateCountdownEvery: 3000,
    default: {
        botsCanWin: false,
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});
// We now have a client.giveawaysManager property to manage our giveaways!

/* Load all events */
fs.readdir("./events/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`👌 Event loaded: ${eventName}`);
        client.on(eventName, event.bind(null, client));
        require(`./events/${file}`);
    });
});

client.commands = new Discord.Collection();

/* Load all commands */
fs.readdir("./commands/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
        console.log(`👌 Command loaded: ${commandName}`);
    });
});

/* Load Fun commands */

fs.readdir("./fun/", (_err, files) => {

    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`./fun/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
        console.log(`👌 Fun loaded: ${commandName}`);
    });
});

/* Load handlers commands */

fs.readdir("./handlers/", (_err, files) => {

    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`./handlers/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
        console.log(`👌 handlers loaded: ${commandName}`);
    });
});

client.login(config.TOKEN);
