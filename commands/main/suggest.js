const { MessageEmbed } = require("discord.js")


module.exports = {
  name: "suggest",
  usage: "suggest <message>",
  description: "Send your Suggestion",
  category: "main",
  run: (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("Bitte gebe ein Vorschlag!")
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "🛡・vorschläge" || x.name === "🛡・vorschläge"))
    
    
    if(!channel) {
      return message.channel.send("there is no channel with name - 🛡・vorschläge")
    }
                                                    
    
    let embed = new MessageEmbed()
    .setAuthor("NEUER VORSCHLAG: " + message.author.tag, message.author.avatarURL())
    .setThumbnail(message.author.avatarURL())
    .setColor("#ff2050")
    .setDescription(args.join(" "))
    .setTimestamp()
    
    
    channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
    }).catch(err => {})
    

    
    message.channel.send("Sended Your Suggestion to " + channel).catch(err => {})
    
  }
}
