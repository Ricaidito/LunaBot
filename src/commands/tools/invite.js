const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("invite")
    .setDescription("Generates an invitation link"),
  async execute(interaction, client) {
    const inviteLink =
      "https://discord.com/api/oauth2/authorize?client_id=1005849051847204975&permissions=277025646656&scope=bot";
    const embed = new EmbedBuilder()
      .setTitle("LunaBot")
      .setDescription("Here is your link to invite Luna!")
      .setColor(0x034af)
      .setThumbnail(client.user.displayAvatarURL())
      .addFields([
        {
          name: "**Invitation link:**",
          value: inviteLink,
        },
      ]);

    await interaction.reply({
      embeds: [embed],
    });
  },
};
