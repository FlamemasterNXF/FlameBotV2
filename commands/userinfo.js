const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('userinfo')
        .setDescription('Replies with User Info'),
    async execute(interaction) {
        await interaction.reply(`If I'm correct, you are ${interaction.user.tag}\nYour ID: ${interaction.user.id}`);
    },
};