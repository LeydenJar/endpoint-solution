import { FileEntity } from "../../domain/entities/file";
import { CreateFileDataParams } from "../../domain/repositories/file.params";
import { FilesDataHolder } from "../data-holders/files.data-holder";

export class CreateFileCmsLogic
  implements CmsLogic<FileEntity, CreateFileDataParams>
{
  public execute(params: CreateFileDataParams): FileEntity {
    const file = new FileEntity(params);
    if (file.parent) {
      file.parent.children.push(file);
      return file;
    }
    FilesDataHolder.mainFile.children.push(file);
    return file;
  }
}
