const Discord = module.require('discord.js');

module.exports = {
  commands: 'llah' ,
  description: 'N/A',
  callback: (message, arguments, text) => {
    const cube = '🕋'
    message.channel.send(cube)
  },
}