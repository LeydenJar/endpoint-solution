import { SimpleConstructor } from "../../core/util/simple-constructor";
import { FileEntity } from "../../domain/entities/file";
import {
  AddChildDataParams,
  CreateFileDataParams,
  DeleteFileDataParams,
  GetFileDataParams,
  RemoveChildDataParams,
} from "../../domain/repositories/file.params";
import { FileRepositoryAbstraction } from "../../domain/repositories/file.repository.abstraction";
import { AddChildCmsLogic } from "../cms-logic/add-child.cms-logic";
import { CreateFileCmsLogic } from "../cms-logic/create-file.cms-logic";
import { DeleteFileCmsLogic } from "../cms-logic/delete-file.cms-logic";
import { GetFileCmsLogic } from "../cms-logic/get-file.cms-logic";
import { RemoveChildCmsLogic } from "../cms-logic/remove-child.cms-logic";

export class FileRepository
  extends SimpleConstructor<FileRepositoryParams>
  implements FileRepositoryAbstraction
{
  private addChildCmsLogic: AddChildCmsLogic;
  private createFileCmsLogic: CreateFileCmsLogic;
  private deleteFileCmsLogic: DeleteFileCmsLogic;
  private getFileCmsLogic: GetFileCmsLogic;
  private removeChildCmsLogic: RemoveChildCmsLogic;

  public createFile(params: CreateFileDataParams): FileEntity {
    return this.createFileCmsLogic.execute(params);
  }

  public getFile(params: GetFileDataParams): FileEntity | null {
    return this.getFileCmsLogic.execute(params);
  }

  public deleteFile(params: DeleteFileDataParams): void {
    return this.deleteFileCmsLogic.execute(params);
  }

  public removeChild(params: RemoveChildDataParams): void {
    return this.removeChildCmsLogic.execute(params);
  }

  public addChild(params: AddChildDataParams): void {
    return this.addChildCmsLogic.execute(params);
  }
}

interface FileRepositoryParams {
  addChildCmsLogic: AddChildCmsLogic;
  createFileCmsLogic: CreateFileCmsLogic;
  deleteFileCmsLogic: DeleteFileCmsLogic;
  getFileCmsLogic: GetFileCmsLogic;
  removeChildCmsLogic: RemoveChildCmsLogic;
}
