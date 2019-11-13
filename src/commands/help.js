const fs = require('fs');
const Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
    name: 'help',
    description: 'Outputs a list of available commands with description.',
    command: prefix + 'help',
    execute(message, args) {
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

        const embed = new Discord.RichEmbed()
            .setColor('#00cec9')
            .setTitle('BitBot')
            .setURL('https://github.com/JustinByrne/BitBot')
            .setDescription('A bot with limited functionality');

        for (const file of commandFiles) {
            const command = require(`./${file}`);
            embed.addField(command.command, command.description);
        }

        message.channel.send(embed);
    },
};