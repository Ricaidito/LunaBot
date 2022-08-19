module.exports = messageReply = message => {
  if (
    message.content.toLowerCase() === "owo kiss <@755890198457614398>" ||
    message.content.toLowerCase().includes("owo kiss <@755890198457614398>")
  )
    message.reply(">:(");
  else if (message.content.toLowerCase().includes("meow"))
    message.reply("Meow!");
  else if (message.content.toLowerCase().includes("i love you"))
    message.reply("I love you more");
};
