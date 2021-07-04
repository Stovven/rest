const Discord = module.require('discord.js');

module.exports = {
  commands: 'balls' ,
  description: 'N/A',
  callback: (message, arguments, text) => {
    message.channel.send(`something something stupid`)
  },
}