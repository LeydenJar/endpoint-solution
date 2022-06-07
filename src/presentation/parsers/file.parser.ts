import * as fs from "fs";

export class FileParser {
  constructor(filePath: string) {
    this.filePath = filePath;
    this.fileContent = fs.readFileSync(filePath, "utf8");
    this.commands = this.fileContent.split("\n");
    this.nextCommand = 0;
  }

  getNextCommand() {
    if (this.nextCommand >= this.commands.length) {
      return null;
    }

    const command = this.commands[this.nextCommand];
    this.nextCommand++;
    return command;
  }

  nextCommand: number;
  filePath: string;
  fileContent: string;
  commands: string[];
}
