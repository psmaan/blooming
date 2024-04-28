import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Homepage from "./Pages/HomePage";
import PortfolioPage from "./Pages/PortfolioPage";
import VLprojectPage from "./Pages/VLprojectPage";
import AdorablePage from "./Pages/AdorablePage";
import UnibrainPage from "./Pages/UnibrainPage";
import CoffeePage from "./Pages/CoffeePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={Homepage} path="/"></Route>
          <Route Component={PortfolioPage} path="/portfolio"></Route>
          <Route Component={VLprojectPage} path="/vlproject"></Route>
          <Route Component={AdorablePage} path="/adorable"></Route>
          <Route Component={UnibrainPage} path="/unibrain"></Route>
          <Route Component={CoffeePage} path="/coffee"></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;