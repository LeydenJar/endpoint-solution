import { Logger } from "../core/util/logger";
import { CommandsEnum } from "../domain/commands/comands.enum";
import { Command } from "../domain/commands/command";
import { CreateCommand } from "../domain/commands/create.command";
import { DeleteCommand } from "../domain/commands/delete.command";
import { ListCommand } from "../domain/commands/list.command";
import { MoveCommand } from "../domain/commands/move.command";

export class CommandInterpreter {
  private logger = new Logger("CommandInterpreter");
  execute(command: string): void {
    const parsedCommand = this.parseCommand(command);
    this.logger.info(parsedCommand.executionLog);
    parsedCommand.execute();
  }

  parseCommand(command: string): Command<any> {
    const commandParts = command.split(" ").map((el) => el.trim());
    const commandName = commandParts[0];

    switch (commandName) {
      case CommandsEnum.CREATE:
        return new CreateCommand(commandParts[1]);
      case CommandsEnum.LIST:
        return new ListCommand();
      case CommandsEnum.DELETE:
        return new DeleteCommand(commandParts[1]);
      case CommandsEnum.MOVE:
        return new MoveCommand({
          filePath: commandParts[1],
          destinationPath: commandParts[2],
        });
      default:
        throw new Error("Unknown command");
    }
  }
}
