const cron = require("node-cron");

const startJob = () => {
  cron.schedule("*/30 * * * * *", () => {
    console.log(
      "Background Job Running:",
      new Date().toLocaleString()
    );
  });
};

module.exports = startJob;