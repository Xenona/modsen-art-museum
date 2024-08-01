import { HeadLine } from '@components/HeadLine';
import { SearchInput } from '@components/SearchInput';
import { SectionHeader } from '@components/SectionHeader';
import { ShortGallery } from '@components/ShortGallery';
import { SpecialGallery } from '@components/SpecialGallery';
import { Main, SearchSection } from './styled';

export function HomePage() {
  return (
    <Main>
      <SearchSection>
        <HeadLine>
          Let's Find Some <span>Art</span> <br /> Here!
        </HeadLine>
        <SearchInput />
      </SearchSection>
      <SpecialGallery />
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
