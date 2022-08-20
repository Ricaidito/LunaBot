const { REST } = require("@discordjs/rest");
const { Routes } = require("discord.js");
const fs = require("fs");

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

    const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

    // To register commands only in the development server
    // rest
    //   .put(
    //     Routes.applicationGuildCommands(
    //       process.env.CLIENT_ID,
    //       process.env.GUILD_ID
    //     ),
    //     {
    //       body: client.commandArray,
    //     }
    //   )
    //   .then(() => console.log("Loaded all slash commands..."))
    //   .catch(error => console.error(error));

    // To register commands globally
    rest
      .put(Routes.applicationCommands(process.env.CLIENT_ID), {
        body: client.commandArray,
      })
      .then(() => console.log("Loaded all slash commands..."))
      .catch(error => console.error(error));
  };
};
