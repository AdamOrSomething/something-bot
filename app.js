// discord.js variables
const Discord = require('discord.js');
const client = new Discord.Client();

// load config
require('dotenv').config();

// ready log
client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.TOKEN);