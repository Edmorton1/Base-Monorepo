import { ILogger, LoggerController } from "@apps/server/infrastructure/helpers/logger/logger.controller";
import { PinoService } from "@apps/server/infrastructure/helpers/logger/pino.service";
import db, {
	DBType,
} from "@apps/server/infrastructure/helpers/databases/postgres/config/db";
import { ContainerModule } from "inversify";
import TYPES from "@apps/server/config/containers/types";

const utilityBindings = new ContainerModule(({ bind }) => {
	bind<PinoService>(TYPES.PinoService).to(PinoService);
	bind<ILogger>(TYPES.LoggerController).to(LoggerController);
	bind<DBType>(TYPES.DataBase).toConstantValue(db);
});

export default utilityBindings;
