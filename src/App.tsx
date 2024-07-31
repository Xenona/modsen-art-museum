import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '@pages/home';
import { FavouritesPage } from '@pages/favourites';
import { ArtworkPage } from '@pages/artwork';
import { NotFound } from '@pages/404';
import '@styles/globals.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fav" element={<FavouritesPage />} />
        <Route path="/artwork/:id" element={<ArtworkPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
