const { prefix } = require('../config.json');

module.exports = {
    name: 'fart',
    description: 'Replies to the user who farted with a witty comment.',
    command: prefix + 'fart',
    execute(message, args) {
        message.channel.send("You may want to check that you haven't followed through :poop:");
    },
};
