export class Favourite {
  static KEY = 'favs';

  public static getAllIds(): number[] {
    const ids: number[] = JSON.parse(
      localStorage.getItem(Favourite.KEY) ?? '[]',
    );
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
    const ids = Favourite.getAllIds();
    ids.push(id);
    localStorage.setItem(Favourite.KEY, JSON.stringify(ids));
  }

  public static removeId(rmId: number) {
    const ids = Favourite.getAllIds();
    const withoutGivenId = ids.filter((id) => id != rmId);
    localStorage.setItem(Favourite.KEY, JSON.stringify(withoutGivenId));
  }
}
