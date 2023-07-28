import React from "react";
import data from "../../../utils/partners.json";
import Marquee from "react-fast-marquee";
import styles from "./Marquee.module.scss";

const Index = () => {
  return (
    <Marquee>
      {Object.entries(data).map(([key, value]) => (
        <img className={styles.Marquee__img} key={key} src={value} alt={key} />
      ))}
    </Marquee>
  );
};

export default Index;
