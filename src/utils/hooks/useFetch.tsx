import { useQueryClientContext } from "./QueryClientProvider";

function wrapPromise<T>(promise: Promise<T>) {
  let status = "pending";
  let response: T;

  const suspender = promise.then(
    (res) => {
      (status = "success"), (response = res);
    },
    (err) => {
      (status = "error"), (response = err);
    },
  );

  const read = () => {
    if (status === "pending") {
      throw suspender;
    } else if (status === "error") {
      throw response;
    } else return response;
  };

  return read;
}

export function useSuspenseQuery<T>({
  queryKey,
  queryFn,
}: {
  queryKey: any[];
  queryFn: () => Promise<T>;
}): T {
  const cacheContext = useQueryClientContext();
  const strQueryKey = JSON.stringify(queryKey);
  if (strQueryKey in cacheContext.cache) {
    return (cacheContext.cache[strQueryKey] as () => T)();
  }

  cacheContext.cache[strQueryKey] = wrapPromise<T>(queryFn());

  return (cacheContext.cache[strQueryKey] as () => T)();
}
