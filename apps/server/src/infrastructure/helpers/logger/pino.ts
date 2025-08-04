import pino, { LoggerOptions } from "pino";

console.log(process.env["HOST"], process.env["PROTOCOL"])
const isProd = process.env["NODE_ENV"] === "production";

const config: LoggerOptions  = isProd
  ? {}
  : {
  transport: {
    target: 'pino-pretty',
    options: {
      translateTime: 'HH:MM:ss.l',
      ignore: 'pid,hostname',
      singleLine: false,
    },
  },
}

export const logger_pino = pino(config)
logger_pino.info('Салам алейкум')

