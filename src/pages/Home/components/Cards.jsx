import React from "react";
import styles from "./Card.module.scss";
import {
  leftCard,
  rightCardFirst,
  rightCardSecond,
  // rightCardThird,
} from "../../../utils/constants/index";

const Cards = () => {
  const [isHovered, setIsHovered] = React.useState([
    false,
    false,
    false,
    false,
  ]);

  const handleMouseEnter = (index) => {
    setIsHovered(isHovered.map((hovered, i) => (i === index ? true : hovered)));
  };

  const handleMouseLeave = (index) => {
    setIsHovered(
      isHovered.map((hovered, i) => (i === index ? false : hovered))
    );
  };

  return (
    <div className={styles.cards}>
      {/* ---------------- LEFT SIDE ---------------- */}
      <div className={styles.cards__card__left}>
        <div
          id={styles.box}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={() => handleMouseLeave(0)}
          className={`${styles.cards__card__item} ${styles.cards__card__item__hover}`}
        >
          <div className={styles.cards__card__item__title}>
            {leftCard.title}
          </div>
          {/* <div className={styles.cards__card__item__img}>
            <img src={rightCardThird.img} alt="" />
          </div> */}
          <div className={styles.cards__card__item__content}>
            <div className={`${styles.cards__card__item__content__text}`}>
              <span>{leftCard.contentText.first}</span>
              <span>{leftCard.contentText.second}</span>
              <span>{leftCard.contentText.third}</span>
            </div>
          </div>
          <a 
            className={`${styles.cards__card__item__content__link}`}
            href={leftCard.link}
            target="_blank" rel="noreferrer"
            
          >
            {leftCard.buttonText}
          </a>
        </div>
      </div>

      {/* ---------------- RIGHT SIDE ---------------- */}
      <div className={styles.cards__card__right}>
        {/* ------ TOP ------ */}
        <div className={styles.cards__card__item__top}>
          <div
            id={styles.box}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
            className={`${styles.cards__card__item} ${styles.cards__card__item__hover}`}
          >
            <div className={styles.cards__card__item__title}>
              {rightCardFirst.title}
            </div>
            <div className={styles.cards__card__item__img}>
              {/* <img src={rightCardThird.img} alt="" /> */}
            </div>
            <div className={styles.cards__card__item__content}>
              <div className={`${styles.cards__card__item__content__text}`}>
                <span>{rightCardFirst.contentText.first}</span>
                <span>{rightCardFirst.contentText.second}</span>
              </div>
              <a
                className={`${styles.cards__card__item__content__link} ${styles.soon}`}
                href={rightCardFirst.link}
                target="_blank" rel="noreferrer"
              >
                <span>{rightCardFirst.buttonText}</span>
              </a>
            </div>
          </div>
        </div>
        {/* ------ BOTTOM ------ */}
        <div className={styles.cards__card__item__bottom}>
          <div
            id={styles.box}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}
            className={`${styles.cards__card__item} ${styles.cards__card__item__first} ${styles.cards__card__item__hover}`}
          >
            <div className={styles.cards__card__item__title}>
              {rightCardSecond.title}
            </div>
            <div className={styles.cards__card__item__img}>
              {/* <img src={rightCardThird.img} alt="" /> */}
            </div>
            <div className={styles.cards__card__item__content}>
              <div className={`${styles.cards__card__item__content__text}`}>
                <span>{rightCardSecond.contentText.first}</span>
                <span>{rightCardSecond.contentText.second}</span>
                <span>{rightCardSecond.contentText.third}</span>
              </div>
              <a
                className={`${styles.cards__card__item__content__link} ${styles.soon}`}
                href={rightCardSecond.link}
                target="_blank" rel="noreferrer"
              >
                <span>{rightCardFirst.buttonText}</span>
              </a>
            </div>
          </div>
          {/* <div
            id={styles.box}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={() => handleMouseLeave(3)}
            className={`${styles.cards__card__item} ${styles.cards__card__item__second} ${styles.cards__card__item__hover}`}
          > */}
            {/* <div className={styles.cards__card__item__title}>
              {rightCardThird.title}
            </div>
            <div className={styles.cards__card__item__img}>
              <img src={rightCardThird.img} alt="" />
            </div>
            <div className={styles.cards__card__item__content}>
              <div className={`${styles.cards__card__item__content__text}`}>
                <span>{rightCardThird.contentText.first}</span>
                <span>{rightCardThird.contentText.second}</span>
                <span>{rightCardThird.contentText.third}</span>
              </div>
              <a
                className={`${styles.cards__card__item__content__link} ${styles.soon}`}
                href={rightCardThird.link}
              >
                <span>{rightCardFirst.buttonText}</span>
              </a>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Cards;
