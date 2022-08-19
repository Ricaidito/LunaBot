const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with ping!"),
  async execute(interaction, client) {
    await interaction.deferReply({
      fetchReply: true,
      ephemeral: true,
    });
    const newMessage = "Pong!";
    await interaction.editReply({
      content: newMessage,
      ephemeral: true,
    });
  },
};
