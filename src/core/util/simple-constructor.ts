export class SimpleConstructor<P> {
  constructor(params: P) {
    Object.keys(params).forEach((key) => {
      this[key] = params[key];
    });
  }
}
