const spawn = require("await-spawn");
const config = require("../lib/config");

async function run({ phone, text }) {
  const cmd = `echo '${text}' | gammu sendsms TEXT '${phone}' -unicode`;
  await spawn("ssh", ["-t", config.gammuHost, cmd]);
}

module.exports = run;
