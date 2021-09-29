module.exports = {
    name: "skip",
    run: async (client, message, args) => {
        const voice = message.member.voice.channel;
        if (!voice) {
            return message.reply('** ❌ - Please join a voice channel **')
        }
        const queue = client.player.getQueue(message);
        if (!queue) {
            return message.reply(' **❌ - No song Playing  **')
        }
        if (queue.songs.map((song, i) => i).length == 1) return message.reply(":x: | **No Song To Skip**");
        client.player.skip(message);
        message.reply("⏭ | **The Music Has Skiped**")
    }
}