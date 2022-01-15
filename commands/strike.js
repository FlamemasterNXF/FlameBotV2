const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions, Client, Intents} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('strike')
        .setDescription('Strikes a member')
        .addUserOption(option => option.setName(`target`).setDescription(`The Target`).setRequired(true))
        .addIntegerOption(option => option.setName('amount').setDescription('Number of strikes to give').setRequired(true))
        .addStringOption(option => option.setName(`reason`).setDescription(`list the reason for the strike`).setRequired(true)),
    async execute(interaction) {
        const client = interaction.guild
        const targetedChannel = client.channels.cache.get('826890826964533258') || client.channels.fetch('839917201614962688');
        if (!interaction.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) await interaction.reply("You can't use this command!")
        else{
            const target = interaction.options.getUser(`target`)
            const reason = interaction.options.getString(`reason`)
            const amount = interaction.options.getInteger(`amount`)
            await targetedChannel.send(`${target.tag} has been given ${amount} Strikes. Reason: ${reason}. \nStriked User ID: ${target.id} | Responsible Moderator: ${interaction.user.tag}`)
            await interaction.reply(`${target.tag} has been striked.`)
        }
    },
};