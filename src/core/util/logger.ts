import chalk from "chalk";
import * as util from "util";

export class Logger {
  colors = {
    debug: chalk.green,
    info: chalk.blue,
    warn: chalk.yellow,
    error: chalk.red,
  };

  constructor(readonly name: string) {}

  inspect(obj) {
    console.log(
      this.colors.debug(`[${this.name}]: ${util.inspect(obj, { depth: 5 })}`)
    );
  }

  log(message) {
    console.log(`[${this.name}]: ${message}`);
  }

  debug(message) {
    console.debug(this.colors.debug(`[${this.name}]: ${message}`));
  }

  info(message) {
    console.info(this.colors.info(`[${this.name}]: ${message}`));
  }

  warn(message) {
    console.warn(this.colors.warn(`[${this.name}]: ${message}`));
  }

  error(message) {
    console.error(this.colors.error(`[${this.name}]: ${message}`));
  }
}
