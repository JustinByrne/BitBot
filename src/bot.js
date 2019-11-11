const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require('./commands/${file}');
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log("Connected as " + client.user.tag);
})

client.on('message', (message) => {
    // Preventing bot from replying to another bot or not a command
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    if (message.content.startsWith(prefix))    {
        processCommand(message);
    }
})

function processCommand(message)    {
    let fullCommand = message.content.substr(1); // Removing the leading exclamation mark
    let splitCommand = fullCommand.split(" "); // Spliting the message into pieces
    let primaryCommand = splitCommand[0];
    let arguments = splitCommand.slice(1);

    console.log("Command received: " + primaryCommand);

    if (primaryCommand == "fart")   {
        message.channel.send("You may want to check that you haven't followed through :poop:");
    }
}

client.login(token);