exports.run = (client, message, args) => {
let Discord = require("discord.js")
    const canal = message.guild.channels.get("720056573262692363")
    const embed = new Discord.RichEmbed()
      .setAuthor(`Staff En Servicio`)
      .setDescription("**__Servicio__**")
      .addField("**Staff**", "**El staff" + message.member + "esta resolviendo reportes y preguntas** <a:tick:716722000969597020>")
      .addField("**Mencion**", "<a:tick:716722000969597020>***PUEDEN MENCIONARLO***<a:tick:716722000969597020>")
      .setColor("RANDOM")
      .setFooter("MexPlex // Staff")
    canal.send(embed);
  }