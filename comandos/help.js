exports.run = async (client, message, args) => {
  let Discord = require("discord.js");
  const db = require("megadb")
  const prefix_db = new db.crearDB("prefixes")
  let prefix;
  if (prefix_db.tiene(`${message.guild.id}`)) {
    prefix = await prefix_db.obtener(`${message.guild.id}`);
  } else {
    prefix = "m!";
  }
  const embed = new Discord.RichEmbed()
    .setAuthor(`Panel Principal`)
    .setDescription(
      "<a:alerta:719099382749855784>**__Ayuda__**<a:alerta:719099382749855784>"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/714874823234289714/715242610989465660/Logo_de_mexplex_2.0.PNG"
    )
    .addField(
"<a:flecha:719099353985187920>**Comandos**:", '`'+ `${prefix}bot` +'` '+ '`'+ `${prefix}ip` +'` '+ '`'+ `${prefix}help` +'` '+ '`'+ `${prefix}avatar` +'` '+ '`'+ `${prefix}8ball` +'` '+ '`'+ `${prefix}sugerir` +'` '+ '`'+ `${prefix}reportbug` +'` '+ '`'+ `${prefix}ticket`
    )
    .setColor("RANDOM")
    .setFooter("MexPlex // Ayuda");
  message.channel.send(embed);
};
