import { Logger, transports } from "winston";

export const logger = new Logger({
  level: "verbose",
  transports: [new transports.Console()]
});
