/* eslint-disable no-undef */
const { createClient } = require("redis");
const dotenv = require("dotenv");

dotenv.config();
let REDIS_PW = process.env.REDIS_PW;
let REDIS_HOST = process.env.REDIS_HOST;
let REDIS_PORT = process.env.REDIS_PORT;
if (
  !REDIS_PW ||
  !REDIS_HOST ||
  (!REDIS_PORT && process.env.NODE_ENV !== "production")
) {
  REDIS_PW = dotenv.config()?.parsed?.REDIS_PW;
  REDIS_HOST = dotenv.config()?.parsed?.REDIS_HOST;
  REDIS_PORT = dotenv.config()?.parsed?.REDIS_PORT;
}

const redisClient = createClient({
  password: REDIS_PW,
  socket: {
    host: REDIS_HOST,
    port: REDIS_PORT ? parseInt(REDIS_PORT) : 6379,
  },
});

redisClient.on("error", (error) => console.error(`Error : ${error}`));
redisClient.connect();

module.exports = { redisClient };