import { HeadLine } from '@components/HeadLine';
import { SearchInput } from '@components/SearchInput';

export function HomePage() {
  return (
    <>
      <HeadLine>
        Let's Find <span>Some</span> Art <br /> Here!
      </HeadLine>
      <SearchInput />
    </>
  );
}
