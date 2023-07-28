import React from "react";
import styles from "./BottomCards.module.scss";
import { cards } from "../../../utils/constants";

const BottomCards = () => {
  return (
    <div className={styles.bottomCards}>
      {cards.map((item, index) => {
        return (
          <div className={styles.bottomCards_card}>
            <div>
              <img src={item.icon} alt="" />
            </div>
            <div>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BottomCards;
