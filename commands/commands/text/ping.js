const Discord = module.require('discord.js');

module.exports = {
  commands: 'ping' ,
  description: 'N/A',
  callback: (message, arguments, text) => {
    let embed = new Discord.MessageEmbed()
    .setColor('#47FC74')
    .setTitle('Bot is alive!')
    message.channel.send(embed)
  },
}