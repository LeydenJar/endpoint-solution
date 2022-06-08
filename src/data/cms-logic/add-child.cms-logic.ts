import { AddChildDataParams } from "../../domain/repositories/file.params";

export class AddChildCmsLogic implements CmsLogic<void, AddChildDataParams> {
  public execute(params: AddChildDataParams): void {
    params.parent.children.push(params.file);
    params.file.parent = params.parent;
  }
}
