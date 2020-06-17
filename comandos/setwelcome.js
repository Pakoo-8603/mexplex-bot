let Discord = require("discord.js");
const db = require("megadb");
let welcome_db = new db.crearDB("welcome");

exports.run = async (client, message, args) => {
  let welcome;
  if (welcome_db.tiene(`${message.guild.id}`)) {
    welcome = await welcome_db.obtener(`${message.guild.id}`);
  } else {
    welcome = "welcomes";
  }

  const embed = new Discord.RichEmbed()
    .setAuthor("Bienvenidas", client.user.avatarURL)
    .setFooter("Sistema de Bienvenidas")
    .setTimestamp()
    .setDescription("No tienes Permisos");

  const embed1 = new Discord.RichEmbed()
    .setAuthor("Bienvenidas", client.user.avatarURL)
    .setFooter("Sistema de bienvenida")
    .setTimestamp()
    .setDescription("Debes Especificar El Canal");

  const embed2 = new Discord.RichEmbed()
    .setAuthor("Bienvenida", client.user.avatarURL)
    .setFooter("Sistema de Bienvenida")
    .setTimestamp()
    .setThumbnail(
      "https://images8.alphacoders.com/533/thumb-1920-533370.png"
    )
    .setDescription("Canal Selecionado Correctamente");

  let canal = message.mentions.channels.first();
  let perms = message.member.hasPermission("ADMINISTRATOR");

  if (!perms) return message.channel.send(embed);
  if (!canal) return message.channel.send(embed1);

  welcome_db.establecer(message.guild.id, canal.id).then(O_o => {
    message.channel.send(embed2);
  });
};
