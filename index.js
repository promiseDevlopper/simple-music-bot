const { Client, Collection, MessageEmbed } = require("discord.js");

const client = new Client({
    intents: 32767,
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// Initializing the project
require("./handler")(client);
//music 
const SoundCloudPlugin = require('@distube/soundcloud');
const SpotifyPlugin = require('@distube/spotify');
const DisTube = require('distube');

const player = new DisTube.default(client, {
    leaveOnEmpty: false,
    leaveOnStop: true,
    leaveOnFinish: false,
    searchSongs: 0,
    youtubeDL: true,
    updateYouTubeDL: true,
    plugins: [new SoundCloudPlugin.default(), new SpotifyPlugin.default()]
});

client.player = player

client.player.on("playSong", (queue, song) => {
    let playS = new MessageEmbed()
        .setAuthor(song.name, song.thumbnail, song.url)
        .setColor("BLUE")
        .setFooter(song.formattedDuration + ` | ${song.likes}👍 ${song.dislikes}👎`)
        .setThumbnail(song.thumbnail)
        .setDescription(`🎶 | **__[${song.name}](${song.url})__ Is Playing**\n**📽️ | Music Made By: [${song.uploader.name}](${song.uploader.url})**`)
    queue.textChannel.send({ embeds: [playS] })
})
client.player.on("addSong", (queue, song) => {
    let addS = new MessageEmbed()
        .setAuthor(song.name, song.thumbnail, song.url)
        .setColor('BLUE')
        .setThumbnail(song.thumbnail)
        .setDescription(`✅ | **__[${song.name}](${song.url})__** has been add to queue`)
        .setFooter(song.formattedDuration + ` | ${song.likes}👍 ${song.dislikes}👎`)
    queue.textChannel.send({ embeds: [addS] })
})
client.login(client.config.token);
