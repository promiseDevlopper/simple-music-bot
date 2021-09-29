const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'loop',
    run: async (client, message, args) => {
        const mode = args.join(" ") || "repeat song";
        const voice = message.member.voice.channel;
        if (!voice) {
            return message.reply('** ❌ - Please join a voice channel **')
        }
        const queue = client.player.getQueue(message);
        if (!queue) {
            return message.reply(' **❌ - No song Playing  **')
        }
        if (mode == "off") modeler = 0;
        else if (mode == "repeat song") modeler = 1;
        else if (mode == "repeat queue") modeler = 2;
        else return message.reply({
            content: ":x: - **Please choose one <off/repeat song/repeat queue>**",
        });
        let rm = new MessageEmbed()
            .setAuthor(`🔄 | Repeating`, client.user.avatarURL({ dynamic: true }))
            .setColor('BLUE')
            .setDescription(`🔄 | repeating mode changed to: ${mode}`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
        client.player.setRepeatMode(message, parseInt(modeler))
        message.reply({ embeds: [rm]})
    }
}