export class FileEntity {
  //TODO: Use SimpleConstructor
  constructor(params: FileEntityParams) {
    this.parent = params.parent;
    this.name = params.name;
    this.children = params.children;
    this.path = params.path;
  }

  parent?: FileEntity | null;
  children: FileEntity[] = [];
  name: string;
  path: string;
}

export interface FileEntityParams {
  parent?: FileEntity | null;
  children: FileEntity[];
  name: string;
  path: string;
}
