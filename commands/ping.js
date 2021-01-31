
module.exports = {
    name: 'ping',
    description: 'Ping!',
    args: true,
    usage: '<user>',
    execute(message, args){
        message.channel.send(`ping @${args[0]}`);

    },
};