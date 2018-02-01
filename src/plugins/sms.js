const { spawn } = require('child_process');
const config = require("../lib/config");

async function run({ phone, text }) {
  const cmd = `echo '${text}' | gammu sendsms TEXT '${phone}' -unicode`
  spawn('ssh', ['-t', config.gammuHost, cmd]);  
}

module.exports = run;