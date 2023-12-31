const Joi = require('joi');

const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

const talkerSchema = Joi.object({
  name: Joi.string()
    .required()
    .min(3)
    .messages({
      'any.required': 'O campo "name" é obrigatório',
      'string.min': 'O "name" deve ter pelo menos 3 caracteres',
    }),
  age: Joi.number()
    .required()
    .integer()
    .min(18)
    .messages({
      'any.required': 'O campo "age" é obrigatório',
      'number.min': 'A pessoa palestrante deve ser maior de idade',
    }),
    talk: Joi.object({
      watchedAt: Joi.string()
      .required()
      .regex(dateRegex)
      .messages({
        'string.pattern.base': 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
        'any.required': 'O campo "watchedAt" é obrigatório',
      }),
      rate: Joi.number()
      .required()
      .integer()
      .min(1)
      .max(5)
      .messages({
        'number.base': 'O campo "rate" deve ser um inteiro de 1 à 5',
        'number.min': 'O campo "rate" deve ser um inteiro de 1 à 5',
        'number.max': 'O campo "rate" deve ser um inteiro de 1 à 5',
        'any.required': 'O campo "rate" é obrigatório',
      }),
    })
    .required()
    .messages({
      'any.required': 'O campo "talk" é obrigatório',
    }),
    });

module.exports = talkerSchema;