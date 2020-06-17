exports.run = (client, message, args) => {
  let Discord = require("discord.js");

  let usuario = message.mentions.member.first() || message.member;
  let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`Avatar del usuario ${usuario.user.username}`)
    .setImage(usuario.user.displayAvatarURL);
  return message.channel.send(embed);
};
