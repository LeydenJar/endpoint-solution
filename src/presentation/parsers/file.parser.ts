import * as fs from "fs";

export class FileParser {
  constructor(params: FileParserParams) {
    this.filePath = params.inputFile;
    this.fileContent = fs.readFileSync(params.inputFile, "utf8");
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

interface FileParserParams {
  inputFile: string;
}
