import { Logger } from "../../core/util/logger";
import { DeleteFileDataParams } from "../../domain/repositories/file.params";

export class DeleteFileCmsLogic
  implements CmsLogic<void, DeleteFileDataParams>
{
  private logger = new Logger(DeleteFileCmsLogic.name);
  public execute(params: DeleteFileDataParams): void {
    const parent = params.file.parent;
    if (!parent) {
      this.logger.error("Can't delete the main file");
      return;
    }
    const index = parent.children.indexOf(params.file);
    delete parent.children[index];
  }
}
