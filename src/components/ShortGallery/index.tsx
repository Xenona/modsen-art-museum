import { InfoCard } from "@components/InfoCard";
import { Art } from "@utils/api/ApiSchema";
import { ShortGalleryContainer } from "./styled";

export function ShortGallery({ artworks }: { artworks: Art[] }) {
  return (
    <ShortGalleryContainer>
      {artworks.map((art) => (
        <InfoCard data={art} withImage={true} key={art.id} />
      ))}
    </ShortGalleryContainer>
  );
}
