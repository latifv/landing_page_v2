import styles from "./Home.module.scss";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Marquee from "./components/Marquee";
import Ecosystem from "./components/Ecosystem";
import ListBanner from "./components/ListBanner";
import Audit from "./components/Audit";
import BottomCards from "./components/BottomCards";
import RobotBanner from "./components/RobotBanner";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useRef } from "react";

const Home = () => {
  const isHome = window.location.pathname === "/";

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.documentElement.style.backgroundColor = "#09000A";
        break;
      case "/dao":
        document.documentElement.style.backgroundColor = "#100418";
        break;
      case "/hyperstore":
        document.documentElement.style.backgroundColor = "#100418";
        break;
      case "/hypersdk":
        document.documentElement.style.backgroundColor = "#02000D";
        break;
      case "/hypernft":
        document.documentElement.style.backgroundColor = "#00061B";
        break;
      default:
        document.documentElement.style.backgroundColor = "#161617";
    }
  }, [location]);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 100,
      behavior: "smooth",
    });
  };

  const howtoRef = useRef(null);

  const scrollToHowto = () => scrollToRef(howtoRef);

  return (
    <div className={styles.home}>
      <Hero />
      <Cards />
      <Marquee />
      <Ecosystem scrollToHowto={scrollToHowto} />
      <ListBanner />
      <Audit howtoRef={howtoRef} />
      <BottomCards />
      <RobotBanner />
    </div>
  );
};

export default Home;
