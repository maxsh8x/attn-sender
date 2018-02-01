const { runTasks } = require("./task");

async function run() {
  await runTasks();
}

run().catch(error => console.error(error.stack));