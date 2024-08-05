import { useFavStorageContext } from "@components/FavStorageProvider";
import { BottomText } from "@components/SectionHeader/styles";
import { ShortGallery } from "@components/ShortGallery";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ApiController } from "@utils/api/ApiController";
export function FavGallery() {
  const favStorageContext = useFavStorageContext();
  const ids = favStorageContext.getAll();

  const { data: artworks, error } = useSuspenseQuery({
    queryKey: ["fav", ids],
    queryFn: () => ApiController.getArtworks(ids),
  });

  if (error) throw error;

  return (
    <>
      {artworks.length ? (
        <ShortGallery artworks={artworks} />
      ) : (
        <BottomText>
          Nothing in your personal gallery yet. Try clicking on the bookmark
          button on artworks!
        </BottomText>
      )}
    </>
  );
}
