import fileRepository from "../../data/file.repository";
import { Command } from "./command";

export class DeleteCommand implements Command<any> {
  public get executionLog(): string {
    return `Deleting ${this.filePath}...`;
  }

  filePath: string;

  constructor(filePath: string) {
    this.filePath = filePath;
  }

  execute(): void {
    const file = fileRepository.getFile(this.filePath);
    if (!file) {
      throw new Error(`File ${this.filePath} doesn't exist`);
    }
    fileRepository.deleteFile(file);
  }
}
