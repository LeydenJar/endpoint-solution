import fileRepository from "../../data/file.repository";
import { Command } from "./command";

export class MoveCommand implements Command<any> {
  public get executionLog() {
    return (
      "Moving file " + this.filePath + " to " + this.destinationPath + "..."
    );
  }

  filePath: string;
  destinationPath: string;

  //TODO make this an interface
  constructor(params: { filePath: string; destinationPath: string }) {
    this.filePath = params.filePath;
    this.destinationPath = params.destinationPath;
  }

  execute(): void {
    //Get the file
    const file = fileRepository.getFile(this.filePath);

    //Get the destination file
    const destinationFile = fileRepository.getFile(this.destinationPath);

    if (!file || !destinationFile) {
      throw new Error("File not found");
    }

    //Delete file from it's parent's children
    const parent = file.parent;
    if (parent) {
      fileRepository.removeChild(parent, file);
    }

    //Add file as children of destination file
    fileRepository.addChild(destinationFile, file);
  }
}
