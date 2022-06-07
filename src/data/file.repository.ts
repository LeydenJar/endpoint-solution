import { FileEntity } from "../domain/entities/file";
import { CreateFileDataParams } from "./file.params";

export class FileRepository {
  private mainFile: FileEntity = new FileEntity({
    name: "",
    parent: null,
    children: [],
    path: "",
  });

  public createFile(params: CreateFileDataParams): FileEntity {
    const file = new FileEntity(params);
    if (file.parent) {
      file.parent.children.push(file);
      return file;
    }
    this.mainFile.children.push(file);
    return file;
  }

  //TODO Consider using interfaces
  public getFile(path: string): FileEntity | null {
    if (path === "") {
      return this.mainFile;
    }

    if (this.mainFile.children.length === 0) {
      return null;
    }

    const files = path.split("/");
    let currentFile = Object.create(this.mainFile);

    for (const file of files) {
      if (!currentFile?.children?.length) {
        return null;
      }
      currentFile = currentFile.children.find((child) => child.name === file);
      if (!currentFile) {
        return null;
      }
    }
    return currentFile;
  }

  public deleteFile(file: FileEntity): void {
    const parent = file.parent;
    if (!parent) {
      throw new Error("can't delete the main file");
    }
    const index = parent.children.indexOf(file);
    delete parent.children[index];
  }

  public removeChild(parent: FileEntity, file: FileEntity): void {
    const index = parent.children.indexOf(file);
    delete parent.children[index];
    file.parent = null;
  }

  public addChild(parent: FileEntity, file: FileEntity): void {
    parent.children.push(file);
    file.parent = parent;
  }
}

const fileRepository = new FileRepository();
export default fileRepository;
