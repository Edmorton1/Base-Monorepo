export const PREFIX = "/api"
export const COOKIE_NAME = "sessionid"

export class HttpError extends Error {
	code: number;
	constructor(code: number, message?: string) {
		super(message);
		this.code = code;
	}
}
