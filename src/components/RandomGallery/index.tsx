import { ShortGallery } from "@components/ShortGallery";
import { ServerError } from "@pages/500";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ApiController } from "@utils/api/ApiController";
import { ApiError } from "@utils/api/ApiError";

export function RandomGallery() {
  const { data: maxPage, error: pageError } = useSuspenseQuery({
    queryKey: ["maxPage"],
    queryFn: () => ApiController.getTotalPages({ limit: 9 }),
  });

  if (maxPage instanceof ApiError) return <ServerError />;
  if (pageError) throw pageError;

  const { data: artworks, error: artError } = useSuspenseQuery({
    queryKey: ["artworks"],
    queryFn: () =>
      ApiController.getPage({
        page: Math.floor(Math.random() * maxPage),
        limit: 9,
      }),
  });

  if (artworks instanceof ApiError) return <ServerError />;
  if (artError) throw artError;

  return <ShortGallery artworks={artworks} />;
}
