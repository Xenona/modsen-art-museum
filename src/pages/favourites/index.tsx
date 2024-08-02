import { SectionHeader } from '@components/SectionHeader';
import bookmarkIcom from '@assets/icons/bookmark_bright.svg';
import { BigIcon } from './styled';
import { Main, StyledH1 } from '@pages/home/styled';
import { ShortGallery } from '@components/ShortGallery';

export function FavouritesPage() {
  return (
    <Main>
      <StyledH1>
        Here Are Your
        <br />
        <BigIcon src={bookmarkIcom} alt="Yellow bookmark icon" />
        <span>Favourites</span>
      </StyledH1>

      <section>
        <SectionHeader
          topText={'Saved by you'}
          bottomText={'Your favorites list'}
        />
        <ShortGallery />
      </section>
    </Main>
  );
}
