import { FileEntity } from "../../domain/entities/file";

export class FilesDataHolder {
  static mainFile: FileEntity = new FileEntity({
    name: "",
    parent: null,
    children: [],
    path: "",
  });
}
