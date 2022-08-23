const madCatEmoji = ":pouting_cat:";

module.exports = messageReply = message => {
  if (message.content.toLowerCase().includes("meow")) message.reply("Meow!");
  if (message.content.toLowerCase().includes("dog")) message.reply(madCatEmoji);
};
