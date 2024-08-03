import { ShortGalleryContainer } from "@components/ShortGallery/styled";
import { SkeletonCard } from "./ShortGallerySkeleton.styled";

export function ShortGallerySkeleton() {
  return (
    <ShortGalleryContainer>
      <SkeletonCard $withImage={true} />
      <SkeletonCard $withImage={true} />
      <SkeletonCard $withImage={true} />
      <SkeletonCard $withImage={true} />
      <SkeletonCard $withImage={true} />
      <SkeletonCard $withImage={true} />
      <SkeletonCard $withImage={true} />
      <SkeletonCard $withImage={true} />
      <SkeletonCard $withImage={true} />
    </ShortGalleryContainer>
  );
}
