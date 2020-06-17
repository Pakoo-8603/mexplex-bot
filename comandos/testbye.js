const Discord = require("discord.js");
exports.run = async (client, message, args) => {
if (message.author.id !== "692363394719809577" && message.author.id !== "528244139884806155") return message.channel.send("Solo lo puede usar mi creador")
      let embed = new Discord.RichEmbed()
      .setAuthor(`🎉 >> | Simulando Entrada al Servidor`)
      .addField("Usuario:", message.author)
      .addField("ID Canal:", message.guild.id)
      .setColor("RANDOM")
      message.channel.send(embed);

    client.emit(
      "guildMemberRemove",
      message.member || (await message.guild.fetchMember(message.author))
    );
}