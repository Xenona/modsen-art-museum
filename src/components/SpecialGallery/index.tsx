import arrowIcon from "@assets/icons/arrow.svg";
import { ErrorBoundary } from "@components/ErrorBoundary";
import { Paginator } from "@components/Paginator";
import { SectionHeader } from "@components/SectionHeader";
import { PaginatorSkeleton } from "@components/skeletons/PaginatorSkeleton";
import { SpecialGallerySkeleton } from "@components/skeletons/SpecialGallerySkeleton";
import { useDebounce } from "@utils/hooks/useDebounce";
import { Suspense, useState } from "react";

import { ArtworkContainer, sortingInfo } from "./ArtworkContainer";
import { SelectorButton, SelectorContainer, SelectorParam } from "./styled";

export function SpecialGallery() {
  const [currPage, setCurrPage] = useState<number>(1);
  const [sortIdx, setSortIdx] = useState<number>(0);
  const debouncedSortIdx = useDebounce(sortIdx);

  return (
    <section>
      <SectionHeader
        topText="Topics for you"
        bottomText="Our special gallery"
      />

      <ErrorBoundary>
        <Suspense fallback={<SpecialGallerySkeleton />}>
          <SelectorContainer>
            <b>Sort by:</b>
            <SelectorButton
              onClick={() =>
                setSortIdx(
                  (sortIdx - 1 + sortingInfo.length) % sortingInfo.length,
                )
              }
            >
              <img src={arrowIcon} aria-label="Previous" />
            </SelectorButton>

            <SelectorParam>{sortingInfo[sortIdx].type}</SelectorParam>
            <SelectorButton
              onClick={() =>
                setSortIdx(
                  (sortIdx + 1 + sortingInfo.length) % sortingInfo.length,
                )
              }
            >
              <img src={arrowIcon} aria-label="Next" />
            </SelectorButton>
          </SelectorContainer>

          <ArtworkContainer
            page={currPage}
            sortingId={debouncedSortIdx}
          ></ArtworkContainer>
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<PaginatorSkeleton />}>
          <Paginator currPage={currPage} setCurrPage={setCurrPage} />
        </Suspense>
      </ErrorBoundary>
    </section>
  );
}
