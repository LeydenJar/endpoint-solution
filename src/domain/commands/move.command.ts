import { SimpleConstructor } from "../../core/util/simple-constructor";
import { Command } from "../../core/architecture/command";
import { FileRepositoryAbstraction } from "../repositories/file.repository.abstraction";

export class MoveCommand
  extends SimpleConstructor<MoveCommandParams>
  implements Command
{
  public get executionLog() {
    return (
      "Moving file " + this.filePath + " to " + this.destinationPath + "..."
    );
  }

  private filePath: string;
  private destinationPath: string;
  private fileRepository: FileRepositoryAbstraction;

  execute(): void {
    const file = this.fileRepository.getFile({ path: this.filePath });
    const destinationFile = this.fileRepository.getFile({
      path: this.destinationPath,
    });
    if (!file || !destinationFile) {
      throw new Error("File not found");
    }
    const parent = file.parent;
    if (parent) {
      this.fileRepository.removeChild({ parent, file });
    }
    this.fileRepository.addChild({ parent: destinationFile, file });
  }
}

interface MoveCommandParams {
  filePath: string;
  destinationPath: string;
  fileRepository: FileRepositoryAbstraction;
}
