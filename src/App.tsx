import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '@pages/home';
import { FavouritesPage } from '@pages/favourites';
import { ArtworkPage } from '@pages/artwork';
import { NotFound } from '@pages/404';
import { AppHeader } from '@components/Header';
import { FavStorageProvider } from '@components/FavStorageProvider';
import { Footer } from '@components/Footer';
import '@styles/globals.css';

function App() {
  return (
    <BrowserRouter>
      <FavStorageProvider>
        <AppHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fav" element={<FavouritesPage />} />
          <Route path="/artwork/:id" element={<ArtworkPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </FavStorageProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
