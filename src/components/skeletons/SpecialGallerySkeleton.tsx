import { ArtworkContainerSkeleton } from "./ArtworkContainerSkeleton";
import { SortingSelectorSkeleton } from "./SortingSelectorSkeleton";

export function SpecialGallerySkeleton() {
  return (
    <>
      <SortingSelectorSkeleton />
      <ArtworkContainerSkeleton />
    </>
  );
}
