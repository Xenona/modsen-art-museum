import { ArtworkCard } from '@components/ArtworkCard';
import { HeadLine } from '@components/HeadLine';
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

        <div className="artwork-container">
          <ArtworkCard id={1} />
          <ArtworkCard id={2} />
          <ArtworkCard id={2} />
          <ArtworkCard id={1} />
          <ArtworkCard id={1} />
          <ArtworkCard id={2} />
          <ArtworkCard id={1} />
        </div>
      </section>
    </>
  );
}
