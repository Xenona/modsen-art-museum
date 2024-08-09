import { ShortGallery } from "@components/ShortGallery";
import { SEARCH_PAGE_LIMIT } from "@constants/pagination";
import { ServerError } from "@pages/500";
import { ApiController } from "@utils/api/ApiController";
import { ApiError } from "@utils/api/ApiError";
import { useSuspenseQuery } from "@utils/hooks/useFetch";

export function RandomGallery() {
  const maxPage = useSuspenseQuery({
    queryKey: ["maxPage"],
    queryFn: () => ApiController.getTotalPages({ limit: SEARCH_PAGE_LIMIT }),
  });

  if (maxPage instanceof ApiError) return <ServerError />;

  const artworks = useSuspenseQuery({
    queryKey: ["artworks"],
    queryFn: () =>
      ApiController.getPage({
        page: Math.floor(Math.random() * maxPage),
        limit: SEARCH_PAGE_LIMIT,
      }),
  });

  if (artworks instanceof ApiError) return <ServerError />;

  return <ShortGallery artworks={artworks} />;
}
