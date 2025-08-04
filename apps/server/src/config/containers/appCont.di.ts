import utilityBindings from "@apps/server/config/containers/modules/utils.di";
import appBindings from "@apps/server/config/containers/modules/app.di";
import { Container } from "inversify";

const appCont = new Container();
appCont.load(utilityBindings);
appCont.load(appBindings);

export default appCont;
