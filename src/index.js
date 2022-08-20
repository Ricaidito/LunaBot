const { Client, Collection, GatewayIntentBits } = require("discord.js");
const { dev } = require("../config.json");
const fs = require("fs");
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.commands = new Collection();
client.commandArray = [];

const functionsFolders = fs.readdirSync("./src/functions");
for (const folder of functionsFolders) {
  const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter(file => file.endsWith(".js"));

  for (const file of functionFiles)
    require(`./functions/${folder}/${file}`)(client);
}

client.handleEvents();
client.handleCommands();

if (dev) client.login(process.env.DEV_TOKEN);
else client.login(process.env.TOKEN);
