import { SectionHeader } from "@components/SectionHeader";
import { Suspense, useEffect, useState } from "react";
import arrowIcon from "@assets/icons/arrow.svg";
import { SelectorButton, SelectorContainer, SelectorParam } from "./styled";
import { ArtworkContainer, sortingInfo } from "./ArtworkContainer";
import { ErrorBoundary } from "@components/ErrorBoundary";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ApiController } from "@utils/ApiController";
import { useDebounce } from "@utils/useDebounce";
import { ApiError } from "@utils/ApiError";
import { ServerError } from "@pages/500";

export function SpecialGallery() {
  const [currPage, setCurrPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(1);
  const [sortIdx, setSortIdx] = useState<number>(0);
  const debouncedCurrPage = useDebounce(currPage);
  const debouncedSortIdx = useDebounce(sortIdx);

  const { data: newMaxPage, error } = useSuspenseQuery({
    queryKey: ["maxPage", debouncedCurrPage],
    queryFn: () => ApiController.getTotalPages(),
  });

  if (newMaxPage instanceof ApiError) return <ServerError />;
  if (error) throw error;

  useEffect(() => {
    setMaxPage(newMaxPage);
  }, [newMaxPage]);

  const getVisiblePageNumbers = () => {
    const maxVisibleButtons = 4;

    let start = Math.max(currPage - Math.floor(maxVisibleButtons / 2), 1);
    const end = Math.min(start + maxVisibleButtons - 1, maxPage);

    if (end - start + 1 < maxVisibleButtons) {
      start = Math.max(end - maxVisibleButtons + 1, 1);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <section>
      <SectionHeader
        topText="Topics for you"
        bottomText="Our special gallery"
      />

      <SelectorContainer>
        <b>Sort by:</b>
        <SelectorButton
          onClick={() =>
            setSortIdx((sortIdx - 1 + sortingInfo.length) % sortingInfo.length)
          }
        >
          <img src={arrowIcon} aria-label="Previous" />
        </SelectorButton>

        <SelectorParam>{sortingInfo[sortIdx].type}</SelectorParam>
        <SelectorButton
          onClick={() =>
            setSortIdx((sortIdx + 1 + sortingInfo.length) % sortingInfo.length)
          }
        >
          <img src={arrowIcon} aria-label="Next" />
        </SelectorButton>
      </SelectorContainer>

      <ErrorBoundary>
        <Suspense fallback={<p>Loading artworks...</p>}>
          <ArtworkContainer
            page={currPage}
            sortingId={debouncedSortIdx}
          ></ArtworkContainer>
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<p>Loading paginator...</p>}>
          <SelectorContainer>
            <SelectorButton
              onClick={() => setCurrPage((prev) => Math.max(prev - 1, 1))}
            >
              <img src={arrowIcon} aria-label="Previous" />
            </SelectorButton>
            {getVisiblePageNumbers().map((page) => (
              <SelectorButton
                key={page}
                onClick={() => setCurrPage(page)}
                className={currPage === page ? "active" : ""}
              >
                {page}
              </SelectorButton>
            ))}
            <SelectorButton
              onClick={() => setCurrPage((prev) => Math.min(prev + 1, maxPage))}
            >
              <img src={arrowIcon} aria-label="Next" />
            </SelectorButton>
          </SelectorContainer>
        </Suspense>
      </ErrorBoundary>
    </section>
  );
}
