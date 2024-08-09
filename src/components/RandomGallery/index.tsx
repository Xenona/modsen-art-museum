import { ShortGallery } from "@components/ShortGallery";
import { ServerError } from "@pages/500";
import { useSuspenseQuery } from "@utils/hooks/useFetch";
import { ApiController } from "@utils/api/ApiController";
import { ApiError } from "@utils/api/ApiError";

export function RandomGallery() {
  const maxPage = useSuspenseQuery({
    queryKey: ["maxPage"],
    queryFn: () => ApiController.getTotalPages({ limit: 9 }),
  });

  if (maxPage instanceof ApiError) return <ServerError />;

  const artworks = useSuspenseQuery({
    queryKey: ["artworks"],
    queryFn: () =>
      ApiController.getPage({
        page: Math.floor(Math.random() * maxPage),
        limit: 9,
      }),
  });

  if (artworks instanceof ApiError) return <ServerError />;

  return <ShortGallery artworks={artworks} />;
}
