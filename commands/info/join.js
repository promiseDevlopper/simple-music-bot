const { Client, Message, MessageEmbed } = require("discord.js");
const db = require('quick.db');
const { joinVoiceChannel } = require('@discordjs/voice');

module.exports = {
    name: 'join',
    run: async (client, message, args) => {
        if(!message.member.permissions.has('ADMINISTRATOR')) {
            return message.channel.send('🔰 - This Commands For Moderator Only ')
        }
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) {
            return message.reply('** ❌ - Please join a voice channel **')
        }
        let channel = client.channels.cache.find(c => c.id == voiceChannel.id);
        const connection = joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
        });
        connection;
        client.db.set({
            key:`Voice_Channel_${message.guild.id}`,
            value: voiceChannel.id
          });
        message.reply(`**✅ - Done joined To <#${voiceChannel.id}>**`)
    }
}
