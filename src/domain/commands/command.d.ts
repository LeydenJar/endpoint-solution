export abstract class Command<P> {
  //TODO: Consider using generic on constructor instead of on execute
  constructor(params: P) {}
  public abstract get executionLog(): string;
  abstract execute(): void;
}
