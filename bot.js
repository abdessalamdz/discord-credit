const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("510784791247847444")
setInterval(function() {
channel.send(`abdessalam dz is pro minecraft`);
}, 30)
})

client.login(process.env.BOT_TOKEN);