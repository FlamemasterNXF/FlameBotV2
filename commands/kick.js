const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions, Client, Intents} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Kicks a member')
        .addUserOption(option => option.setName(`target`).setDescription(`The Target`).setRequired(true))
        .addStringOption(option => option.setName(`reason`).setDescription(`list the reason for the kick`).setRequired(true)),
    async execute(interaction) {
        const client = interaction.guild
        const targetedChannel = client.channels.cache.get('826890826964533258') || client.channels.fetch('826890826964533258');
        if (!interaction.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) await interaction.reply("You can't use this command!")
        else{
            const target = interaction.options.getUser(`target`)
            const memberTarget = client.members.cache.get(target.id);
            const reason = interaction.options.getString(`reason`)
            await targetedChannel.send(`${target.tag} has been kicked. Reason: ${reason}. \nStriked User ID: ${target.id} | Responsible Moderator: ${interaction.user.tag}`)
            await interaction.reply(`${target.tag} has been kicked.`)
            await memberTarget.kick()
        }
    },
};