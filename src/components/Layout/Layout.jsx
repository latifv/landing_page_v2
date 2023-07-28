// components/Layout/Layout.js

import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss";
import ListBanner from "../../pages/Home/components/ListBanner";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";

  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.mainContent}>{children}</main>
      {!isHome && !isAbout && <ListBanner />}
      <Footer />
    </div>
  );
};

export default Layout;
