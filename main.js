const Discord = require('discord.js')
const config = require('./config/config.json')
const loadCommands = require('./commands/core/load-commands.js')
const commandBase = require('./commands/core/command-base.js')
const replyUtil = require('./utils/response.js')
const client = new Discord.Client()

process.on('unhandledRejection', error => {
    if(error.code !== 50013) {
        console.error('something broke', error)
        return
    }
    return
})

client.on("ready", () => {
    console.log('Rest ready!')
    loadCommands(client)
    commandBase.listen(client)
    replyUtil(client)
})

client.login(config.token)