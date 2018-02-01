const amqp = require("amqplib");
const config = require("../lib/config");

const processers = require("./processers");
const validators = require("./validators");

async function runTasks() {
  const amqpConn = await amqp.connect(config.amqp.host);
  const amqpCh = await amqpConn.createChannel();
  amqpCh.qos(1);

  for (let queue of [...Object.keys(validators), "error"]) {
    await amqpCh.assertQueue(queue, { durable: true });
  }

  Object.keys(validators).forEach(name => {
    amqpCh.consume(name, async msg => {
      try {
        const data = JSON.parse(msg.content);
        const isBodyValid = validators[name].validate(data);
        if (isBodyValid.error === null) {
          await processers[name](data);
        } else {
          throw new Error('Invalid json')
        }
      } catch (e) {
        console.error(e);
        amqpCh.sendToQueue("error", Buffer.from(msg.content));
      }
      amqpCh.ack(msg);
    });
  });
}

module.exports = { runTasks };
