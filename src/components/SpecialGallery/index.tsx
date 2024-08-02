import { SectionHeader } from '@components/SectionHeader';
import { ArtworkCard } from '@components/ArtworkCard';
import { useState } from 'react';
import arrowIcon from '@assets/icons/arrow.svg';
import {
  ArtworkContainer,
  SelectorButton,
  SelectorContainer,
  SelectorParam,
} from './styled';

export function SpecialGallery() {
  const [currPage, setCurrPage] = useState<number>(1);
  const [sortingParamId, setSortingParamId] = useState<number>(0);
  const maxVisibleButtons = 4;
  // TODO fetch that
  const maxPage = 10;

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

      <ArtworkContainer>
        <ArtworkCard id={1} />
        <ArtworkCard id={2} />
        <ArtworkCard id={2} />
        <ArtworkCard id={1} />
        <ArtworkCard id={1} />
        <ArtworkCard id={2} />
        <ArtworkCard id={1} />
      </ArtworkContainer>

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
