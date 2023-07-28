import React, { useEffect } from "react";
import styles from "./PagesLayout.module.scss";
import Button from "../Button/Button";
import { Play } from "../../assets";
import { useLocation } from "react-router-dom";
import HalfRobot from "../../assets/images/halfRobot.svg";
import nftVideo from "../../assets/videos/hypernft.mp4";
import sdkVideo from "../../assets/videos/hypersdk.mp4";
import storevideo from "../../assets/videos/hyperstore.mp4";
import { becomeDatas, roleDatas } from "../../utils/constants/Dao";
import { useRef } from "react";

const PagesLayout = ({ data }) => {
  // split the title by "**"
  const parts = data.topContent.title.split("**");
  const partsBottomTitle = data.bottomContent.title.split("**");
  const descParts = data.bottomContent.desc.split("\n\n"); // split the desc by "\n\n"

  const location = useLocation();

  const howtoRef = useRef(null);

  const learnRef = useRef(null);

  const { pathname } = useLocation();

  const scrollToHowto = () => scrollToRef(howtoRef);

  const scrollToLearn = () => scrollToRef(learnRef);

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  let titleStyle;

  if (location.pathname === "/hyperstore") {
    titleStyle = "400px";
  } else if (location.pathname === "/hypersdk") {
    titleStyle = "500px";
  } else if (location.pathname === "/dao") {
    titleStyle = "850px";
  } else {
    titleStyle = "550px";
  }

  const isDao = location.pathname === "/dao";
  const isNFT = location.pathname === "/hypernft";
  const isSDK = location.pathname === "/hypersdk";
  const isStore = location.pathname === "/hyperstore";

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - -100,
      behavior: "smooth",
    });
  };

  // let videoSource;
  // if (isNFT) {
  //   videoSource =
  //     "https://deviumstore.blob.core.windows.net/iamge/wfhepjibdwbelrsi";
  // } else if (isSDK) {
  //   videoSource =
  //     "https://deviumstore.blob.core.windows.net/iamge/rckmiawptxdskcxf";
  // } else if (isStore) {
  //   videoSource =
  //     "https://deviumstore.blob.core.windows.net/iamge/xcezjabvxcxbvigj";
  // } else if (isDao) {
  //   videoSource =
  //     "https://deviumstore.blob.core.windows.net/iamge/wfhepjibdwbelrsi";
  // }
  let videoSource;
  if (isNFT) {
    videoSource = nftVideo;
  } else if (isSDK) {
    videoSource = sdkVideo;
  } else if (isStore) {
    videoSource = storevideo;
  } else if (isDao) {
    videoSource = storevideo;
  }

  return (
    <div className={styles.pagesLayout}>
      <div className={styles.pagesLayout_topContent}>
        <div className={styles.pagesLayout_topContent__left}>
          <h2
            style={{
              width: titleStyle,
            }}
          >
            {parts.map((part, i) => (
              <span className={i % 2 === 0 ? "" : styles.boldText}>{part}</span>
            ))}
          </h2>
          <p>{data.topContent.desc}</p>
          {isDao && (
            <div className={styles.daoTopButtons}>
              <Button
                title={"How to become a DAO member?"}
                isGradient={true}
                onClick={scrollToHowto}
              />
              <Button
                title={"Learn more about DAO roles"}
                isGradient={true}
                onClick={scrollToLearn}
              />
            </div>
          )}
          {isDao === isNFT && isDao ===isSDK? (
            <div className={`${styles.pagesLayout_topContent__button}`}>
              <Button title={"Launch App"} isGradient={true} onClick={()=>{
                window.open("/hyperstore")
              }} />
              <div
                className={styles.pagesLayout_topContent__button__watchVideo}
              >
                <img src={Play} alt="" />
                <span>Watch Video</span>
              </div>
            </div>
          ):''}
        </div>
        <div className={styles.pagesLayout_topContent__right}>
          {" "}
          <video
            className={styles.headerVideo}
            autoPlay
            loop
            muted
            style={{
              position: "absolute",
              maxWidth: "none",
              top: "45%",
              height: "120vh",
              left: "45%",
              transform: "translate(-50%, -50%)",
              zIndex: "-2",
            }}
          >
            <source src={videoSource} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className={styles.pagesLayout_midContent}>
        {data.stepContent.map((item, index) => {
          return (
            <div className={styles.pagesLayout_midContent__card}>
              <span>
                <p>{item.id}</p>
              </span>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>
      {isDao && (
        <div id="howto" className={styles.infoWrapper} ref={howtoRef}>
          <h2 className={styles.infoWrapper__title}>
            {data.infoWrapper.firstTitle}
          </h2>
          <p className={styles.infoWrapper__desc}>
            {data.infoWrapper.firstDesc}
          </p>
        </div>
      )}
      {isDao &&
        becomeDatas.map((item, index) => {
          return (
            <div className={styles.becomeWrapper}>
              <div className={styles.becomeWrapper__id}>
                <img src={item.id} alt="" />
              </div>
              <div>
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
              </div>
              <div>
                <Button title={item.btnText} isGradient={true} />
              </div>
            </div>
          );
        })}
      {isDao && (
        <div id="learn" className={styles.infoWrapper} ref={learnRef}>
          <h2 className={styles.infoWrapper__title}>
            {data.infoWrapper.secondTitle}
          </h2>
          <p className={styles.infoWrapper__desc}>
            {data.infoWrapper.secondDesc}
          </p>
        </div>
      )}
      <div className={styles.roles}>
        {isDao &&
          roleDatas.map((item, index) => {
            return (
              <div className={styles.becomeWrapper}>
                <div className={styles.becomeWrapper__id}>
                  <img src={item.icon} alt="" />
                </div>
                <div>
                  <h1>{item.title}</h1>
                  <ul>
                    {item.listDesc.map((desc, index) => {
                      return <li>{desc}</li>;
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
      </div>
      {!isDao && (
        <div className={styles.pagesLayout_bottomContent}>
          <div className={styles.pagesLayout_bottomContent__left}>
            <span className={styles.pagesLayout_bottomContent__lightTitle}>
              {data.bottomContent.lightTitle}
            </span>
            <h2>
              {partsBottomTitle.map((part, i) => (
                <span className={i % 2 === 0 ? "" : styles.boldText}>
                  {part}
                </span>
              ))}
            </h2>
            <div className={styles.pagesLayout_bottomContent__desc}>
              {descParts.map((part) => (
                <p>
                  <br />
                  {part}
                </p>
              ))}
            </div>
          </div>
          <div className={styles.pagesLayout_bottomContent__right}>
            <img src={HalfRobot} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PagesLayout;
