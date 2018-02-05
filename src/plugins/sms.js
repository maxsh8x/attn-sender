const spawn = require("await-spawn");
const config = require("../lib/config");

async function run({ phone, text }) {
  const cmd = `gammu-json send '${phone}' '${text}'`;
  await spawn("ssh", ["-t", config.gammuHost, cmd]);
}

module.exports = run;
