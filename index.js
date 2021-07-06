const Discord = require("discord.js")
const { PREFIX } = require('./config.json');
const { TOKEN } = require('DOTENV')

const express = require("express");
 const app = express();

 app.get("/", (req, res) => {
	 res.send("pinging");
	
 });

 app.listen(3000, () => {
	 console.log("server started");
 });



client.on("ready", async () => {
  client.user.setActivity(``);
  console.log("Ready To give codes to members!");
});


client.login(process.env.TOKEN);
