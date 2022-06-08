import { SimpleConstructor } from "../../core/util/simple-constructor";
import { Command } from "../../core/architecture/command";
import { FileRepositoryAbstraction } from "../repositories/file.repository.abstraction";

export class DeleteCommand
  extends SimpleConstructor<DeleteCommandParams>
  implements Command
{
  public get executionLog(): string {
    return `Deleting ${this.filePath}...`;
  }

  private filePath: string;
  private fileRepository: FileRepositoryAbstraction;

  execute(): void {
    const file = this.fileRepository.getFile({ path: this.filePath });
    if (!file) {
      throw new Error(`File ${this.filePath} doesn't exist`);
    }
    this.fileRepository.deleteFile({ file });
  }
}

interface DeleteCommandParams {
  filePath: string;
  fileRepository: FileRepositoryAbstraction;
}
