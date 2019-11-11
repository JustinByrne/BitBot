module.exports = {
    name: 'fart',
    description: 'Did the user just fart?',
    execute(message, args) {
        message.channel.send("You may want to check that you haven't followed through :poop:");
    },
};