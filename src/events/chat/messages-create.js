const messageReply = require("../../utils/message-reply");

module.exports = {
  name: "messageCreate",
  async execute(msg, client) {
    if (msg.author.bot) return;
    messageReply(msg);
  },
};
