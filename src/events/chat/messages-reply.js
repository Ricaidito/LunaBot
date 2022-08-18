module.exports = {
  name: "messageCreate",
  async execute(msg, client) {
    if (msg.author.bot) return;
    if (msg.content.toLowerCase().includes("meow")) msg.reply("Meow!");
  },
};
