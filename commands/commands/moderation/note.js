const Discord = module.require('discord.js');
const { prefix } = require('../../../config/config.json')

module.exports = {
  commands: 'recordnote' ,
  description: 'N/A',
  permissions: ['MANAGE_MESSAGES'],
  callback: (message, arguments, text, client) => {
    message.delete()
    let user
    let noteText = text.split(' ')
    if(arguments.length === 0) return message.channel.send(`No message was included, Proper usage: ${prefix}note <optional user id> <message>`)
    if (!isNaN(arguments[0])) {
      user = client.users.cache.get(arguments[0])
      if(user) {
        noteText.shift()
      }
    }
    const finalNote = noteText.join(' ')
    if(!user) {
      user = ' '
    }
    let date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
    let embed = new Discord.MessageEmbed()
    .setColor('#33ff5b')
    .setTitle("Note")
    .setDescription(`${user} (${user.id}), ${finalNote}`)
    .setFooter(`Logged by ${message.member.user.tag} on ${date}`)
    message.channel.send(embed).catch(error => {
      message.channel.send(`Something happened to cause this to not send: ${error}`)
    })
  },
}   