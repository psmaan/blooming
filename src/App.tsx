import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Homepage from "./Pages/HomePage";
import PortfolioPage from "./Pages/PortfolioPage";
import VLprojectPage from "./Pages/VLprojectPage";
import AdorablePage from "./Pages/AdorablePage";
import UnibrainPage from "./Pages/UnibrainPage";
import CoffeePage from "./Pages/CoffeePage";
import KarenPage from "./Pages/KarenPage";
import NFTPage from "./Pages/NFTPage";
import HireUs from "./Pages/HireUs";
import CulturePage from "./Pages/CulturePage";
import ServicesPage from "./Pages/ServicesPage";
import Branding from "./Pages/Services/Branding";
import AI from "./Pages/Services/AI";
import Web3 from "./Pages/Services/Web3";
import Backend from "./Pages/Services/Backend";
import DevOps from "./Pages/Services/DevOps";
import SEO from "./Pages/Services/SEO";
import UIUX from "./Pages/Services/UIUX";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={Homepage} path="/"></Route>
          <Route Component={PortfolioPage} path="/portfolio"></Route>
          <Route Component={ServicesPage} path="/services"></Route>
          <Route Component={Branding} path="/branding"></Route>
          <Route Component={AI} path="/ai"></Route>
          <Route Component={Web3} path="/web3"></Route>
          <Route Component={Backend} path="/backend"></Route>
          <Route Component={DevOps} path="/devops"></Route>
          <Route Component={SEO} path="/seo"></Route>
          <Route Component={UIUX} path="/uiux"></Route>
          <Route Component={VLprojectPage} path="/vlproject"></Route>
          <Route Component={AdorablePage} path="/adorable"></Route>
          <Route Component={UnibrainPage} path="/unibrain"></Route>
          <Route Component={CoffeePage} path="/coffee"></Route>
          <Route Component={KarenPage} path="/karen"></Route>
          <Route Component={NFTPage} path="/nft"></Route>
          <Route Component={HireUs} path="/hire"></Route>
          <Route Component={CulturePage} path="/culture"></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
