require('dotenv').config();
const joi = require('@hapi/joi');

const envVarsSchema = joi
  .object({
    NODE_ENV: joi
      .string()
      .allow(['development', 'production', 'test', 'staging'])
      .required(),
    PORT: joi.number().default(8080),
  })
  .unknown()
  .required();

const { error, value: envVars } = joi.validate(process.env, envVarsSchema);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV || 'development',
  port: envVars.PORT,
};

module.exports = config;
