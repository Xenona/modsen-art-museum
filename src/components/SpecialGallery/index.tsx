import { SectionHeader } from '@components/SectionHeader';
import { ArtworkCard } from '@components/ArtworkCard';
import { useState } from 'react';
import arrowIcon from '@assets/icons/arrow.svg';
import {
  ArtworkContainer,
  PaginatorButton,
  PaginatorContainer,
} from './styled';

export function SpecialGallery() {
  const [currPage, setCurrPage] = useState<number>(1);
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

  return (
    <section>
      <SectionHeader
        topText="Topics for you"
        bottomText="Our special gallery"
      />
      <ArtworkContainer>
        <ArtworkCard id={1} />
        <ArtworkCard id={2} />
        <ArtworkCard id={2} />
        <ArtworkCard id={1} />
        <ArtworkCard id={1} />
        <ArtworkCard id={2} />
        <ArtworkCard id={1} />
      </ArtworkContainer>

      <PaginatorContainer className="paginator">
        <PaginatorButton
          onClick={() => setCurrPage((prev) => Math.max(prev - 1, 1))}
        >
          <img src={arrowIcon} alt="Previous" />
        </PaginatorButton>
        {getVisiblePageNumbers().map((page) => (
          <PaginatorButton
            key={page}
            onClick={() => setCurrPage(page)}
            className={currPage === page ? 'active' : ''}
          >
            {page}
          </PaginatorButton>
        ))}
        <PaginatorButton
          onClick={() => setCurrPage((prev) => Math.min(prev + 1, maxPage))}
        >
          <img src={arrowIcon} alt="Next" />
        </PaginatorButton>
      </PaginatorContainer>
    </section>
  );
}
