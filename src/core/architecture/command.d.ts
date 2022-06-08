export abstract class Command {
  public abstract get executionLog(): string;
  abstract execute(): void;
}
