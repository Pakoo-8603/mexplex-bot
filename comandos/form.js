exports.run = (client, message, args) => {
  let Discord = require("discord.js");

  let usermd = message.author; //¡Este será el autor del mensaje!
  const embed = new Discord.RichEmbed() //Aquí crearemos nuestro embed.
    .setColor("RANDOM") //Aquí establecemos un color.
    .setTitle("FORMULARIO CERRADO") //Aquí empezamos a crear nuestro embed.
    .setDescription(
      "Dale click al mensaje que te aparece abajo para hacer el formulario"
    )
    .setDescription(
      "El formulario a cerrado, espera a las siguientes postulaciones: [Formulario para Helper](https://docs.google.com/forms/d/e/1FAIpQLSd8LJy0btSTLz-9vbiiaV-xOa8r60JMVfEQ9ECoTvfy-Y8h1Q/viewform)"
    ) //Esta es una descripción para nuestro embed
    .setFooter("MexPlex /// Minecraft"); //Este mensaje está debajo del todo.
  usermd.send(embed); //Este es el mensaje que le vamos a enviar al autor.
  message.channel.send(
    "¡Mensaje enviado! Revisa tu MD <a:tick:716722000969597020>"
  ); //Este es el mensaje que enviaremos al canal
  message.delete(); //Aquí borraremos el comando que envió el autor.
};
