
module.exports = {
    name: 'ping',
    description: 'Ping!',
    args: true,
    usage: '<user>',
    execute(message, args){
        message.guild.members.fetch();
        const user = message.client.users.cache.find(user => user.name === `${args[0]}`);
        console.log(user);
        message.channel.send(`ping ${user}`);

    },
};