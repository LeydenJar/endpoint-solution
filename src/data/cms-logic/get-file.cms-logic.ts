import { Logger } from "../../core/util/logger";
import { FileEntity } from "../../domain/entities/file";
import { GetFileDataParams } from "../../domain/repositories/file.params";
import { FilesDataHolder } from "../data-holders/files.data-holder";

export class GetFileCmsLogic
  implements CmsLogic<FileEntity | null, GetFileDataParams>
{
  private logger = new Logger(GetFileCmsLogic.name);
  public execute(params: GetFileDataParams): FileEntity | null {
    if (params.path === "") {
      return FilesDataHolder.mainFile;
    }

    if (FilesDataHolder.mainFile.children.length === 0) {
      return null;
    }

    const files = params.path.split("/");
    let currentFile = Object.create(FilesDataHolder.mainFile);

    for (const file of files) {
      if (!currentFile?.children?.length) {
        return null;
      }

      currentFile = currentFile.children.find((child) => child?.name === file);
      if (!currentFile) {
        return null;
      }
    }
    return currentFile;
  }
}
