import { FavStorage } from "./FavStorage";

const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem(key: string) {
      return store[key] || null;
    },
    setItem(key: string, value: string) {
      store[key] = value;
    },
    removeItem(key: string) {
      delete store[key];
    },
    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

describe("FavStorage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  it("should return an empty array if localStorage is empty or contains invalid data", () => {
    localStorage.setItem(FavStorage.KEY, JSON.stringify("invalid data"));
    expect(FavStorage.getAllIds()).toEqual([]);

    localStorage.setItem(
      FavStorage.KEY,
      JSON.stringify([1, 2, "string", -1, 99999999999999999999]),
    );
    expect(FavStorage.getAllIds()).toEqual([]);
  });

  it("should add a new id to the list", () => {
    const setItemSpy = jest.spyOn(localStorage, "setItem");

    localStorage.setItem(FavStorage.KEY, JSON.stringify([1, 2, 3]));
    FavStorage.setId(4);

    expect(setItemSpy).toHaveBeenCalledWith(
      FavStorage.KEY,
      JSON.stringify([1, 2, 3, 4]),
    );
  });

  it("should remove an id from the list", () => {
    const setItemSpy = jest.spyOn(localStorage, "setItem");

    localStorage.setItem(FavStorage.KEY, JSON.stringify([1, 2, 3, 4]));
    FavStorage.removeId(3);

    expect(setItemSpy).toHaveBeenCalledWith(
      FavStorage.KEY,
      JSON.stringify([1, 2, 4]),
    );
  });

  it("should check if an id exists in the list", () => {
    localStorage.setItem(FavStorage.KEY, JSON.stringify([1, 2, 3]));

    expect(FavStorage.idExists(2)).toBe(true);
    expect(FavStorage.idExists(4)).toBe(false);
  });
});
