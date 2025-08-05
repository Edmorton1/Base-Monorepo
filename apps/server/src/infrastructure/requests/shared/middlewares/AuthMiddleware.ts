import { logger_pino } from "@apps/server/infrastructure/helpers/logger/pino";
import { Request, Response, NextFunction } from "express";
// import SessionRedis from "@app/server/infrastructure/redis/SessionRedis";

export class AuthMiddleware {
	OnlyAuth = (req: Request, res: Response, next: NextFunction) => {
		logger_pino.info({ LOGGER_INFO_SESSION: req.session });

		if (!req.session.userid) return res.sendStatus(401);

		logger_pino.info("ЛОГИНИЗАЦИЯ ПРОШЛА УСПЕШНО");

		next();
		return;
	};

	OnlyAdmin = (req: Request, res: Response, next: NextFunction) => {
		logger_pino.info({ СЕССРЯ: req.session });
		if (!req.session.userid || req.session.role != "admin")
			return res.sendStatus(403);

		next();
		return;
	};
}

