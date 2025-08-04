import { injectable } from "inversify";
import BaseController from "@apps/server/config/base/Base.controller";
import { Request, Response } from "express";

@injectable()
class TestController extends BaseController {
	constructor() {
		super();
		this.bindRoutes([
			{
				path: `/test`,
				method: "get",
				handle: this.get,
			},
		]);
	}

	get = async (req: Request, res: Response) => {
		res.sendStatus(200)
	};
}

export default TestController;
