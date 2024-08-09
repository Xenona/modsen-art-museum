export interface IFavStorageContext {
  save: (id: number) => void;
  remove: (id: number) => void;
  getAll: () => number[];
  check: (id: number) => boolean;
}
