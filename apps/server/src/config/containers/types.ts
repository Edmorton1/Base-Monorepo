const TYPES = {	
	PinoService: Symbol.for("services-pino"),
	LoggerController: Symbol.for("controllers-logger"),
	DataBase: Symbol.for("DataBase"),

	Controllers: {
		Test: Symbol.for("controllers-tables-test"),
	},
};

// logger.info({ТАЙПС_ГОЙДА: TYPES})

export default TYPES;
