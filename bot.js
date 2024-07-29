const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const fs = require('fs');

const config = JSON.parse(fs.readFileSync('config.json', 'utf-8'));


client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    console.log(`Recived: ${message.content}`);
    if (message.content === '!ping') {
        message.channel.send('Pong.');
    }
});

client.login(config.token);

process.on('exit', () =>{
    client.destroy();
});