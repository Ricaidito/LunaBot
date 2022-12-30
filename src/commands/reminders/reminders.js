const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { getReminders } = require("../../utils/reminders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("reminders")
    .setDescription("See your reminders"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder().setColor(0x034af).setTitle("LunaBot");

    const userId = interaction.user.id;
    const reminders = await getReminders(userId);

    if (reminders.length) {
      embed.setDescription("Your reminders:");
      embed.addFields(
        reminders.map(({ _id, content }) => ({
          name: `\`${_id.toString()}\``,
          value: `- ${content}`,
        }))
      );
    } else
      embed.setDescription(
        "No reminders to show, you can add them with the `/add-reminder` command."
      );

    await interaction.reply({
      embeds: [embed],
      ephemeral: true,
    });
  },
};
