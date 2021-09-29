module.exports = {
    name: 'volume',
    run: async (client, message, args) => {
        const voice = message.member.voice.channel;
        if (!voice) {
            return message.reply('** ❌ - Please join a voice channel **')
        }
        const queue = client.player.getQueue(message);
        if (!queue) {
            return message.reply(' **❌ - No song Playing  **')
        }
        const volume = args[0]
        if(volume > 250) {
            return message.channel.send('The Max Volume is 250%')
        }
        client.player.setVolume(message, Number(volume || 100))
        message.reply("🔊 | **Music Volume Has Changed To: **" + `${volume || 100}`)
    }
}