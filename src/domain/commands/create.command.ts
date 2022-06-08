import { SimpleConstructor } from "../../core/util/simple-constructor";
import { Command } from "../../core/architecture/command";
import { FileRepositoryAbstraction } from "../repositories/file.repository.abstraction";
import { Logger } from "../../core/util/logger";

export class CreateCommand
  extends SimpleConstructor<CreateCommandParams>
  implements Command
{
  private logger = new Logger(CreateCommand.name);
  private filePath: string;
  private fileRepository: FileRepositoryAbstraction;

  public get executionLog(): string {
    return "Creating " + this.filePath + "...";
  }

  execute(): void {
    if (this.fileRepository.getFile({ path: this.filePath })) {
      this.logger.error(`File ${this.filePath} already exists`);
      return;
    }

    const fileNames = this.filePath.split("/");
    let paths: string[] = [];

    for (let i = 0; i < fileNames.length; i++) {
      let filePath = fileNames.slice(0, i + 1).join("/");
      paths.push(filePath);
    }

    let lastCreated = this.fileRepository.getFile({ path: "" });

    paths.forEach((path, index) => {
      if (!this.fileRepository.getFile({ path })) {
        lastCreated = this.fileRepository.createFile({
          name: fileNames[index],
          parent: lastCreated,
          children: [],
          path: path,
        });
      } else {
        lastCreated = this.fileRepository.getFile({ path });
      }
    });
  }
}

interface CreateCommandParams {
  filePath: string;
  fileRepository: FileRepositoryAbstraction;
}
