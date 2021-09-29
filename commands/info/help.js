const { Client, Message, MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js')
const simplydjs = require('simply-djs')
const { prefix } = require('../../config.json')

module.exports = {
    name: 'help',
    run: async (client, message, args) => {

        let wel = new MessageEmbed()
            .setAuthor('Help Menu', message.author.displayAvatarURL({ dynamic: true }))
            .setDescription('Welcome to promise music help me \n - \n مرحبا بك في قائمة المساعدة الخاصة بسيرفر بروميس')
            .setThumbnail("https://media.discordapp.net/attachments/879087662303174686/891053180014710874/20210726_001338.gif?width=480&height=480")
            .setImage('https://media.discordapp.net/attachments/879087662303174686/891044431975833700/2A285C5.png?width=853&height=480')
            .setTimestamp()
        let music = new MessageEmbed()
            .setAuthor('Music commands', message.author.displayAvatarURL({ dynamic: true }))
            .setThumbnail("https://media.discordapp.net/attachments/879087662303174686/891053180014710874/20210726_001338.gif?width=480&height=480")
            .addField(`${prefix}play`, "to play song ", true)
            .addField(`${prefix}stop`, "to stop song ", true)
            .addField(`${prefix}pause`, "to pause song ", true)
            .addField(`${prefix}resume`, "to resume song ", true)
            .addField(`${prefix}loop`, "to loop song ", true)
            .addField(`${prefix}skip`, "to skip song ", true)
            .addField(`${prefix}volume`, "to upgrade volume song ", true)
            .addField(`${prefix}ping`, "to view bot ping ", true)
            .setTimestamp()

        simplydjs.dropdownPages(message, {
            type: 2, // default: 1
            embed: wel,
            placeHolder: 'Select a category',
            rows: [
                new MessageActionRow()
                    .addComponents(
                        new MessageButton()
                            .setLabel('Server invite')
                            .setStyle("LINK")
                            .setEmoji('868981083025317928')
                            .setURL('https://www.discord.gg/5Y97Ku76bD')
                    ),
            ],
            data: [
                {
                    label: 'Music commands',
                    desc: 'to see music commands',
                    emoji: '🎶',
                    embed: music, // embed sent when clicked
                },
            ]
        })
    }
}