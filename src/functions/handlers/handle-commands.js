const { REST } = require("@discordjs/rest");
const { Routes } = require("discord.js");
const fs = require("fs");
const {
  dev,
  devClientId,
  devGuildId,
  clientId,
} = require("../../../config.json");

module.exports = client => {
  client.handleCommands = async () => {
    console.log("Commands are now loading...");
    const commandFolders = fs.readdirSync("./src/commands");
    for (const folder of commandFolders) {
      const commandFiles = fs
        .readdirSync(`./src/commands/${folder}`)
        .filter(file => file.endsWith(".js"));

      const { commands, commandArray } = client;
      for (const file of commandFiles) {
        const command = require(`../../commands/${folder}/${file}`);
        commands.set(command.data.name, command);
        commandArray.push(command.data.toJSON());
        console.log(`Command [${command.data.name}] loaded...`);
      }
    }

    const rest = new REST({ version: "10" });

    if (dev) {
      rest.setToken(process.env.DEV_TOKEN);
      rest
        .put(Routes.applicationGuildCommands(devClientId, devGuildId), {
          body: client.commandArray,
        })
        .then(() => console.log("Loaded all slash commands..."))
        .catch(error => console.error(error));
    } else {
      rest.setToken(process.env.TOKEN);
      rest
        .put(Routes.applicationCommands(clientId), {
          body: client.commandArray,
        })
        .then(() => console.log("Loaded all slash commands..."))
        .catch(error => console.error(error));
    }
  };
};
