import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Store from "./pages/HyperStore/HyperStore";
import SDK from "./pages/HyperSDK/HyperSDK";
import NFT from "./pages/HyperNFT/HyperNFT";
import About from "./pages/About/About";
import Dao from "../src/pages/Dao/Dao";
import Layout from "./components/Layout/Layout";
import "./styles/_global.scss";
import { NotificationProvider } from "./context/NotificationContext";
import Notification from "./components/Notification/Notification";
import { useEffect, useState } from "react";
import styles from "../src/pages/Home/components/Hero.module.scss";

function App() {
  return (
    <NotificationProvider>
      {" "}
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route>
                <Route path="/" element={<Home />} />
                <Route path="/hyperstore" element={<Store />} />
                <Route path="/hypersdk" element={<SDK />} />
                <Route path="/hypernft" element={<NFT />} />
                <Route path="/dao" element={<Dao />} />
                <Route path="/about" element={<About />} />
              </Route>
            </Routes>
          </Layout>
        </BrowserRouter>
      </div>
      <Notification />
    </NotificationProvider>
  );
}

export default App;
