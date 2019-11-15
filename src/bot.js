const fs = require('fs');
const Discord = require('discord.js');
const Long = require('long');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log("Connected as " + client.user.tag);
})

client.on('message', (message) => {
    // Preventing bot from replying to another bot or not a command
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // A command was issued but not a valid one
    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.log(error);
        message.reply('It looks like something went horribly wrong! Sorry.');
    }
})

client.on('voiceStateUpdate', (oldMember, newMember) => {
    // Welcoming a user to a voice channel
    if (oldMember.voiceChannel === undefined && newMember.voiceChannel !== undefined)   {
        // sending a message to the default text channel.
        const channel = getDefaultChannel(newMember.guild);
        channel.send(`${newMember.nickname} joined the [${newMember.voiceChannel.name}] voice channel.`);
    } else if (newMember.voiceChannel === undefined)    {
        // sending a message to the default text channel.
        const channel = getDefaultChannel(oldMember.guild);
        channel.send(`${oldMember.nickname} left and didn't even say goodbye!`);
    }
});

// create function to find default or first text channel
const getDefaultChannel = (guild) => {
    // get "original" default channel
    if (guild.channels.has(guild.id)) return guild.channels.get(guild.id)

    // Check for a "general" channel, which is often default chat
    const generalChannel = guild.channels.find(channel => channel.name === "general");

    if (generalChannel) return generalChannel;
    // Now we get into the heavy stuff: first channel in order where the bot can speak
    // hold on to your hats!
    return guild.channels
        .filter(c => c.type === "text" &&
            c.permissionsFor(guild.client.user).has("SEND_MESSAGES"))
        .sort((a, b) => a.position - b.position ||
            Long.fromString(a.id).sub(Long.fromString(b.id)).toNumber())
        .first();
}

client.login(token);