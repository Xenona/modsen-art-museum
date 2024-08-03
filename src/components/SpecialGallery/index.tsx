import { SectionHeader } from "@components/SectionHeader";
import { Suspense, useState } from "react";
import arrowIcon from "@assets/icons/arrow.svg";
import { SelectorButton, SelectorContainer, SelectorParam } from "./styled";
import { ArtworkContainer, sortingInfo } from "./ArtworkContainer";
import { ErrorBoundary } from "@components/ErrorBoundary";
import { useDebounce } from "@utils/useDebounce";
import { Paginator } from "@components/Paginator";
import { PaginatorSkeleton } from "@components/skeletons/PaginatorSkeleton";

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
        <Suspense fallback={<p>Loading artworks...</p>}>
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
