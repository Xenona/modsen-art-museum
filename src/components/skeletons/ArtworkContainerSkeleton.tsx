import { MAIN_PAGE_PAGINATION_LIMIT } from "@constants/pagination";

import {
  ArtworkCardSkeleton,
  ArtworkWrapperSkeleton,
  ImageFigureSkeleton,
} from "./ArtworkContainerSkeleton.styled";

export function ArtworkContainerSkeleton() {
  return (
    <ArtworkWrapperSkeleton>
      {Array.from({ length: MAIN_PAGE_PAGINATION_LIMIT }).map((_, index) => (
        <ArtworkCardSkeleton key={index}>
          <ImageFigureSkeleton />
        </ArtworkCardSkeleton>
      ))}
    </ArtworkWrapperSkeleton>
  );
}
