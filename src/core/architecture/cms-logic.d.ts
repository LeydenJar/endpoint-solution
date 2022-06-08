abstract class CmsLogic<T, P> {
  abstract execute(param?: P): T;
}
