import { useQueryClientContext } from "./QueryClientProvider";

function wrapPromise(promise: Promise<unknown>) {
  let status = "pending";
  let response: unknown;

  const suspender = promise.then(
    (res) => {
      (status = "success"), (response = res);
    },
    (err) => {
      (status = "error"), (response = err);
    },
  );

  const read = () => {
    console.log("sta", status);
    if (status === "pending") {
      throw suspender;
    } else if (status === "error") {
      throw response;
    } else return response;
  };

  return { read };
}

export function useSuspenseQuery({
  queryKey,
  queryFn,
}: {
  queryKey: any[];
  queryFn: () => Promise<any>;
}) {
  const cacheContext = useQueryClientContext();
  const strQueryKey = JSON.stringify(queryKey);
  if (strQueryKey in cacheContext.cache) {
    return cacheContext.cache[strQueryKey].read();
  }

  const updCache = cacheContext.cache;
  updCache[strQueryKey] = wrapPromise(queryFn());
  cacheContext.setCache(updCache);
  console.log(cacheContext.cache);

  return cacheContext.cache[strQueryKey].read();
}
