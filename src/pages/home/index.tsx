import { SearchInput } from "@components/SearchInput";
import { SpecialGallery } from "@components/SpecialGallery";
import { Main, SearchSection, StyledH1 } from "./styled";
import { Suspense } from "react";
import { RandomGallery } from "@components/RandomGallery";
import { ErrorBoundary } from "@components/ErrorBoundary";

export function HomePage() {
  return (
    <Main>
      <SearchSection>
        <StyledH1>
          Let's Find Some <span>Art</span> <br /> Here!
        </StyledH1>
        <SearchInput />
      </SearchSection>

      <ErrorBoundary>
        <Suspense fallback={<p>loading full stuff</p>}>
          <SpecialGallery />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={<p>loading rando</p>}>
          <RandomGallery />
        </Suspense>
      </ErrorBoundary>
    </Main>
  );
}
