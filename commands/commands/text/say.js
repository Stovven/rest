const Discord = require('discord.js')
const config = require("../../../config/config.json")
const id = config.commandID

module.exports = {
  commands: 'say' ,
  description: 'N/A',
  callback: (message, arguments, text) => {
  if(message.author.id === id.find((id) => id === message.author.id)) {
    message.delete()
    if(arguments.length == 0) return 
    message.channel.send(text)
  } else {
    let embed = new Discord.MessageEmbed()
    .setColor('#47FC74')
    .setAuthor("no!")
    .setDescription(`:(`)
    message.channel.send(embed)
  }
  },
}
