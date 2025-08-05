import path from "path";

console.log(path.resolve(process.cwd(), ".env"));

import dotenv from "dotenv";
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

import { appCont } from "@apps/server/config/containers/appCont.di";
import App from "@apps/server/server/server";
import "@apps/server/types/declarations/index";
import "reflect-metadata";
import { connectRedis } from "@apps/server/infrastructure/helpers/databases/redis/redis";

async function bootstrap(): Promise<void> {
	connectRedis();

	const app = appCont.get<App>(App);

	await app.init();
}

export const boot = bootstrap();
