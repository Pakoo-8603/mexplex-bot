exports.run = async (clients, message, args) => {
  let Discord = require("discord.js");
 let embed = new Discord.RichEmbed()
 message.delete()
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("Falta de permisos."); //Si el bot no tiene permisos devuelva False
    if (!args.join(" "))
      return message.channel.send(
        "❌ Error ``|`` **Ingrese Una Razon Para Abrir El Ticket** ❌."
      );
    let everyone = message.guild.roles.find(m => m.name == "@everyone"); //Hace que el bot busque un rol llmado everyone

    let ticketsupport = message.guild.roles.find(
      r => r.name == "Ticket Support"
    ); //Busca el rol Ticket Support
    if (!ticketsupport)
      return message.channel.send(
        "❌ Error ``|`` **Necesita Crear El Rango** ``Ticket Support`` ❌"
      ); //Devuelva false si no existe l rol ticket support

    let nombrech = message.author.tag
      .replace(/[^a-zA-z0-9 ]/g, "")
      .trim()
      .toLowerCase(); //Hace que cree el canal junto al # de el nombre del usuario
    if (message.guild.channels.find(m => m.name.replace(/-/g, " ") == nombrech))
      return message.channel.send("No puedes crear mas de 1 ticket");
    
    let cate = message.guild.channels.find(
      c => c.name == "tickets" && c.type == "category"
    ); 
    if (!cate)
      return await message.guild.createChannel("tickets", {
        type: "category"
      }); 

    return message.guild
      .createChannel(nombrech, {
        type: "text",
        permissionOverwrites: [
          
          {
            id: everyone.id, 
            deny: ["VIEW_CHANNEL", "SEND_MESSAGES"] 
          },
          {
            id: ticketsupport.id, 
            allow: ["VIEW_CHANNEL", , "SEND_MESSAGES"] 
          },
          {
            id: message.author.id,
            allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
          }
        ],
        parent: cate.id 
      })
      .then(m => {
        message.channel.send(
          "✅ Autenticado ``|`` **Ticket creado Correctamente.**"
        ),
          message.guild.channels
          .find(m => m.name.replace(/-/g, " ") == nombrech)
          .send("<@&700467233922744510>");
  
          message.guild.channels
            .find(m => m.name.replace(/-/g, " ") == nombrech)
            .send(
               (embed = new Discord.RichEmbed()
              
                .setTitle(`:notebook: **___| Nuevo ticket |___** :notebook:`)
                .setDescription(
                  `**Has creado un nuevo ticket porfavor menciona al staff para que pueda resolver tu duda.**`
                )
                .setColor("RANDOM")
                .addField(`Ticket Creado Por:`, message.author)
                .addField(`Razón:`, args.join(" "))
                .setFooter(`MexPLex | Ticket`))
        )
          })
      .catch(e => {
        message.channel.send(`Parece que hubo un error`), console.log(e);
      }); 
}