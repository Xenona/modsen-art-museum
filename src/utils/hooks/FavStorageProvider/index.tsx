import { FavStorage } from "@utils/storage/FavStorage";
import { createContext, useContext } from "react";
import { IFavStorageContext } from "src/types/favStorage";

const FavStorageContext = createContext<IFavStorageContext>({
  save: () => {
    throw new Error("Use context inside provider");
  },
  remove: () => {
    throw new Error("Use context inside provider");
  },
  getAll: () => {
    throw new Error("Use context inside provider");
  },
  check: () => {
    throw new Error("Use context inside provider");
  },
});

export function FavStorageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FavStorageContext.Provider
      value={{
        save: (id: number) => FavStorage.setId(id),
        remove: (id: number) => FavStorage.removeId(id),
        getAll: () => FavStorage.getAllIds(),
        check: (id: number) => FavStorage.idExists(id),
      }}
    >
      {children}
    </FavStorageContext.Provider>
  );
}

export const useFavStorageContext = () => useContext(FavStorageContext);
