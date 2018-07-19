import Joi from 'joi-browser'

export const domains = {
  alphanum:Joi.string().alphanum().required(),
  email: Joi.string().email().required(),
}
