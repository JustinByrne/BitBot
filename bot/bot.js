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

    if (receivedMessage.content.startsWith("!"))    {
        processCommand(receivedMessage)
    }
})

function processCommand(receivedMessage)    {
    let fullCommand = receivedMessage.content.substr(1) // Removing the leading exclamation mark
    let splitCommand = fullCommand.split(" ") // Spliting the message into pieces
    let primaryCommand = splitCommand[0]
    let arguments = splitCommand.slice(1)

    console.log("Command received: " + primaryCommand)

    if (primaryCommand == "fart")   {
        receivedMessage.channel.send("You may want to check that you haven't followed through :poop:")
    }
}

client.login(process.env.TOKEN)