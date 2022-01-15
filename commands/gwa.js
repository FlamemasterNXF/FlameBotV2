const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gwa')
        .setDescription('Replies with a gwa'),
    async execute(interaction) {
        await interaction.reply(`<:gwa:853002327362895882>`);
    },
};