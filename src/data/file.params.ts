import { FileEntity } from "../domain/entities/file";

export interface CreateFileDataParams {
  parent: FileEntity | null;
  name: string;
  children: FileEntity[];
  path: string;
}
