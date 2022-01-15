const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('Replies with gwa'),
    async execute(interaction) {
        await interaction.reply('gwa');
    },
};