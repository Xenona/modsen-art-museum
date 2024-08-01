import { HeadLine } from '@components/HeadLine';
import { InfoCard } from '@components/InfoCard';
import { SearchInput } from '@components/SearchInput';
import { SectionHeader } from '@components/SectionHeader';

export function HomePage() {
  return (
    <>
      <HeadLine>
        Let's Find Some <span>Art</span> <br /> Here!
      </HeadLine>
      <SearchInput />
      <section>
        <SectionHeader
          topText="Topics for you"
          bottomText="Our special gallery"
        />
      </section>
      <InfoCard id={1} withImage={true} />
    </>
  );
}
