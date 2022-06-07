export class ArgsHandler {
  constructor() {
    this.args["nodePath"] = process.argv[0];
    this.args["filePath"] = process.argv[1];
    process.argv.slice(2).forEach((arg) => {
      const split = arg.split("=");
      this.args[split[0]] = split[1];
    });
  }

  args: { [key: string]: any } = {};

  getArg(arg: string) {
    return this.args[arg];
  }
}
