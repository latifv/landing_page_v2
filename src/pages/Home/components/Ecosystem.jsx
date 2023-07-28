import React from "react";
import styles from "./Ecosystem.module.scss";
import { ecoTitle, ecoDesc, ecoCardItems } from "../../../utils/constants";
import DaoPeople from "../../../assets/images/DaoPeople.svg";
import { RightArrow } from "../../../assets/index";
import { useLocation } from "react-router-dom";
import { useRef } from "react";

const Ecosystem = ({ scrollToHowto }) => {
  const location = useLocation();
  const handleDaoPageClick = () => {
    if (location.pathname !== "/dao") {
      window.open("/dao", "_blank");
    }
  };

  return (
    <div className={styles.ecosystem}>
      <div className={styles.ecosystem__top}>
        <div className={styles.ecosystem__top__left}>
          <h2 className={styles.ecosystem__top__left__title}>{ecoTitle}</h2>
          <div className={styles.ecosystem__top__left__desc}>
            <p>{ecoDesc.first}</p>
            <p>{ecoDesc.second}</p>
          </div>
        </div>
        <div className={styles.ecosystem__top__right}>
          <button onClick={handleDaoPageClick}>+</button>
          <img src={DaoPeople} alt="" />
        </div>
      </div>
      <div className={styles.ecosystem__bottom}>
        {ecoCardItems.map((item, index) => {
          return (
            <div
              className={styles.ecosystem__bottom__card__container}
              key={index}
            >
              <a className={styles.ecosystem__bottom__card}>
                <span>{item.id}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </a>
              {item.id !== "01" ? (
                <a
                  className={styles.ecosystem__bottom__card__button}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{item.buttonText}</span>
                  <img src={RightArrow} alt="" />
                </a>
              ) : (
                <a
                  onClick={scrollToHowto}
                  className={styles.ecosystem__bottom__card__button}
                >
                  <span>{item.buttonText}</span>
                  <img src={RightArrow} alt="" />
                </a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ecosystem;
