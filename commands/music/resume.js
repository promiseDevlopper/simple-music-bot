module.exports = {
    name: 'resume',
    run: async (client, message, args) => {
        const voice = message.member.voice.channel;
        if (!voice) {
            return message.reply('** ❌ - Please join a voice channel **')
        }
        const queue = client.player.getQueue(message);
        if (!queue) {
            return message.reply(' **❌ - No song Playing  **')
        }
        client.player.resume(message)
        message.reply('** ▶️ The Music Resumed **')
    }
}