import { redisStore } from "@apps/server/infrastructure/helpers/databases/redis/redis";
import { COOKIE_NAME } from "@libs/shared/CONST";
import session from "express-session";

console.log("REDIST DOTENV CONFIG", process.env["SESSION_SECRET"])

export const expressSession = session({
  store: redisStore,
  secret: process.env["SESSION_SECRET"]!,
  name: COOKIE_NAME,
  resave: false,
  saveUninitialized: false,
  cookie: {
    // FIXME: КОГДА БУДЕТ HTTPS ИСПРАВИТЬ
    // БЫЛО true
    secure: false,
    maxAge: 1000 * 60 * 60 * 600,
    httpOnly: true,
    // БЫЛО none
    sameSite: "lax"
  },
  // rolling: true
})
