const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-';
const fs = require('fs');
const keepAlive = require('./server');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-';
const fs = require('fs');
const keepAlive = require('./server');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 

client.once('ready', () => {
    console.log('ist Online');
    client.user.setActivity("Firewalls Bot")
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    if(command === 'hi') {
      client.command.get('hi').execute(message, args);


    }
    
});



client.login('ODM4Nzk4MjYyODA2NzczNzcx.YJAVwQ.ricF3qLxUBWyKoVaxBXkcgZI-jM');

