const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { addReminder } = require("../../utils/reminders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("reminder")
    .setDescription("Add a reminder")
    .addStringOption(option =>
      option
        .setName("reminder")
        .setDescription("The content of the reminder")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    const embed = new EmbedBuilder().setColor(0x034af).setTitle("LunaBot");

    const userId = interaction.user.id;
    const reminder = interaction.options.getString("reminder");

    try {
      await addReminder(userId, reminder);
      embed.setDescription("Your reminder has been added!");
    } catch (error) {
      console.log(error);
      embed.setDescription(
        "**ERROR:** Something went wrong executing this command :("
      );
    }

    await interaction.reply({
      embeds: [embed],
      ephemeral: true,
    });
  },
};
