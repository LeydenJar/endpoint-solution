export class InjectionContainer {
  initialize(dependency) {
    this[dependency.constructor.name] = dependency;
  }

  get(token: string) {
    return this[token];
  }
}
