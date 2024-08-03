import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "@pages/home";
import { FavouritesPage } from "@pages/favourites";
import { ArtworkPage } from "@pages/artwork";
import { NotFound } from "@pages/404";
import { AppHeader } from "@components/Header";
import { FavStorageProvider } from "@components/FavStorageProvider";
import { Footer } from "@components/Footer";
import "@styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import { ErrorBoundary } from "@components/ErrorBoundary";
import { ArtworkPageSkeleton } from "@components/skeletons/ArtworkPageSkeleton";
import ScrollToTop from "@utils/ScrollToTop";

function App() {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
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
