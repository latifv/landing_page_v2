import React from "react";
import styles from "./About.module.scss";
import { aboutContent } from "../../utils/constants";
import Button from "../../components/Button/Button";
import Carousel from "../../components/Carousel/Carousel";
import {
  Latif,
  Bulent,
  Alex,
  Altug,
  Fırat,
  Hakan,
  Ilker,
  Merve,
  Soner,
  Sukran,
  Turan,
} from "../../assets";
import {
  Carbon,
  Fabian,
  Ian,
  Musthafa,
  Nathan,
  Pedro,
  Sundeep,
  Yay,
} from "../../assets";

const teamsInfo = [
  {
    name: "Latif",
    img: Latif,
  },
  {
    name: "Bulent",
    img: Bulent,
  },
  {
    name: "Alex",
    img: Alex,
  },
  {
    name: "Altug",
    img: Altug,
  },
  {
    name: "Fırat",
    img: Fırat,
  },
  {
    name: "Hakan",
    img: Hakan,
  },
  {
    name: "Ilker",
    img: Ilker,
  },
  {
    name: "Merve",
    img: Merve,
  },
  {
    name: "Soner",
    img: Soner,
  },
  {
    name: "Sukran",
    img: Sukran,
  },
  {
    name: "Turan",
    img: Turan,
  },
  {
    name: "Carbon",
    img: Carbon,
  },
  {
    name: "Fabian",
    img: Fabian,
  },
  {
    name: "Ian",
    img: Ian,
  },
  {
    name: "Musthafa",
    img: Musthafa,
  },
  {
    name: "Nathan",
    img: Nathan,
  },
  {
    name: "Pedro",
    img: Pedro,
  },
  {
    name: "Sundeep",
    img: Sundeep,
  },
  {
    name: "Yay",
    img: Yay,
  },
];

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about_top}>
        <h2 className={`${styles.about_top__title} ${styles.title}`}>
          {aboutContent.firstTitle}
        </h2>
        <p className={`${styles.about_top__desc} ${styles.desc}`}>
          {aboutContent.firstDesc}
        </p>
      </div>
      {/* <div className={styles.about_middle}>
        <div className={styles.about_middle__left}></div>
        <div className={styles.about_middle__right}></div>
      </div> */}
      <div className={styles.about_bottom}>
        {" "}
        <h2 className={`${styles.about_bottom__title} ${styles.title}`}>
          {aboutContent.secondTitle}
        </h2>
        <p className={`${styles.about_bottom__desc} ${styles.desc}`}>
          {aboutContent.secondDesc}
        </p>
        <Carousel
          items={[
            Latif,
            Bulent,
            Alex,
            Altug,
            Fırat,
            Hakan,
            Ilker,
            Merve,
            Soner,
            Sukran,
            Turan,
          ]}
          active={0}
        />
        <p className={`${styles.about_bottom__desc___other} ${styles.desc}`}>
          {aboutContent.thirdTitle}
        </p>
      </div>

      <div className={styles.listBanner}>
        <div className={styles.listBanner__left}>
          <h2>{aboutContent.fourthTitle}</h2>
        </div>
        <div className={styles.listBanner__right}>
          <Button
            style={{
              backgroundColor: "#aa80f9",
            }}
            className={styles.listBanner__right__button__second}
            title={"Apply Now"}
          />
        </div>
      </div>
      <div className={styles.about_bottom}>
        {" "}
        <h2 className={`${styles.about_bottom__title} ${styles.title}`}>
          {aboutContent.fifthTitle}
        </h2>
        <p
          style={{
            width: "81%",
          }}
          className={`${styles.about_bottom__desc} ${styles.desc}`}
        >
          {aboutContent.fifthDesc}
        </p>
        <Carousel items={teamsInfo} active={0} />
        <p className={`${styles.about_bottom__desc___other} ${styles.desc}`}>
          {aboutContent.sixthTitle}
        </p>
      </div>
    </div>
  );
};

export default About;
