import { SectionHeader } from '@components/SectionHeader';
import { Suspense, useState } from 'react';
import arrowIcon from '@assets/icons/arrow.svg';
import { SelectorButton, SelectorContainer, SelectorParam } from './styled';
import { ArtworkContainer } from './ArtworkContainer';
import { z } from 'zod';

export const dataSchema = z.object({
  pagination: z.object({
    total_pages: z.number().int().nonnegative(),
  }),
  data: z.array(
    z.object({
      id: z.number().int().positive(),
      artist_title: z.string().nullable(),
      date_display: z.string().nullable(),
      dimensions: z.string().nullable(),
      image_id: z.string().nullable(),
      title: z.string(),
      credit_line: z.string(),
      on_loan_display: z.string().nullable(),
      artist_display: z.string().nullable(),
      thumbnail: z.object({ alt_text: z.string().nullable() }).nullable(),
    }),
  ),
});

export type Art = z.infer<typeof dataSchema>['data'][number];

export function SpecialGallery() {
  const [currPage, setCurrPage] = useState<number>(1);
  const [sortingParamId, setSortingParamId] = useState<number>(0);

  const maxVisibleButtons = 4;
  const maxPage = 10; //parsedData.data.pagination.total_pages;

  const getVisiblePageNumbers = () => {
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

  //TODO add sorting algo
  const sortingInfo = [
    'Title (A-Z)',
    'Title (Z-A)',
    'Date (min-max)',
    'Date (max-min)',
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

      <Suspense fallback={<p>LOading...</p>}>
        <ArtworkContainer page={currPage}></ArtworkContainer>
      </Suspense>

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
            className={currPage === page ? 'active' : ''}
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
    </section>
  );
}
