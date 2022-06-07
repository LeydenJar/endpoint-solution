import { Logger } from "../../core/util/logger";
import fileRepository from "../../data/file.repository";
import { FileEntity } from "../entities/file";
import { Command } from "./command";

export class ListCommand implements Command<string> {
  private logger = new Logger("ListCommand");
  get executionLog(): string {
    return "Listing...";
  }

  execute(): void {
    const mainFile = fileRepository.getFile("") as FileEntity;
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
