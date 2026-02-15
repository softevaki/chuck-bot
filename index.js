const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Bot is alive!');
});

app.listen(3000, () => {
    console.log('Web server running');
});

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
    if (message.author.bot) return;

    const content = message.content.toLowerCase();

    if (content.includes("chuck")) {
    message.channel.send("I'm Chuck Bass 😏");
}

if (content.includes("Chuck")) {
    message.channel.send("I'm Chuck Bass 😏");
}

});

client.login(process.env.TOKEN);

