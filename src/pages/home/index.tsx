import { SearchInput } from '@components/SearchInput';
import { SectionHeader } from '@components/SectionHeader';
import { ShortGallery } from '@components/ShortGallery';
import { SpecialGallery } from '@components/SpecialGallery';
import { Main, SearchSection } from './styled';
import { StyledH1 } from '@components/HeadLine/styled';
import { Suspense } from 'react';

export function HomePage() {
  return (
    <Main>
      <SearchSection>
        <StyledH1>
          Let's Find Some <span>Art</span> <br /> Here!
        </StyledH1>
        <SearchInput />
      </SearchSection>

      <Suspense>
        <SpecialGallery />
      </Suspense>

      <section>
        <SectionHeader
          bottomText="Other works for you"
          topText="Here some more"
        />
        <ShortGallery />
      </section>
    </Main>
  );
}
