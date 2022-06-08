import { FileEntity } from "../entities/file";
import {
  AddChildDataParams,
  CreateFileDataParams,
  DeleteFileDataParams,
  GetFileDataParams,
  RemoveChildDataParams,
} from "./file.params";

export abstract class FileRepositoryAbstraction {
  abstract createFile(params: CreateFileDataParams): FileEntity;
  abstract getFile(params: GetFileDataParams): FileEntity | null;
  abstract deleteFile(params: DeleteFileDataParams): void;
  abstract removeChild(params: RemoveChildDataParams): void;
  abstract addChild(params: AddChildDataParams): void;
}
