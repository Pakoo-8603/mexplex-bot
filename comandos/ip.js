exports.run = (client, message, args) => {
  let Discord = require("discord.js");  
const embed = new Discord.RichEmbed()
      .setAuthor(``)
      .setDescription(
        "<a:loading:719844463580807199>__Estado del servidor__<a:loading:719844463580807199>"
      )
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/714874823234289714/715242610989465660/Logo_de_mexplex_2.0.PNG"
      )
      .addField("<:video_game:719846759639023616>IP:", "`mc.mexplex.net`")
      .addField("<a:loading2:719844531830521906>Estado:", "**Activo**")
      .addField(
        "<:moneybag:720748813878558841>Tienda:",
        "https://mexplex-store.tebex.io/"
      )
      .setColor("RANDOM")
      .setFooter("MexPlex // Estado del servidor");
    message.channel.send(embed);
  }