
module.exports = {
    name: 'ping',
    description: 'Ping!',
    args: true,
    usage: '<user>',
    execute(message, args){
        const user = message.client.users.cache.find(user => user.name === `${args[0]}`);
        message.channel.send(`ping @${args[0]}`);

    },
};