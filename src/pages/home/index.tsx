import { HeadLine } from '@components/HeadLine';
import { SearchInput } from '@components/SearchInput';
import { SpecialGallery } from '@components/SpecialGallery';

export function HomePage() {
  return (
    <>
      <HeadLine>
        Let's Find Some <span>Art</span> <br /> Here!
      </HeadLine>
      <SearchInput />
      <SpecialGallery />
    </>
  );
}
