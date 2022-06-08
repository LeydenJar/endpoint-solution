import { InjectionContainer } from "../core/di/injection-container";
import { Logger } from "../core/util/logger";
import { FileRepository } from "../data/repositories/file.repository";
import { CommandsEnum } from "../domain/commands/comands.enum";
import { Command } from "../core/architecture/command";
import { CreateCommand } from "../domain/commands/create.command";
import { DeleteCommand } from "../domain/commands/delete.command";
import { ListCommand } from "../domain/commands/list.command";
import { MoveCommand } from "../domain/commands/move.command";

export class CommandInterpreter {
  constructor(readonly injectionContainer: InjectionContainer) {}
  private logger = new Logger(CommandInterpreter.name);

  execute(command: string): void {
    const parsedCommand = this.parseCommand(command);
    if (parsedCommand) {
      this.logger.info(parsedCommand.executionLog);
      parsedCommand.execute();
    }
  }

  parseCommand(command: string): Command | undefined {
    const commandParts = command.split(" ").map((el) => el.trim());
    const commandName = commandParts[0];

    switch (commandName) {
      case CommandsEnum.CREATE:
        return new CreateCommand({
          filePath: commandParts[1],
          fileRepository: this.injectionContainer.get(FileRepository.name),
        });
      case CommandsEnum.LIST:
        return new ListCommand({
          fileRepository: this.injectionContainer.get(FileRepository.name),
        });
      case CommandsEnum.DELETE:
        return new DeleteCommand({
          filePath: commandParts[1],
          fileRepository: this.injectionContainer.get(FileRepository.name),
        });
      case CommandsEnum.MOVE:
        return new MoveCommand({
          filePath: commandParts[1],
          destinationPath: commandParts[2],
          fileRepository: this.injectionContainer.get(FileRepository.name),
        });
      default:
        this.logger.error(`Command ${commandName} not recognized`);
    }
  }
}
