const Discord = require("discord.js")

module.exports = {
  name: "command.js",
  desciption: "gives the command.js help.",
  execute: async (client, message, args) => {
  }
}
  
  const commandembed = new Discord.MessageEmbed()
  .setColor('YELLOW')
  .setTitle('Node.js command.js template')
  .addField(`const { readdirSync } = require('fs');
const ascii = require('ascii-table')


let table = new ascii('Commands');
table.setHeading('Command', 'Load status');

module.exports = client => {
  readdirSync('./commands/') .forEach(dir => {
    const commands = readdirSync(./commands/${dir}).filter(file =>
            file.endsWith('.js')
            );
    for (let file of commands ) {
      let pull = require(../commands/${dir}/${file});
     if (pull.name) {
       client.commands.set(pull.name, pull);
       table.addRow(file, 'Yes');
     } else {
       table.addRow(file, 'Error');
       continue;
       
     }
      if (pull.aliases && Array.isArray(pull.aliases))
        pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
    }
  });
  console.log(table.toString());
};
`)
  
