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
    console.log('sta', status)
    if (status === "pending") {
      throw suspender;
    } else if (status === "error") {
      throw response;
    } else return response;
  };

  return { read };
}

const cache: { [k: string]: { read: () => unknown } } = {}

export function useQuery(
  //   {
  //   queryKey,
  //   queryFn,

  // } : {
  //   queryKey: any[],
  //   queryFn: () => Promise<any>,

  // }
  url: string,
) {
  if(url in cache) {
    return cache[url].read();
  }

  cache[url] = wrapPromise(fetch(url)
    .then((res) => res.json())
    // @ts-ignore
    .then((res) => res));

  return cache[url].read();
}
