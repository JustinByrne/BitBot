require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
})

client.on('message', (receivedMessage) => {
    // Preventing bot from replying to itself
    if (receivedMessage.author == client.user)  {
        return
    }

    // Reply to the user with a thank you
    if (receivedMessage.content.includes(client.user.toString()))   {
        receivedMessage.channel.send("Thank you " + receivedMessage.author.toString() + " for your message")
    }
}) 

client.login(process.env.TOKEN)