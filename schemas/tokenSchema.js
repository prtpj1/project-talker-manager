const Joi = require('joi');

const tokenSchema = Joi.object({
  token: Joi.string()
  .required()
  .length(16)
  .messages({
    'any.required': 'Token não encontrado',
    'string.length': 'Token inválido',
  }),
});

module.exports = tokenSchema;