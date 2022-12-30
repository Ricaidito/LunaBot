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
          name: "`/invite`",
          value: "Get an invitation link of Luna",
        },
        {
          name: "`/ping`",
          value: "Luna replies with **Pong!**",
        },
        {
          name: "`/luna`",
          value: "Get a random picture of Luna",
        },
        {
          name: "`/avatar <user>`",
          value: "Get your avatar or the avatar of the specified user",
        },
        {
          name: "`/reminders`",
          value: "Get your reminders",
        },
        {
          name: "`/reminder <reminder>`",
          value: "Add a reminder to your reminders list",
        },
        {
          name: "`/reminder-remove <reminder_id>`",
          value: "Removes the reminder with the specified `reminder_id`",
        },
      ]);

    await interaction.reply({
      embeds: [embed],
    });
  },
};
