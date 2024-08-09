import { ErrorBoundary } from "@components/ErrorBoundary";
import { ArtworkPageSkeleton } from "@components/skeletons/ArtworkPageSkeleton";
import { NotFound } from "@pages/404";
import { ArtworkPage } from "@pages/artwork";
import { FavouritesPage } from "@pages/favourites";
import { HomePage } from "@pages/home";
import ScrollToTop from "@utils/ScrollToTop";
import { Suspense } from "react";

const routes = [
  {
    path: "/",
    element: HomePage,
  },
  {
    path: "/fav",
    element: FavouritesPage,
  },
  {
    path: "/artwork/:id",
    element: () => (
      <ErrorBoundary>
        <Suspense fallback={<ArtworkPageSkeleton />}>
          <ScrollToTop />
          <ArtworkPage />
        </Suspense>
      </ErrorBoundary>
    ),
  },
  {
    path: "*",
    element: NotFound,
  },
];

export default routes;
