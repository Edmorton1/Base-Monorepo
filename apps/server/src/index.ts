import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.resolve(process.cwd(), ".env") });
import { appCont } from "@apps/server/config/containers/appCont.di";
import App from "@apps/server/server/server";
import "@apps/server/types/declarations/index";
import "reflect-metadata";
import { connectRedis } from "@apps/server/infrastructure/helpers/databases/redis/redis";
import { TYPES } from "@apps/server/config/containers/types";

(async () => {
	connectRedis();

	const app = appCont.get<App>(TYPES.App.App);

	await app.init();
})()
