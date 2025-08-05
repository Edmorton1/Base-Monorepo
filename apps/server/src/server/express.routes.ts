import { Router } from "express";
import { TYPES } from "@apps/server/config/containers/types";
import { BaseController } from "@apps/server/config/base/Base.controller";
import { appCont } from "@apps/server/config/containers/appCont.di";

class ServerRoutes {
	router: Router;

	constructor() {
		this.router = Router();
		const controllesSymbols = [...Object.values(TYPES.Controllers)];

		controllesSymbols.forEach(sym => {
			const controller: BaseController = appCont.get(sym);
			this.router.use(controller.router);
		});
	}
}

export default ServerRoutes;
