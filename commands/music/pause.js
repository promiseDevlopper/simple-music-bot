module.exports = {
    name: "pause",
    run: async (client, message, args) => {
        const voice = message.member.voice.channel;
        if (!voice) {
            return message.reply('** ❌ - Please join a voice channel **')
        }
        const queue = client.player.getQueue(message);
        if (!queue) {
            return message.reply(' **❌ - No song Playing  **')
        }
        client.player.pause(message)
        message.reply('** ⏸️ The Music Paused**')
    }
}