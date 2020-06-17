exports.run = (client, message, args) => {
let Discord = require("discord.js")
    const canal = message.guild.channels.get("720056573262692363")
    const embed = new Discord.RichEmbed()
      .setAuthor(`Staff No Servicio`)
      .setDescription("**__Servicio__**")
      .addField("**Staff**", "El staff" + message.member + "ya no esta resolviendo preguntas ni reportes<a:cancelado:720026983970635898>")
      .addField("**Mencion**", "<a:alerta:719099382749855784>***NO MENCIONARLO***<a:alerta:719099382749855784>")
      .setColor("RANDOM")
      .setFooter("MexPlex // Staff")
    canal.send(embed);
  }