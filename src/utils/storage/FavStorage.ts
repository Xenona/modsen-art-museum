import { favStorageSchema } from "./FavStorageSchema";

export class FavStorage {
  static KEY = "favs";

  public static getAllIds(): number[] {
    let rawIds: unknown[];
    try {
      rawIds = JSON.parse(localStorage.getItem(FavStorage.KEY) ?? "[]");
    } catch (e) {
      localStorage.setItem(FavStorage.KEY, "[]");
      rawIds = [];
    }

    const parsedIds = favStorageSchema.safeParse(rawIds);
    if (!parsedIds.success) {
      localStorage.setItem(FavStorage.KEY, "[]");
      return [];
    }

    return parsedIds.data;
  }

  public static setId(id: number) {
    const ids = FavStorage.getAllIds();
    ids.push(id);
    localStorage.setItem(FavStorage.KEY, JSON.stringify(ids));
  }

  public static removeId(rmId: number) {
    const ids = FavStorage.getAllIds();
    const withoutGivenId = ids.filter((id) => id != rmId);
    localStorage.setItem(FavStorage.KEY, JSON.stringify(withoutGivenId));
  }

  public static idExists(id: number): boolean {
    const ids = FavStorage.getAllIds();
    return ids.includes(id);
  }
}
