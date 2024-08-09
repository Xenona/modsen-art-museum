import "@styles/globals.css";

import { Footer } from "@components/Footer";
import { AppHeader } from "@components/Header";
import { FavStorageProvider } from "@utils/hooks/FavStorageProvider";
import { QueryClientProvider } from "@utils/hooks/QueryClientProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import routes from "./routes";

function App() {
  const routeComponents = routes.map(({ path, element }, key) => (
    <Route path={path} Component={element} key={key} />
  ));
  return (
    <BrowserRouter>
      <QueryClientProvider>
        <FavStorageProvider>
          <AppHeader />
          <Routes>{routeComponents}</Routes>
          <Footer />
        </FavStorageProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
