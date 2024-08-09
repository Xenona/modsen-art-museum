import { BottomText } from "@components/SectionHeader/styles";
import { ShortGallery } from "@components/ShortGallery";
import { ServerError } from "@pages/500";
import { ApiController } from "@utils/api/ApiController";
import { ApiError } from "@utils/api/ApiError";
import { useSuspenseQuery } from "@utils/hooks/useFetch";

export function SearchResults({ debouncedQuery }: { debouncedQuery: string }) {
  if (debouncedQuery.length < 0) return;

  const data = useSuspenseQuery({
    queryKey: ["search", debouncedQuery],
    queryFn: () => ApiController.getSearch({ q: debouncedQuery }),
  });

  return (
    <>
      {debouncedQuery.length > 0 ? (
        data instanceof ApiError ? (
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
