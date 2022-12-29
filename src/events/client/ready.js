const { dev } = require("../../../config.json");

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    client.pickPresence();
    setInterval(client.pickPresence, 300 * 1000);
    if (dev) console.log(">>> DEV INSTANCE <<<");
    else console.log(`>>> ${client.user.tag} up and running! <<<`);
  },
};
