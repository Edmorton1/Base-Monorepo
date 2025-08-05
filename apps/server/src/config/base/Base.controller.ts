import { NextFunction, Request, Response, Router } from "express";
import { authGet, authPost, noAuthGet, noAuthPost } from "@apps/server/config/middlewares/Express.ratelimiter";
import { logger_pino } from "@apps/server/infrastructure/helpers/logger/pino";

export interface IControllerRoute {
	path: string;
	handle: (req: Request, res: Response) => Promise<void>;
	method: keyof Pick<Router, "get" | "post" | "delete" | "patch" | "put">;
	middlewares?: ((req: Request, res: Response, next: NextFunction) => any)[]; //Сами допишите тип для Middlware типа :)
}

export class BaseController {
	private readonly _router: Router;
	constructor() {
		this._router = Router();
	}

	get router(): Router {
		return this._router;
	}

	protected bindRoutes(routes: IControllerRoute[]): void {
		for (const route of routes) {
			// logger.info({ route });
			if (!route.middlewares?.length) route.middlewares = [];
			const isGet = route.method === "get";
			const isAuth = route.middlewares.some(m => m.name === "OnlyAuth" || "OnlyAdmin");

			if (isAuth) {
				route.middlewares.unshift(isGet ? authGet : authPost);
			} else {
				route.middlewares.unshift(isGet ? noAuthGet : noAuthPost);
			}

			const pipline = [...route.middlewares, route.handle];

			logger_pino.info({ binded: `${route}` });
			this.router[route.method](route.path, ...pipline);
		}
	}
}
