import { createContext, useContext, useState } from "react";

type Cache = { [key: string]: () => unknown };

interface IQueryClientContext {
  cache: Cache;
}

const QueryClientContext = createContext<IQueryClientContext>({
  cache: {},
});

export function QueryClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cache, _] = useState<Cache>({});

  return (
    <QueryClientContext.Provider
      value={{
        cache,
      }}
    >
      {children}
    </QueryClientContext.Provider>
  );
}

export const useQueryClientContext = () => useContext(QueryClientContext);
