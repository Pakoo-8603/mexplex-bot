exports.run = (client, message, args) => {
  let Discord = require("discord.js");
var rpts = [
      "Si",
      "Probablemente si.",
      "Ni idea",
      "Probablemente no.",
      "No.",
      "Mejor preguntame otra cosa.",
      "Si",
      "Em...imposible."
    ];

    if (!args[0]) {
      return message.reply("`â| Nope!`, Debes escribir una pregunta!");
    }
    message.channel.send({
      color: 0x0098ff,
      embed: {
        title: message.author.username + `, Hm...`,
        fields: [
          {
            name: "Pregunta:",
            value: "" + args.join(" ") + ""
          },
          {
            name: "Mi respuesta es:",
            value: "" + rpts[Math.floor(Math.random() * rpts.length)] + ""
          }
        ]
      }
    });

    message.delete();
  }