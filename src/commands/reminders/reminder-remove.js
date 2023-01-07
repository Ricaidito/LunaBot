const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const {
  removeReminder,
  checkIfExists,
  isMongoIdValid,
} = require("../../utils/reminders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("reminder-remove")
    .setDescription("Removes a reminder given the ID")
    .addStringOption(option =>
      option
        .setName("reminder_id")
        .setDescription("The ID of the reminder you want to delete")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    const embed = new EmbedBuilder().setColor(0x034af).setTitle("LunaBot");

    const userId = interaction.user.id;
    const reminderId = interaction.options.getString("reminder_id");

    try {
      if (
        isMongoIdValid(reminderId) &&
        (await checkIfExists(reminderId, userId))
      ) {
        await removeReminder(reminderId, userId);
        embed.setDescription(`Reminder \`${reminderId}\` has been deleted!`);
      } else embed.setDescription("**ERROR**: Ivalid reminder ID");
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
