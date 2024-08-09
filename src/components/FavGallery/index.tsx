import { BottomText } from "@components/SectionHeader/styles";
import { ShortGallery } from "@components/ShortGallery";
import { ApiController } from "@utils/api/ApiController";
import { useFavStorageContext } from "@utils/hooks/FavStorageProvider";
import { useSuspenseQuery } from "@utils/hooks/useFetch";
export function FavGallery() {
  const favStorageContext = useFavStorageContext();
  const ids = favStorageContext.getAll();

  const artworks = useSuspenseQuery({
    queryKey: ["fav", ids],
    queryFn: () => ApiController.getArtworks(ids),
  });

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
