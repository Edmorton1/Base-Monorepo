import App from "@apps/server/server/server";
import ServerExpress from "@apps/server/server/server.express";
import { ContainerModule } from "inversify";
import { ConfigService } from "@apps/server/config/services/config.service";
import { TestController } from "@apps/server/infrastructure/requests/TEST/TESTController";
import { TYPES } from "@apps/server/config/containers/types";
import ServerRoutes from "@apps/server/server/express.routes";

export const appBindings = new ContainerModule(({ bind }) => {
	bind<ServerExpress>(ServerExpress).toSelf();
	bind<ConfigService>(ConfigService).toSelf();
	bind<ServerRoutes>(ServerRoutes).toSelf();
	bind<TestController>(TYPES.Controllers.Test).to(TestController);
	bind<App>(App).toSelf();
});
