import { HeadLine } from '@components/HeadLine';
import { SearchInput } from '@components/SearchInput';
import { SectionHeader } from '@components/SectionHeader';
import { SpecialGallery } from '@components/SpecialGallery';

export function HomePage() {
  return (
    <>
      <HeadLine>
        Let's Find Some <span>Art</span> <br /> Here!
      </HeadLine>
      <SearchInput />
      <SpecialGallery />
      <section>
        <SectionHeader
          bottomText="Other works for you"
          topText="Here some more"
        />
        <div></div>
      </section>
    </>
  );
}
