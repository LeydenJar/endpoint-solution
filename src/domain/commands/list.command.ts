import { Logger } from "../../core/util/logger";
import { SimpleConstructor } from "../../core/util/simple-constructor";
import { FileEntity } from "../entities/file";
import { Command } from "../../core/architecture/command";
import { FileRepositoryAbstraction } from "../repositories/file.repository.abstraction";

export class ListCommand
  extends SimpleConstructor<ListCommandParams>
  implements Command
{
  private logger = new Logger(ListCommand.name);
  private fileRepository: FileRepositoryAbstraction;

  get executionLog(): string {
    return "Listing...";
  }

  execute(): void {
    const mainFile = this.fileRepository.getFile({ path: "" }) as FileEntity;
    this.logTree(mainFile);
  }

  logTree(file: FileEntity): void {
    this.logSelf(file);
    file.children.forEach((child) => {
      this.logTree(child);
    });
  }

  logSelf(file: FileEntity): void {
    if (file.path === "") {
      return;
    }
    const minus = "--".repeat(file.path.split("/").length - 1);
    this.logger.debug(minus + file.name);
  }
}

interface ListCommandParams {
  fileRepository: FileRepositoryAbstraction;
}
