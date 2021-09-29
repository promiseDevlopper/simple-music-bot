const { Client, Message, MessageEmbed } = require("discord.js");
const db = require('quick.db');
const { joinVoiceChannel } = require('@discordjs/voice');

module.exports = {
    name: 'leave',
    run: async (client, message, args) => {
        if (!message.member.permissions.has('ADMINISTRATOR')) {
            return message.channel.send('🔰 - This Commands For Moderator Only ')
        } 
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) {
            return message.reply('** ❌ - Please join a voice channel **')
        }
        db.delete(`Voice_Channel_${message.guild.id}`);
        message.reply(`**✅ - Done Leaved From <#${voiceChannel.id}>**`)
    }
}
