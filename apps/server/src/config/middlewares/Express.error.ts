import {logger_pino} from "@apps/server/infrastructure/helpers/logger/pino"
import { NextFunction, Request, Response } from "express"

const expressError = (err: any, req: Request, res: Response, next: NextFunction) => {
  logger_pino.error({message: err.message, stack: err.stack})
  res.status(500).json({message: err.message, stack: err.stack})
}

export default expressError