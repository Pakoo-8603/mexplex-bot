const Discord = require("discord.js");
const db = require("megadb")
const prefix_db = new db.crearDB("prefixes");

exports.run = (client, message, args) => {
    
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No tienes Permisos");
    if(!args[0]) return message.channel.send("Debes ingresar el nuevo prefix para el bot");
    if(args[0].length > 4) return message.channel.send("El prefix no puede contener mas de 4 Caracteres");
    
    prefix_db.establecer(`${message.guild.id}`, args[0]);
    return message.channel.send("**El prefix fue cambiado a**  `" + args[0] + "`");
  }