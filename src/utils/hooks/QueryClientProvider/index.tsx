import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type Cache = { [key: string]: { read: () => unknown } };

interface IQueryClientContext {
  cache: Cache;
  setCache: Dispatch<SetStateAction<Cache>>;
}

const QueryClientContext = createContext<IQueryClientContext>({
  cache: {},
  setCache: () => {
    throw new Error("Use context inside provider");
  },
});

export function QueryClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cache, setCache] = useState<Cache>({});

  console.log(cache);
  return (
    <QueryClientContext.Provider
      value={{
        cache,
        setCache,
      }}
    >
      {children}
    </QueryClientContext.Provider>
  );
}

export const useQueryClientContext = () => useContext(QueryClientContext);
