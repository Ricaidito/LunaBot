const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const getLunaImage = require("../../utils/luna-images");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("luna")
    .setDescription("Get a picture of Luna"),
  async execute(interaction, client) {
    await interaction.deferReply({
      fetchReply: true,
    });
    const embed = new EmbedBuilder().setImage(getLunaImage()).setColor(0x034af);
    await interaction.editReply({ embeds: [embed] });
  },
};
