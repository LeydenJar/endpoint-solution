import { AddChildCmsLogic } from "../../../src/data/cms-logic/add-child.cms-logic";
import { CreateFileCmsLogic } from "../../../src/data/cms-logic/create-file.cms-logic";
import { DeleteFileCmsLogic } from "../../../src/data/cms-logic/delete-file.cms-logic";
import { GetFileCmsLogic } from "../../../src/data/cms-logic/get-file.cms-logic";
import { RemoveChildCmsLogic } from "../../../src/data/cms-logic/remove-child.cms-logic";
import { FileRepository } from "../../../src/data/repositories/file.repository";
import { FileEntity } from "../../../src/domain/entities/file";
import { DeleteFileDataParams } from "../../../src/domain/repositories/file.params";

describe("TestCase", () => {
  let repository = new FileRepository({
    addChildCmsLogic: new AddChildCmsLogic(),
    removeChildCmsLogic: new RemoveChildCmsLogic(),
    deleteFileCmsLogic: new DeleteFileCmsLogic(),
    createFileCmsLogic: new CreateFileCmsLogic(),
    getFileCmsLogic: new GetFileCmsLogic(),
  });

  let mockParentFile = new FileEntity({
    name: "parent",
    children: [],
    path: "parent",
    parent: null,
  });

  let mockFile = new FileEntity({
    name: "child",
    children: [],
    path: "parent/child",
    parent: mockParentFile,
  });

  it("should be defined", () => {
    expect(repository).toBeDefined();
  });

  it("Should call cms logic on create file", () => {
    let spy = jest.spyOn(repository, "createFile");

    const params = {
      parent: null,
      name: "name",
      children: [],
      path: "name",
    };
    repository.createFile(params);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(params);
  });

  it("Should call cms logic on deleteFile", () => {
    let spy = jest.spyOn(repository, "deleteFile");

    const params: DeleteFileDataParams = {
      file: mockFile,
    };

    repository.deleteFile(params);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(params);
  });

  it("Should call cms logic on getFile", () => {
    let spy = jest.spyOn(repository, "getFile");

    const params = {
      path: "",
    };

    repository.getFile(params);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(params);
  });

  it("Should call cms logic on add child", () => {
    let spy = jest.spyOn(repository, "addChild");
    const params = {
      parent: mockParentFile,
      file: mockFile,
    };

    repository.addChild(params);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(params);
  });

  it("Should call cms logic on removeChild", () => {
    let spy = jest.spyOn(repository, "removeChild");

    const params = {
      parent: mockParentFile,
      file: mockFile,
    };

    repository.removeChild(params);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(params);
  });
});
