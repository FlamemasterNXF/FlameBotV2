const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions, Client, Intents} = require('discord.js');
const ms = require('ms');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('timeout')
        .setDescription('Puts a member in Timeout')
        .addUserOption(option => option.setName(`target`).setDescription(`The Target`).setRequired(true))
        .addStringOption(option => option.setName('time').setDescription('Time to be put in timeout').setRequired(true))
        .addStringOption(option => option.setName(`reason`).setDescription(`list the reason for the timeout`).setRequired(true)),
    async execute(interaction) {
        const client = interaction.guild
        const targetedChannel = client.channels.cache.get('826890826964533258') || client.channels.fetch('826890826964533258');
        if (!interaction.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) await interaction.reply("You can't use this command!")
        else{
            const target = interaction.options.getUser(`target`)
            const memberTarget = client.members.cache.get(target.id);
            const reason = interaction.options.getString(`reason`)
            const time = interaction.options.getString(`time`)
            const milliseconds = ms(time);
            await targetedChannel.send(`${target.tag} has been sent to Timeout for ${milliseconds/60000} minutes. Reason: ${reason}. \nStriked User ID: ${target.id} | Responsible Moderator: ${interaction.user.tag}`)
            await interaction.reply(`${target.tag} has been sent to Timeout.`)
            memberTarget.timeout(milliseconds, reason)
        }
    },
};
exports.conf = {
    aliases: [],
    permLevel: 0,
};