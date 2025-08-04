import { ILogger } from "@apps/server/infrastructure/helpers/logger/logger.controller";
import { logger_pino } from "@apps/server/infrastructure/helpers/logger/pino";

export class PinoService implements ILogger {
  info: ILogger['info'] = (data) => {
    logger_pino.info(data)
  }

  error: ILogger['error'] = (data: any) => {
    logger_pino.error(data)
  }
}
