exports.run = (client, message, args) => {
  let Discord = require("discord.js");
  const embed = new Discord.RichEmbed()    

message.delete()
    let reportbug = args.join(" ");
    if (!reportbug)
      return message.channel
        .send(`Tienes que poner un bug a reportar!`) 
        .then(m => m.delete(15000));
    let sChannel = message.guild.channels.find(x => x.name === "nuevos-bugs"); 
      if(!sChannel) return message.channel.send("Ups! El canal no esta definido!") 
    message.channel 
      .send("Tu reporte del bug fue enviado! Gracias!<a:tick:721174470168936579>") 
    let reportbugembed = new Discord.RichEmbed() 
      .setDescription("**___NUEVO BUG REPORTADO___**")
      .setFooter(client.user.username, client.user.displayAvatarURL)
      .setTimestamp()
      .addField(`**___Nuevo Bug Reportado Por___**:`, `**${message.author.tag}**`)
      .addField(`**___Bug___**:`, `${reportbug}`)
      .setColor('#ff2052');
    sChannel.send(reportbugembed).then(async msg => {
      await msg.react("720026933030813825");
      await msg.react("721487729640210582");
    });
  }