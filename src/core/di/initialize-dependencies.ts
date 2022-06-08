import { AddChildCmsLogic } from "../../data/cms-logic/add-child.cms-logic";
import { CreateFileCmsLogic } from "../../data/cms-logic/create-file.cms-logic";
import { DeleteFileCmsLogic } from "../../data/cms-logic/delete-file.cms-logic";
import { GetFileCmsLogic } from "../../data/cms-logic/get-file.cms-logic";
import { RemoveChildCmsLogic } from "../../data/cms-logic/remove-child.cms-logic";
import { FileRepository } from "../../data/repositories/file.repository";
import { InjectionContainer } from "./injection-container";

export function initializeInjectionContainer(): InjectionContainer {
  let container = new InjectionContainer();

  //! Cms Logics
  container.initialize(new AddChildCmsLogic());
  container.initialize(new CreateFileCmsLogic());
  container.initialize(new DeleteFileCmsLogic());
  container.initialize(new GetFileCmsLogic());
  container.initialize(new RemoveChildCmsLogic());

  //! Repository
  container.initialize(
    new FileRepository({
      addChildCmsLogic: container.get(AddChildCmsLogic.name),
      createFileCmsLogic: container.get(CreateFileCmsLogic.name),
      deleteFileCmsLogic: container.get(DeleteFileCmsLogic.name),
      getFileCmsLogic: container.get(GetFileCmsLogic.name),
      removeChildCmsLogic: container.get(RemoveChildCmsLogic.name),
    })
  );

  return container;
}

const injectionContainer = initializeInjectionContainer();

export { injectionContainer };
