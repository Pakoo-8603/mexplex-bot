const http = require("http");
const express = require("express");
const app = express();

//
app.use(express.static("public"));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

//DESDE AQUI EMPIEZA A ESCRIBIR EL CODIGO PARA SU BOT

const Discord = require("discord.js");
const client = new Discord.Client();
const db = require("megadb");
let prefix_db = new db.crearDB("prefixes");
const Zeew = require("zeew");
const welcome_db = new db.crearDB("welcome");
let leave_db = new db.crearDB("leave");

const actividades = ["Mc.MexPlex.Net", "Nuevos Eventos", "Mc.MexPlex.Net"];

client.on("ready", () => {
  console.log("estoy listo!");
  setInterval(function() {
    const index = Math.floor(Math.random() * (actividades.length - 1) + 1);
    client.user.setPresence({
      estatus: "online",
      game: {
        name: actividades[index],
        type: "WATCHING"
      }
    });
  }, 4000);
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === `dm`) return;

  let prefix;
  if (prefix_db.tiene(`${message.guild.id}`)) {
    prefix = await prefix_db.obtener(`${message.guild.id}`);
  } else {
    prefix = "m!";
  }

  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let comandos = require(`./comandos/${command}.js`);
    comandos.run(client, message, args);
  } catch (e) {
    console.log(e.stacks);
    let error = new Discord.RichEmbed()
      .setTitle("Comando desconocido!")
      .setColor("#F00000")
      .addField("El Usuario utilizo:", message.content)
      .addField("Para ver los comandos disponibles Usa:", '`'+ `${prefix}help` +'`')
      .setTimestamp() //wilson si llees esto no toques esta code plis. Atte: titanPRO
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/673260017222418432/680514083329802247/gif_error.gif"
      );
    message.channel.send(error);
  } finally {
  }
});

client.on("guildMemberAdd", async member => {
  if (!welcome_db.tiene(`${member.guild.id}`)) return;
  let welcome = await welcome_db.obtener(`${member.guild.id}`);
  const canalrendered = client.channels.get(welcome);
  let desc = new Zeew.Bienvenida()

    .token(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7Im5hbWUiOiJ6ZWV3YXBpIn0sImlhdCI6MTU4OTI0NTY1MX0.FIGTBtSmpLubyPNjcpQZRxtqWEOBigsdmhKdsz8rUFk"
    )
    .avatar(member.user.displayAvatarURL)
    .fondo(
      "https://images8.alphacoders.com/533/thumb-1920-533370.png"
    )
    .colorTit("")
    .estilo("classic")
    .titulo(`Bienvenido ${member.user.username}`)
    .colorDesc("0FE3F4")
    .descripcion(`Ahora Somos ${member.guild.memberCount} Usuarios`);
  
  let img = await Zeew.WelcomeZeew(desc);
  canalrendered.send({ files: [img] });
  canalrendered.send("**[+]** "+ member.user + ":tada: **Ha entrado al servidor**")
});

client.on("guildMemberRemove", async member => {
  if (!leave_db.tiene(`${member.guild.id}`)) return;
  let leave = await leave_db.obtener(`${member.guild.id}`);
  const canalrendered = client.channels.get(leave);
  let desc = new Zeew.Bienvenida()

    .token(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7Im5hbWUiOiJ6ZWV3YXBpIn0sImlhdCI6MTU4OTI0NTY1MX0.FIGTBtSmpLubyPNjcpQZRxtqWEOBigsdmhKdsz8rUFk"
    )
    .avatar(member.user.displayAvatarURL)
    .fondo("https://images8.alphacoders.com/533/thumb-1920-533370.png") //
    .colorTit("")
    .estilo("classic")
    .titulo(`Ha Salido ${member.user.username}`)
    .colorDesc("0FE3F4")
    .descripcion(`Regresa Pronto`);

  let img = await Zeew.WelcomeZeew(desc);
  canalrendered.send({ files: [img] });
  canalrendered.send("**[-]** "+ member.user + ":cry: **Ha salido del servidor**")
});




client.login(process.env.TOKEN);
