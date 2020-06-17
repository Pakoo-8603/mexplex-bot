exports.run = (client, message, args) => {
  let Discord = require("discord.js");

  const embed = new Discord.RichEmbed()
    .setAuthor(`Estadisticas del bot`)
    .setDescription(
      "<a:aceptado:720026933030813825>**__Estado del bot__**<a:aceptado:720026933030813825>"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/714874823234289714/715242610989465660/Logo_de_mexplex_2.0.PNG"
    )
    .addField(
      "<:gear:720030396380610591>**Version**:",
      "<a:flecha:720026874192855101>_V2.0_"
    )
    .addField(
      "<:hammer_pick:720030396380610591>**Creador**:",
      "<a:flecha:720026874192855101>_Bromord Studios_"
    )
    .addField(
      "<a:tick:716722000969597020>**Estado**:",
      "<a:flecha:720026874192855101>_Funcionando_"
    )

    .addField("<:pushpin:720035461070061659>**Prefix**", "!")
    .setColor("RANDOM")
    .setFooter("MexPlex // Estado del Bot");
  message.channel.send(embed);
};
