import "@styles/globals.css";

import { ErrorBoundary } from "@components/ErrorBoundary";
import { Footer } from "@components/Footer";
import { AppHeader } from "@components/Header";
import { ArtworkPageSkeleton } from "@components/skeletons/ArtworkPageSkeleton";
import { NotFound } from "@pages/404";
import { ArtworkPage } from "@pages/artwork";
import { FavouritesPage } from "@pages/favourites";
import { HomePage } from "@pages/home";
import { FavStorageProvider } from "@utils/hooks/FavStorageProvider";
import { QueryClientProvider } from "@utils/hooks/QueryClientProvider";
import ScrollToTop from "@utils/ScrollToTop";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider>
        <FavStorageProvider>
          <AppHeader />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fav" element={<FavouritesPage />} />
            <Route
              path="/artwork/:id"
              element={
                <ErrorBoundary>
                  <Suspense fallback={<ArtworkPageSkeleton />}>
                    <ScrollToTop />
                    <ArtworkPage />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </FavStorageProvider>
      </QueryClientProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
