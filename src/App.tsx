import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "@pages/home";
import { FavouritesPage } from "@pages/favourites";
import { ArtworkPage } from "@pages/artwork";
import { NotFound } from "@pages/404";
import { AppHeader } from "@components/Header";
import { FavStorageProvider } from "@utils/hooks/FavStorageProvider";
import { Footer } from "@components/Footer";
import "@styles/globals.css";
import { Suspense } from "react";
import { ErrorBoundary } from "@components/ErrorBoundary";
import { ArtworkPageSkeleton } from "@components/skeletons/ArtworkPageSkeleton";
import ScrollToTop from "@utils/ScrollToTop";
import { QueryClientProvider } from "@utils/hooks/QueryClientProvider";

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
