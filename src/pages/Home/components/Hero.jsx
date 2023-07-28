import React, { useEffect, useState } from "react";
import styles from "./Hero.module.scss";
import { heroLeft } from "../../../utils//constants/index";
import Button from "../../../components/Button/Button";
import { Microsoft, Binances } from "../../../assets";
import HeaderVideo from "../../../assets/videos/Header.mp4";

const Hero = () => {
  const [changeRoot, setChangeRoot] = useState(false);
  const isHome = window.location.pathname === "/";
  useEffect(() => {
    if (window.location.pathname === "/") {
      setChangeRoot(true);
    } else {
      setChangeRoot(false);
    }
  }, [window.location.pathname]);
  const handleReadDocsClick = () => {
    window.open("https://docs.hypergpt.ai/hypergpt/", "_blank")
  };
  return (
    <div className={styles.hero}>
      {isHome && (
        <video
          className={styles.headerVideo}
          autoPlay
          loop
          muted
          style={{
            display: changeRoot ? "block" : "none",
            position: "absolute",
            height: "130vh",
            maxWidth: "none",
            left: "60%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          <source src={HeaderVideo} type="video/mp4" />
        </video>
      )}
      {/* LEFT SİDE */}
      <div className={styles.hero__left}>
        <div className={styles.hero__left__text}>
          <h1>{heroLeft.topTextFirst}</h1>
          <h1>{heroLeft.topTextSecond}</h1>
          <h1>{heroLeft.topTextThird}</h1>
        </div>
        <div className={styles.hero__left__btns}>
          <Button title="Launch App" size="large" isGradient={true} onClick={()=>{
            window.open('/hyperstore')
          }} />
          <Button
            className={styles.hero__left__btns_items}
            title="Read Docs"
            size="large"
            isGradient={false}
            onClick={handleReadDocsClick}
          />
        </div>
        <div className={styles.hero__left__bottomText}>
          <p>{heroLeft.bottomTextFirst}</p>
          <p>{heroLeft.bottomTextSecond}</p>
        </div>
        <div className={styles.hero__left__backedBy}>
          <p>Backed by</p>
          <div className={styles.hero__left__backedBy__logos}>
            <img src={Microsoft} alt="" />
            <img src={Binances} alt="" />
          </div>
        </div>
      </div>
      {/* RIGHT SİDE */}
      <div className={styles.hero__right}>
        {/* <img src={Robot} alt="" /> */}
      </div>
    </div>
  );
};

export default Hero;
