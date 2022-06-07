import { CommandInterpreter } from "./presentation/command-interpreter";
import { config } from "./core/config";
import { ArgsHandler } from "./core/util/arg-handler";
import { FileParser } from "./presentation/parsers/file.parser";

function main(): void {
  const commandInterpreter = new CommandInterpreter();
  const argsHandler = new ArgsHandler();
  const inputFile = argsHandler.getArg("inputFile") || config.defaultInputFile;
  const parser = new FileParser(inputFile);
  let nextCommand;
  while ((nextCommand = parser.getNextCommand())) {
    commandInterpreter.execute(nextCommand);
  }
}

main();
