
exports.run = async (clients, message, args) => {
  let Discord = require("discord.js")
let gifs = [
      "https://i.pinimg.com/originals/ee/33/92/ee3392fdf283df35567e3a5a8db93536.gif",
      "https://media1.tenor.com/images/3ed3c3c2fdc5406436f37b1e1b9efe62/tenor.gif?itemid=17008759",
      "https://24.media.tumblr.com/68472fad036c03520ee5e5ef6825c188/tumblr_mwobunzhg01rcj8eco1_500.gif"
    ];
    let randomIMG = gifs[Math.floor(Math.random() * gifs.length)];
    const embed = new Discord.MessageEmbed()
      .setDescription(
        `**${message.author.username}** ha matado a **${
          message.mentions.users.first().username
        }**!`
      )
      .setImage(randomIMG)
      .setColor("RANDOM");
    message.channel.send(embed);
  }

