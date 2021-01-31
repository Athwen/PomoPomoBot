
module.exports = {
    name: 'ping',
    description: 'Ping!',
    args: true,
    usage: '<user>',
    execute(message, args){
        message.client.users.fetch();
        const user = message.client.users.cache.find(user => user.name === `${args[0]}`).username;
        message.channel.send(`ping ${user}`);

    },
};