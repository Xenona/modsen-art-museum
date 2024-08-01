import { HeadLine } from '@components/HeadLine';
import { SearchInput } from '@components/SearchInput';
import { SectionHeader } from '@components/SectionHeader';
import { BookmarkButton } from '@components/BookmarkButton';

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
        <BookmarkButton id={1} />
      </section>
    </>
  );
}
