const spawn = require("await-spawn");
const config = require("../lib/config");

async function run({ phone, text }) {
  const cmd = `gammu-json send '${phone}' '${text}'`;
  const rawResult = await spawn("ssh", ["-t", config.gammuHost, cmd]);
  const parsedResult = JSON.parse(rawResult)
  if (parsedResult[0].result === 'error') {
    throw new Error(parsedResult[0].error)
  }
}

module.exports = run;
