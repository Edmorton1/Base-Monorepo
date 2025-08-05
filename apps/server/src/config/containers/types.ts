export const TYPES = {
	App: {
		Server: Symbol.for("app-server"),
		Config: Symbol.for("app-config"),
		Routes: Symbol.for("app-routes"),
		App: Symbol.for("app-app")
	},

	Utils: {
		LoggerService: Symbol.for("services-logger"),
		LoggerController: Symbol.for("controllers-logger"),
		DataBase: Symbol.for("DataBase"),
	},

	Controllers: {
		Test: Symbol.for("controllers-tables-test"),
	},
};
