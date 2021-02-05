
module.exports = {
    name: 'ping',
    description: 'Ping!',
    args: true,
    usage: '<user>',
    execute(message, args){
        message.guild.members.fetch().then(fetchedMembers =>{
            const onlineUsers = fetchedMembers.filter(member => member.status.status !== 'offline');

            console.log(onlineUsers);

            const user = fetchedMembers.find(user => user.username === `${args[0]}`);
            console.log(user);
            message.channel.send(`ping ${user}`);

        });

        

    },
};