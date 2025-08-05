import { injectable } from "inversify";
import { BaseController } from "@apps/server/config/base/Base.controller";
import { Request, Response } from "express";
import { HttpError } from "@libs/shared/CONST";

@injectable()
export class TestController extends BaseController {
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
		console.log("ZAPROS");
		await Promise.reject(new HttpError(403, "asdasdasdads"));
	};
}

