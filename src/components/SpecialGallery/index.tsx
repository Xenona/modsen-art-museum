import { SectionHeader } from "@components/SectionHeader";
import { Suspense, useCallback, useMemo, useState } from "react";
import arrowIcon from "@assets/icons/arrow.svg";
import { SelectorButton, SelectorContainer, SelectorParam } from "./styled";
import { ArtworkContainer } from "./ArtworkContainer";
import { ErrorBoundary } from "@components/ErrorBoundary";
import { useDebounce } from "@utils/useDebounce";

export function SpecialGallery() {
  const [currPage, setCurrPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(1);
  const [sortingParamId, setSortingParamId] = useState<number>(0);
  const debouncedCurrPage = useDebounce(currPage);

  // const getVisiblePageNumbers = useCallback(() =>  {
  //   const maxVisibleButtons = 4;


  //   // const {data: maxPage, error} = useSuspenseQuery({
  //   //   queryKey: ['maxPage', currPage],
  //   //   queryFn: () => ApiController.getTotalPages()
  //   // })

  //   // if (error) throw error;
  //   setMaxPage(maxPage);

  //   let start = Math.max(currPage - Math.floor(maxVisibleButtons / 2), 1);
  //   const end = Math.min(start + maxVisibleButtons - 1, maxPage);

  //   if (end - start + 1 < maxVisibleButtons) {
  //     start = Math.max(end - maxVisibleButtons + 1, 1);
  //   }

  //   const pages = [];
  //   for (let i = start; i <= end; i++) {
  //     pages.push(i);
  //   }
  //   return pages;
  // }, [debouncedCurrPage])
  //TODO add sorting algo
  const sortingInfo = [
    "Title (A-Z)",
    "Title (Z-A)",
    "Date (min-max)",
    "Date (max-min)",
  ];

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
            setSortingParamId(
              (sortingParamId - 1 + sortingInfo.length) % sortingInfo.length,
            )
          }
        >
          <img src={arrowIcon} aria-label="Previous" />
        </SelectorButton>

        <SelectorParam>{sortingInfo[sortingParamId]}</SelectorParam>
        <SelectorButton
          onClick={() =>
            setSortingParamId(
              (sortingParamId + 1 + sortingInfo.length) % sortingInfo.length,
            )
          }
        >
          <img src={arrowIcon} aria-label="Next" />
        </SelectorButton>
      </SelectorContainer>

      <ErrorBoundary>
        <Suspense fallback={<p>Loading artworks...</p>}>
          <ArtworkContainer page={currPage}></ArtworkContainer>
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
            {/* {getVisiblePageNumbers().map((page) => (
              <SelectorButton
                key={page}
                onClick={() => setCurrPage(page)}
                className={currPage === page ? "active" : ""}
              >
                {page}
              </SelectorButton>
            ))} */}
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
