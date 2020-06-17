exports.run = (client, message, args) => {
  let Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
    message.delete()
    let suggestion = args.join(" ");
    if (!suggestion)
      return message.channel
        .send(`Tienes que poner una sugerencia!`) 
        .then(m => m.delete(15000));
    let sChannel = message.guild.channels.find(x => x.name === "➤『🔎』ꜱᴜɢᴇʀᴇɴᴄɪᴀꜱ"); 
      if(!sChannel) return message.channel.send("Ups! El canal no esta definido!") 
    message.channel 
      .send("Tu sugerencia fue enviada! Gracias!<a:tick:721174470168936579>") 
    let suggestembed = new Discord.RichEmbed() 
      .setDescription("**___NUEVA SUGERENCIA___**")
      .setFooter(client.user.username, client.user.displayAvatarURL)
      .setTimestamp()
      .addField(`**___Nueva Sugerencia Hecha Por___**:`, `**${message.author.tag}**`)
      .addField(`**___Sugerencia___**:`, `${suggestion}`)
      .addField(`**___VOTACION___**`, `**___Vota reaccionando al mensaje___**`)
      .setColor('#ff2052');
    sChannel.send(suggestembed).then(async msg => {
      await msg.react("720026933030813825");
      await msg.react("721487729640210582");
    });
  }