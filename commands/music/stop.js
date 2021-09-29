const { Client, Message, MessageEmbed, } = require('discord.js')

module.exports = {
    name: "stop",
    run: async (client, message, args) => {
        const voice = message.member.voice.channel;
        if (!voice) {
            return message.reply('** ❌ - Please join a voice channel **')
        }
        const queue = client.player.getQueue(message);
        if (!queue) {
            return message.reply(' **❌ - No song Playing  **')
        }
        client.player.stop(message)
        message.reply('**🛑 The Music has stoped ** ')
    }
}