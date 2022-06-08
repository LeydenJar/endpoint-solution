import { AddChildCmsLogic } from "../../../src/data/cms-logic/add-child.cms-logic";
import { FileEntity } from "../../../src/domain/entities/file";

describe("addChild", () => {
  let getParams = () => {
    return {
      parent: new FileEntity({
        name: "parent",
        children: [],
        parent: null,
        path: "parent",
      }),
      file: new FileEntity({
        name: "child",
        children: [],
        path: "parent/child",
        parent: null,
      }),
    };
  };

  let cmsLogic = new AddChildCmsLogic();

  it("Should add the parent to the child object", () => {
    let params = getParams();
    let { parent, file } = params;
    cmsLogic.execute(params);

    expect(file.parent).toBeDefined();
    expect(file.parent).toMatchObject(parent);
  });

  it("Should add a child to the parent object", () => {
    let params = getParams();
    let { parent, file } = params;

    cmsLogic.execute(params);

    expect(parent.children.length).toBe(1);
    expect(parent.children[0]).toMatchObject(file);
  });
});
