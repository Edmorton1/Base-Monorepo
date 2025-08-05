import { Request } from "express";
import { z } from "zod";

export class SharedValidate {
	OnlyId = (req: Request): number => {
		const id = z.coerce.number().parse(req.params["id"]);
		return id;
	};
}
