const fs = require('fs');
const { prefix } = require('../config.json');

module.exports = {
    name: 'help',
    description: 'Outputs a list of available commands with description.',
    command: prefix + 'help',
    execute(message, args) {
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

        var commands = '*Commands*\n';

        for (const file of commandFiles) {
            const command = require(`./${file}`);
            commands = commands + command.command + '    ' + command.description + '\n';
        }

        message.channel.send(commands);
    },
};