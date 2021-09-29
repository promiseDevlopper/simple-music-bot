const client = require("../index");
const { joinVoiceChannel } = require('@discordjs/voice');

client.on("ready", () =>
    console.log(`${client.user.tag} is up and ready to go!`),

    setInterval(() => {
        client.guilds.cache.forEach(guild => {
            let channelID = client.db.get(`Voice_Channel_${guild.id}`)
            if (channelID !== null) {
                let channel = client.channels.cache.find(c => c.id == channelID);
                const connection = joinVoiceChannel({
                    channelId: "883690226860556319",
                    guildId: "873663091634737232",
                    adapterCreator: guild.voiceAdapterCreator,
                });
                connection;
                connection.on("error", err => {
                    return
                });
            }
        });
    }, 500)
);
