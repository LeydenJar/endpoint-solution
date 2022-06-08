import { RemoveChildDataParams } from "../../domain/repositories/file.params";

export class RemoveChildCmsLogic
  implements CmsLogic<void, RemoveChildDataParams>
{
  public execute(params: RemoveChildDataParams): void {
    const index = params.parent.children.indexOf(params.file);
    delete params.parent.children[index];
    params.file.parent = null;
  }
}
