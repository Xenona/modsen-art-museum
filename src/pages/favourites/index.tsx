import bookmarkIcom from "@assets/icons/bookmark_bright.svg";
import { BigIcon } from "./styled";
import { Main, StyledH1 } from "@pages/home/styled";
import { ErrorBoundary } from "@components/ErrorBoundary";
import { Suspense } from "react";
import { FavGallery } from "@components/FavGallery";
import { SectionHeader } from "@components/SectionHeader";
import { ShortGallerySkeleton } from "@components/skeletons/ShortGallerySkeleton";

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
          topText={"Saved by you"}
          bottomText={"Your favorites list"}
        />
        <ErrorBoundary>
          <Suspense fallback={<ShortGallerySkeleton />}>
            <FavGallery />
          </Suspense>
        </ErrorBoundary>
      </section>
    </Main>
  );
}
