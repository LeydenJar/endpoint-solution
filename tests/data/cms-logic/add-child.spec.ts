import { AddChildCmsLogic } from "../../../src/data/cms-logic/add-child.cms-logic";
import { FilesDataHolder } from "../../../src/data/data-holders/files.data-holder";
import { FileEntity } from "../../../src/domain/entities/file";

describe("addChild", () => {
  let parent = FilesDataHolder.mainFile;
  let file = new FileEntity({
    name: "child",
    children: [],
    path: "parent/child",
    parent: null,
  });
  let params = {
    parent,
    file,
  };
  let cmsLogic = new AddChildCmsLogic();

  it("Should add the parent to the child object", () => {
    cmsLogic.execute(params);

    expect(parent.children.length).toBe(1);
    expect(parent.children[0].name).toMatchObject(file);
  });

  it("Should add a child to the parent object", () => {
    cmsLogic.execute(params);

    expect(parent.children.length).toBe(1);
    expect(parent.children[0].name).toMatchObject(file);
  });
});
