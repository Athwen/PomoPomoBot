
module.exports = {
    name: 'ping',
    description: 'Ping!',
    args: true,
    usage: '<user>',
    execute(message, args){
        console.log(message.client.users.cache);
        const user = message.client.users.cache.find(user => user.username === `${args[0]}`);
        message.channel.send(`ping ${user}`);

    },
};  