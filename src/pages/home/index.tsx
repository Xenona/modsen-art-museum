import { HeadLine } from '@components/HeadLine';
import { SearchInput } from '@components/SearchInput';
import { SectionHeader } from '@components/SectionHeader';

export function HomePage() {
  return (
    <>
      <HeadLine>
        Let's Find <span>Some</span> Art <br /> Here!
      </HeadLine>
      <SearchInput />
      <section>
        <SectionHeader
          topText="Topics for you"
          bottomText="Our special gallery"
        />
      </section>
    </>
  );
}
