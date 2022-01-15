const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('serverinfo')
        .setDescription('Replies with all emotes'),
    async execute(interaction) {
        await interaction.reply(`Server Name: ${interaction.guild.name} \nServer ID: ${interaction.guild.id} \nOwner: Flamemaster#9696 \nOwner ID: 708748287909298318 \nCurrent Members: ${interaction.guild.memberCount}`);
    },
};