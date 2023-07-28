import React from "react";
import styles from "./RobotBanner.module.scss";
import { robotBanner } from "../../../utils/constants/RobotBanner";
import Button from "../../../components/Button/Button";
const RobotBanner = () => {
  return (
    <div className={styles.robotBanner}>
      <div className={styles.robotBanner_left}>
        <div className={styles.robotBanner_left__title}>
          <h2>{robotBanner.titleFirst}</h2>
          <h2>{robotBanner.titleSecond}</h2>
          <h2>{robotBanner.titleThird}</h2>
        </div>
        <div className={styles.robotBanner_left__desc}>
          <p>{robotBanner.descFirst}</p>
          <p>{robotBanner.descSecond}</p>
          <p>{robotBanner.descThird}</p>
          <p>{robotBanner.descFourth}</p>
        </div>
        <Button
          className={styles.robotBanner_left__button}
          title={robotBanner.buttonText}
          onClick={()=>{
            window.open("/hyperstore")
          }}
        />
      </div>
      <div className={styles.robotBanner_right}>
        <img src={robotBanner.img} alt="" />
      </div>
    </div>
  );
};

export default RobotBanner;
