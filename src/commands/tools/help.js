const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Display the bot help"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("LunaBot")
      .setDescription("This is the list of all the commands you can use:")
      .setColor(0x034af)
      .setThumbnail(client.user.displayAvatarURL())
      .addFields([
        {
          name: "`/ping`",
          value: "Luna replies with **Pong!**",
        },
        {
          name: "`/luna`",
          value: "Get a random picture of Luna",
        },
      ]);

    await interaction.reply({
      embeds: [embed],
    });
  },
};
