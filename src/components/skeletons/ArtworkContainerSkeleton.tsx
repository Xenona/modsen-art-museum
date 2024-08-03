import {
  ArtworkCardSkeleton,
  ArtworkWrapperSkeleton,
  ImageFigureSkeleton,
  InfoCardSkeleton,
  TextSkeleton,
} from "./ArtworkContainerSkeleton.styled";

export function ArtworkContainerSkeleton() {
  return (
    <ArtworkWrapperSkeleton>
      {Array.from({ length: 6 }).map((_, index) => (
        <ArtworkCardSkeleton key={index}>
          <ImageFigureSkeleton />
          <TextSkeleton>
            <InfoCardSkeleton />
          </TextSkeleton>
        </ArtworkCardSkeleton>
      ))}
    </ArtworkWrapperSkeleton>
  );
}
