const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("Gets the avatar of the user")
    .addUserOption(option =>
      option.setName("user").setDescription("The user you want the avatar of")
    ),
  async execute(interaction, client) {
    const embed = new EmbedBuilder().setColor(0x034af);
    const user = interaction.options.getUser("user");

    if (user) {
      embed.setTitle(`${user.tag} avatar:`);
      embed.setImage(user.displayAvatarURL({ format: "png", size: 1024 }));
    } else {
      embed.setTitle(`${interaction.user.tag} avatar:`);
      embed.setImage(
        interaction.user.displayAvatarURL({ format: "png", size: 1024 })
      );
    }

    await interaction.reply({
      embeds: [embed],
    });
  },
};
