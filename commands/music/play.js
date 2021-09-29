const { Client, Message, MessageEmbed, } = require('discord.js')

module.exports = {
    name: "play",
    run: async (client, message, args) => {
        const voice = message.member.voice.channel;
        if (!voice) {
            return message.reply('** ❌ - Please join a voice channel **')
        }
        const song = args.join(" ")
        if(!song) {
            return message.reply('Please select song name/url')
        }
        client.player.play(message, song) 
        message.reply(`**🔍 | Searching To:** \`${song}\``)
    }
}