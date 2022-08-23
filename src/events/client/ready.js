const { dev } = require("../../../config.json");

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    if (dev) console.log(">>> DEV INSTANCE <<<");
    else console.log(`>>> ${client.user.tag} up and running! <<<`);
  },
};
