export type Cache = { [key: string]: () => unknown };

export interface IQueryClientContext {
  cache: Cache;
}
