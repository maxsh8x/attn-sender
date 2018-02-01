const whatsappSend = require("../plugins/whatsapp");
const smsSend = require("../plugins/sms");

const processers = {
  whatsapp: whatsappSend,
  sms: smsSend
};

module.exports = processers;
