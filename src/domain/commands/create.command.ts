import { SimpleConstructor } from "../../core/util/simple-constructor";
import { Command } from "../../core/architecture/command";
import { FileRepositoryAbstraction } from "../repositories/file.repository.abstraction";

export class CreateCommand
  extends SimpleConstructor<CreateCommandParams>
  implements Command
{
  private filePath: string;
  private fileRepository: FileRepositoryAbstraction;

  public get executionLog(): string {
    return "Creating " + this.filePath + "...";
  }

  execute(): void {
    if (this.fileRepository.getFile({ path: this.filePath })) {
      throw new Error(`File ${this.filePath} already exists`);
    }

    const fileNames = this.filePath.split("/");
    var paths: string[] = [];

    for (let i = 0; i < fileNames.length; i++) {
      let filePath = fileNames.slice(0, i + 1).join("/");
      paths.push(filePath);
    }

    var lastCreated = this.fileRepository.getFile({ path: "" });

    paths.forEach((path, index) => {
      if (!this.fileRepository.getFile({ path })) {
        lastCreated = this.fileRepository.createFile({
          name: fileNames[index],
          parent: lastCreated,
          children: [],
          path: path,
        });
      }
    });
  }
}

interface CreateCommandParams {
  filePath: string;
  fileRepository: FileRepositoryAbstraction;
}
