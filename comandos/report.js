exports.run = (client, message, args) => {
  let Discord = require("discord.js");

  let reportado = message.mentions.members.first();
  let razon = args.slice(1).join(" ");

  if (!reportado)
    return message.channel.send(
      `${message.author.tag} Menciona al usuario que vas a reportar`
    );
  if (!razon)
    return message.channel.send(
      `${message.author.tag}  Menciona una Razon del reporte`
    );

  message.channel
    .send("Usuario Reportado Exitosamente<a:tick:716722000969597020>")
    .then(rm => {
      setTimeout(() => {
        rm.react("✅");
      }, 0);
    });
  let canal = client.channels.get("720210145988313088");

  let reporte = new Discord.RichEmbed()
    .setTitle("**___Nuevo Reporte___**")
    .setThumbnail(message.author.displayAvatarURL)
    .addField("Reportante", message.author.tag)
    .addField("Reportado", reportado)
    .addField("Razon del Reporte", razon)
    .setColor("RANDOM")
    .setFooter("Reportes")
    .setTimestamp();

  message.delete();
  canal.send(reporte).then(r => {
    setTimeout(() => {
      r.react("✅");
    }, 0);
  });
};
