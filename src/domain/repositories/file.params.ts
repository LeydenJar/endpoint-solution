import { FileEntity } from "../entities/file";

export interface RemoveChildDataParams {
  parent: FileEntity;
  file: FileEntity;
}

export interface GetFileDataParams {
  path: string;
}

export interface DeleteFileDataParams {
  file: FileEntity;
}

export interface CreateFileDataParams {
  parent: FileEntity | null;
  name: string;
  children: FileEntity[];
  path: string;
}

export interface AddChildDataParams {
  parent: FileEntity;
  file: FileEntity;
}
