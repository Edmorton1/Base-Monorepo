import { logger_pino } from "@apps/server/infrastructure/helpers/logger/pino";
import { HttpError } from "@libs/shared/CONST";
import { NextFunction, Request, Response } from "express";

export const expressError = (
	err: any,
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	logger_pino.error({ message: err.message, stack: err.stack });

	if (err instanceof HttpError) {
		logger_pino.error({ OSHIBKA: err.message });
		if (err.message) {
			res.status(err.code).send(err.message);
		} else {
			res.sendStatus(err.code);
		}
	} else {
		res.status(500).json({ message: err.message, stack: err.stack });
	}
};

