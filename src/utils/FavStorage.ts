export class FavStorage {
  static KEY = 'favs';

  public static getAllIds(): number[] {
    const ids: number[] = JSON.parse(
      localStorage.getItem(FavStorage.KEY) ?? '[]',
    );

    if (!Array.isArray(ids)) {
      localStorage.setItem(FavStorage.KEY, '[]');
      return [];
    }

    const filteredIds = ids.filter((id) => {
      if (typeof id === 'number') {
        if (id > 0 && id <= Number.MAX_SAFE_INTEGER) {
          return true;
        }
      }
      return false;
    });

    return filteredIds;
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
}
