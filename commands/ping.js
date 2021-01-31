module.exports = {
    name: 'ping',
    description: 'Ping!',
    args: true,
    usage: '<user>',
    execute(message, args){
        if(command.args && !args.length){
            let reply = `You didn't provide any arguments, ${message.author}`;

            if(command.usage){
                reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;

            }

            return message.channel.send(reply);

        }
        message.channel.send('Pong.');

    },
};