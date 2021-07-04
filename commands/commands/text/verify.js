const Discord = module.require('discord.js');
const { verifyChannel, verifyRole } = require('../../../config/config.json')

module.exports = {
  commands: 'verify' ,
  description: 'N/A',
  maxArgs: 0,
  callback: (message, arguments, text) => {
     if(message.channel.id !== verifyChannel) return
    message.member.roles.add(message.member.guild.roles.cache.find(role => role.id === verifyRole))
    message.delete()
  },
}