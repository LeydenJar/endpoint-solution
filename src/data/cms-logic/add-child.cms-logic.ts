import { FileEntity } from "../../domain/entities/file";
import { AddChildDataParams } from "../../domain/repositories/file.params";

export class AddChildCmsLogic implements CmsLogic<void, AddChildDataParams> {
  public execute(params: AddChildDataParams): void {
    params.parent.children.push(params.file);
    params.file.parent = params.parent;
    this.updatePath(params.file);
  }

  private updatePath(file: FileEntity) {
    file.path = file?.parent?.path + "/" + file.name;
    file.children.forEach((child) => {
      this.updatePath(child);
    });
  }
}
