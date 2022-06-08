import { SimpleConstructor } from "../../core/util/simple-constructor";

export class FileEntity extends SimpleConstructor<FileEntityParams> {
  parent?: FileEntity | null;
  children: FileEntity[] = [];
  name: string;
  path: string;
}

export interface FileEntityParams {
  parent?: FileEntity | null;
  children: FileEntity[];
  name: string;
  path: string;
}
