import {
  ArtworkCardSkeleton,
  ArtworkWrapperSkeleton,
  ImageFigureSkeleton,
} from "./ArtworkContainerSkeleton.styled";

export function ArtworkContainerSkeleton() {
  return (
    <ArtworkWrapperSkeleton>
      {Array.from({ length: 6 }).map((_, index) => (
        <ArtworkCardSkeleton key={index}>
          <ImageFigureSkeleton />
        </ArtworkCardSkeleton>
      ))}
    </ArtworkWrapperSkeleton>
  );
}
