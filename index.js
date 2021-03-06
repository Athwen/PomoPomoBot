const Discord = require('discord.js');
const { prefix } = require('./config.json');
const fs = require('fs');

const client = new Discord.Client({ ws: { intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_PRESENCES'] } });
client.commands = new Discord.Collection();

const commandFile = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

let guilds = client.guilds.cache.array();

guilds.forEach(guild => {
    guild.members.fetch();

});


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
    const commandName = args.shift().toLowerCase();

    if(!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    if(command.args && !args.length){
        let reply = `You didn't provide any arguments, ${message.author}`;

        if(command.usage){
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;

        }

        return message.channel.send(reply);

    }

    try{
        command.execute(message, args);

    }catch (error){
        console.log(error);
        message.reply('There was an error trying to execute that command!');
        
    }


})

client.login(process.env.BOT_TOKEN);