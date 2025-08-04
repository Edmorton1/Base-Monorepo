import TYPES from "@apps/server/config/containers/types"
import { inject, injectable } from "inversify"

export interface ILogger {
  info: (...args: any[]) => void,
  error: (...args: any[]) => void
}

@injectable()
export class LoggerController implements ILogger {
  constructor(
    @inject(TYPES.PinoService)
    private readonly logger: ILogger,
  ) {}
  info: ILogger['info'] = (data) => {
    this.logger.info(data)
  }

  error: ILogger['error'] = (data: any) => {
    this.logger.error(data)
  }
}
