const Discord = require('discord.js');
const config = require('../config.json');

module.exports = {
  name: "ping",
  category: "info",
  description: "Get bot ping :/",
  usage: "ping",
  
  let prefix = config.prefix;
  
  if(!message.content.startsWith(prefix)) return;
  
  const m = await message.channel.send("Hold on .....")
  
  let pong = new Discord.MessageEmbed()
  .setTitle("🏓 Pong!")
  .setColor('RANDOM')
  .setTimestamp()
  .addField("Latency", `${m.createdTimestamp - message.createdTimestamp}ms`, true)
  .addField("API Latency", `${Math.round(client.ws.ping)}ms`, true)
  .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL());

  m.edit(pong)
}
