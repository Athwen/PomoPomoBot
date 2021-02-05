
module.exports = {
    name: 'ping',
    description: 'Ping!',
    args: true,
    usage: '<user>',
    execute(message, args){
        message.guild.members.fetch();
        console.log(message.client.users);
        const users = message.client.users.cache.find(user => user.name === `${args[0]}`);
        console.log(users);
        message.channel.send(`ping @${args[0]}`);

    },
};