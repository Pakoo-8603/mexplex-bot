let Discord = require("discord.js");
const db = require("megadb");
let leave_db = new db.crearDB("leave");

exports.run = async (client, message, args) => {
  let leave;
  if (leave_db.tiene(`${message.guild.id}`)) {
    leave = await leave_db.obtener(`${message.guild.id}`);
  } else {
    leave = "leaves";
  }

  const embed = new Discord.RichEmbed()
    .setAuthor("Despedidas", client.user.avatarURL)
    .setFooter("Sistema de Despedidas")
    .setTimestamp()
    .setDescription("No tienes Permisos");

  const embed1 = new Discord.RichEmbed()
    .setAuthor("Despedidas", client.user.avatarURL)
    .setFooter("Sistema de despedidas")
    .setTimestamp()
    .setDescription("Debes Especificar El Canal");

  const embed2 = new Discord.RichEmbed()
    .setAuthor("Despedida", client.user.avatarURL)
    .setFooter("Sistema de Despedida")
    .setTimestamp()
    .setThumbnail(
      "https://media.discordapp.net/attachments/713744808920744006/713745093609127946/config.png"
    )
    .setDescription("Canal Selecionado Correctamente");

  let canal = message.mentions.channels.first();
  let perms = message.member.hasPermission("ADMINISTRATOR");

  if (!perms) return message.channel.send(embed);
  if (!canal) return message.channel.send(embed1);

  leave_db.establecer(message.guild.id, canal.id).then(O_o => {
    message.channel.send(embed2);
  });
};
