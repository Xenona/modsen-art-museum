import { ApiController } from "@utils/api/ApiController";
import { useSuspenseQuery } from "@utils/hooks/useFetch";

import { ShortGallery } from "@components/ShortGallery";
import { ApiError } from "@utils/api/ApiError";
import { ServerError } from "@pages/500";
import { BottomText } from "@components/SectionHeader/styles";

export function SearchResults({ debouncedQuery }: { debouncedQuery: string }) {
  if (debouncedQuery.length < 0) return;

  const data = useSuspenseQuery({
    queryKey: ["search", debouncedQuery],
    queryFn: () => ApiController.getSearch({ q: debouncedQuery }),
  });

  return (
    <>
      {debouncedQuery.length > 0 ? (
        data instanceof ApiError || error ? (
          <ServerError />
        ) : data && data.length ? (
          <ShortGallery artworks={data} />
        ) : (
          <BottomText>Nothing was found!</BottomText>
        )
      ) : null}
    </>
  );
}
