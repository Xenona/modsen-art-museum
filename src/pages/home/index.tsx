import { ErrorBoundary } from "@components/ErrorBoundary";
import { RandomGallery } from "@components/RandomGallery";
import { SearchInput } from "@components/SearchInput";
import { SectionHeader } from "@components/SectionHeader";
import { ShortGallerySkeleton } from "@components/skeletons/ShortGallerySkeleton";
import { SpecialGallery } from "@components/SpecialGallery";
import { Suspense } from "react";

import { Main, SearchSection, StyledH1 } from "./styled";

export function HomePage() {
  return (
    <Main>
      <SearchSection>
        <StyledH1>
          Let's Find Some <span>Art</span> <br /> Here!
        </StyledH1>
        <SearchInput />
      </SearchSection>

      <SpecialGallery />

      <section>
        <SectionHeader
          bottomText="Other works for you"
          topText="Here some more"
        />
        <ErrorBoundary>
          <Suspense fallback={<ShortGallerySkeleton />}>
            <RandomGallery />
          </Suspense>
        </ErrorBoundary>
      </section>
    </Main>
  );
}
