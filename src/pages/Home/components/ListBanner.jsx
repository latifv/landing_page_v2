import React from "react";
import styles from "./ListBanner.module.scss";
import { ListBanner } from "../../../utils/constants";
import Button from "../../../components/Button/Button";

const Index = () => {



  return (
    <div className={styles.listBanner}>
      <div className={styles.listBanner__left}>
        <h2>{ListBanner.title}</h2>
        <p>{ListBanner.descFirst}</p>
        <p>{ListBanner.descSecond}</p>
      </div>
      <div className={styles.listBanner__right}>
        <Button
          className={styles.listBanner__right__button__first}
          title={ListBanner.buttonFirst}
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSeleBWaBL1DNRa-RJXjEDX5rnzBw1CXaWTjX8oxGyvo4QJ04w/viewform",
              "_blank"
            )
          }
        />
  
        <Button
          className={styles.listBanner__right__button__second}
          title={ListBanner.buttonSecond}
          onClick={()=>{
            window.open("/hyperstore")
          }}
        />
      </div>
    </div>
  );
};

export default Index;
