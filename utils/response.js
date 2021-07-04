const Discord = module.require('discord.js')
const { reply } = require('../config/config.json')

module.exports = (client) => {
    client.on("message", (message) => {
        if(!reply) return
        const { content } = message
        const arguments = content.split(/[ ]+/)
        const text = arguments.join(" ").toLowerCase()
        if(text.match(/test/)) { 
            message.channel.send('shut the fuck up')
        }
    })
}