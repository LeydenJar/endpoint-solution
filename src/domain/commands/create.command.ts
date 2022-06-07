import fileRepository from "../../data/file.repository";
import { Command } from "./command";

export class CreateCommand implements Command<string> {
  public get executionLog(): string {
    return "Creating " + this.filePath + "...";
  }
  filePath: string;
  //TODO: Consider using interfaces
  constructor(filePath: string) {
    this.filePath = filePath;
  }

  execute(): void {
    //Check if the file doesn't exist yet
    if (fileRepository.getFile(this.filePath)) {
      throw new Error(`File ${this.filePath} already exists`);
    }

    const fileNames = this.filePath.split("/");
    var paths: string[] = [];

    for (let i = 0; i < fileNames.length; i++) {
      let filePath = fileNames.slice(0, i + 1).join("/");
      paths.push(filePath);
    }

    var lastCreated = fileRepository.getFile("");

    paths.forEach((path, index) => {
      if (!fileRepository.getFile(path)) {
        lastCreated = fileRepository.createFile({
          name: fileNames[index],
          parent: lastCreated,
          children: [],
          path: path,
        });
      }
    });
  }
}
