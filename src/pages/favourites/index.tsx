import bookmarkIcom from "@assets/icons/bookmark_bright.svg";
import { BigIcon } from "./styled";
import { Main, StyledH1 } from "@pages/home/styled";
import { ErrorBoundary } from "@components/ErrorBoundary";
import { Suspense } from "react";
import { FavGallery } from "@components/FavGallery";

export function FavouritesPage() {
  return (
    <Main>
      <StyledH1>
        Here Are Your
        <br />
        <BigIcon src={bookmarkIcom} alt="Yellow bookmark icon" />
        <span>Favourites</span>
      </StyledH1>
      <ErrorBoundary>
        <Suspense fallback={<p>Loading favs</p>}>
          <FavGallery />
        </Suspense>
      </ErrorBoundary>
    </Main>
  );
}
