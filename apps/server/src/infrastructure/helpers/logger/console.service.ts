import { ILogger } from "@apps/server/infrastructure/helpers/logger/logger.controller";

export class ConsoleService implements ILogger {
	info: ILogger["info"] = data => console.log(data);

	error: ILogger["error"] = data => console.error(data);
}

