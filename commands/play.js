const { VoiceConnection, MessageManager } = require('discord.js');
    const ytdl  = require('ytdl-core');

module.exports = {
    name: 'play',
    description: 'play music from youtube link',
    args: true,
    usage: '<Youtube URL>',
    async execute(message, args){
        if(message.member.voice.channel){
            const connection = await message.member.author.channel.join();

            connection.play(ytdl(args[0], { filter: 'audioonly'}), {
                type: 'webm/opus'

            });

        }else{
            message.reply('You need to be inside of a voice channel to play music');

        }

    },

};