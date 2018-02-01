const Joi = require("joi");

const validators = {
  whatsapp: Joi.object()
  .keys({
    phone: Joi.string(),
    text: Joi.string()
  })
  .with("phone", "text"),
  sms: Joi.object()
  .keys({
    phone: Joi.string(),
    text: Joi.string()
  })
  .with("phone", "text"),
};

module.exports = validators;