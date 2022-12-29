const { ActivityType } = require("discord.js");

module.exports = client => {
  client.pickPresence = async () => {
    const presenceOptions = [
      {
        type: ActivityType.Listening,
        text: "server conversations o.O",
        status: "online",
      },
      {
        type: ActivityType.Playing,
        text: "with Volly ^-^",
        status: "online",
      },
      {
        type: ActivityType.Watching,
        text: "cat videos :p",
        status: "online",
      },
    ];
    const randomOption =
      presenceOptions[Math.floor(Math.random() * presenceOptions.length)];

    client.user.setPresence({
      activities: [
        {
          name: randomOption.text,
          type: randomOption.type,
        },
      ],
      status: randomOption.status,
    });
  };
};
