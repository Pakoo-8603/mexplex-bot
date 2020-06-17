exports.run = async (clients, message, args) => {
  let Discord = require("discord.js")

    if (!message.guild.me.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("No tengo permisos.");
    let ticketsupport = message.guild.roles.find(
      r => r.name == "Ticket Support"
    );
    if (!ticketsupport)
      return message.channel.send("No existe el rol Ticket Support");
    //Sí
    if (!message.member.roles.has(ticketsupport.id))
      return message.channel.send(
        "❌ Error ``|`` No tienes Permisos Para Eliminar Ticket **Necesitas El Rol ``Ticket Support``** ❌."
      );
    let cate = message.guild.channels.find(
      c => c.name == "tickets" && c.type == "category"
    ); //Que busque una categoria llamada Tickets
    if (!cate)
      message.channel.send(
        "❌ Error ``|`` **No Hay Ningun Ticket Abierto** ❌."
      ); // Así mismo pero puedes agregarle que necesitan permisos X para eliminar ticket
    if (!message.channel.parent || message.channel.parent.id != cate.id)
      return message.channel.send(
        "❌ Error ``|`` **Este Canal No Es Un Ticket** ❌."
      );
    return message.channel
      .delete()
      .catch(e => message.channel.send(`Parece que hubo un error`));
  } //prueba