import { SimpleConstructor } from "../../core/util/simple-constructor";
import { Command } from "../../core/architecture/command";
import { FileRepositoryAbstraction } from "../repositories/file.repository.abstraction";
import { Logger } from "../../core/util/logger";

export class DeleteCommand
  extends SimpleConstructor<DeleteCommandParams>
  implements Command
{
  private logger = new Logger(DeleteCommand.name);
  public get executionLog(): string {
    return `Deleting ${this.filePath}...`;
  }

  private filePath: string;
  private fileRepository: FileRepositoryAbstraction;

  execute(): void {
    const file = this.fileRepository.getFile({ path: this.filePath });
    if (!file) {
      this.logger.error(
        `Can't delete ${this.filePath}. This file doesn't exist`
      );
      return;
    }
    this.fileRepository.deleteFile({ file });
  }
}

interface DeleteCommandParams {
  filePath: string;
  fileRepository: FileRepositoryAbstraction;
}
