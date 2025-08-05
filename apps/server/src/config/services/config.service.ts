import { config, DotenvConfigOutput, DotenvParseOutput } from "dotenv";
import { inject, injectable } from "inversify";
import type { ILogger } from "@apps/server/infrastructure/helpers/logger/logger.controller";
import { TYPES } from "@apps/server/config/containers/types";
import { IEnv } from "@apps/server/types/env";

@injectable()
export class ConfigService {
	private config: DotenvParseOutput;

	constructor(
		@inject(TYPES.Utils.LoggerController)
		private readonly logger: ILogger,
	) {
		const result: DotenvConfigOutput = config();

		if (result.error) {
			this.logger.error(result.error);
		}

		this.config = result.parsed as DotenvParseOutput;
	}

	get<T extends keyof IEnv>(key: T): string {
		// HOST PROTOCOL PORT
		if (key === "URL_CLIENT" || key === "URL_SERVER") {
			const separ = "://";
			const protocol = process.env["PROTOCOL"];
			const host = process.env["HOST"];

			if (protocol && host) {
				return protocol + separ + host;
			}
			return this.config[key]!;
		}

		return this.config[key]!;
	}
}
