import { DeleteFileDataParams } from "../../domain/repositories/file.params";

export class DeleteFileCmsLogic
  implements CmsLogic<void, DeleteFileDataParams>
{
  public execute(params: DeleteFileDataParams): void {
    const parent = params.file.parent;
    if (!parent) {
      throw new Error("can't delete the main file");
    }
    const index = parent.children.indexOf(params.file);
    delete parent.children[index];
  }
}
