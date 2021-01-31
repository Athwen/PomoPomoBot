const Discord = require('discord.js');
const { prefix } = require('./config.json');
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFile = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFile){
    const command = require(`./commands/${file}`);

    //adds command to a set of commands
    client.commands.set(command.name, command);

}

client.once('ready', () =>{
    console.log('Ready!');

});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    if(!client.commands.has(command)) return;

    try{
        client.commands.get(command).execute(message, args);

    }catch (error){
        console.log(error);
        message.reply('There was an error trying to execute that command!');
        
    }


})

client.login(process.env.BOT_TOKEN);