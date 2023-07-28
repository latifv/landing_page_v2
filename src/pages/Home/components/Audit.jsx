import React, { useCallback, useContext } from "react";
import styles from "./Audit.module.scss";
import { auditMid, auditTop } from "../../../utils/constants";
import { BinanceIcon, Certik, Copy, WalletButton, Eth } from "../../../assets";
import { NotificationContext } from "../../../context/NotificationContext";
import { Mexc, Pancakeswap, Bitmart } from "../../../assets";

const Audit = ({ howtoRef }) => {
  const { dispatch } = useContext(NotificationContext);
  const formatToken = (address) => {
    const start = address.substring(0, 2);
    const end = address.substring(address.length - 4);
    return `${start}..................................................${end}`;
  };

  const copyToClipboard = useCallback((text) => {
    navigator?.clipboard?.writeText(text);
    dispatch({
      type: "SET_NOTIFICATION",
      payload: { message: "Copy Successful !", type: "success" },
    });
  }, []);

  const buyList = [
    {
      name: "Mexc",
      img: Mexc,
      link: "https://www.mexc.com/exchange/HGPT_USDT ",
    },
    {
      name: "Pancakeswap",
      img: Pancakeswap,
      link: "https://pancakeswap.finance/",
    },
    {
      name: "Bitmart",
      img: Bitmart,
      link: "https://www.bitmart.com/trade/en-US?symbol=HGPT_USDT ",
    },
  ];

  return (
    <div className={styles.audit}>
      <div className={styles.audit_top}>
        <div ref={howtoRef} className={styles.audit_top__left}>
          <h2>{auditTop.title}</h2>
          <p>{auditTop.descFirst}</p>
          <p>{auditTop.descSecond}</p>
        </div>
        <div className={styles.audit_top__right}>
          <a
            href="https://assetux.com/?action=buy&currency=usd&chain=56&token=hgpt"
            target="_blank"
            rel="noreferrer"
          >
            <img src={WalletButton} alt="" />
          </a>
        </div>
      </div>
      <div className={styles.audit_mid}>
        <p className={styles.audit_mid__title}>{auditMid.title}</p>
        <img src={Certik} alt="" />
        <div className={styles.audit_mid__tokenAddress__container}>
          <div className={styles.audit_mid__tokenAddress}>
            <img src={BinanceIcon} alt="" />
            <span>
              <p>{formatToken(auditMid.tokenAddressFirt)}</p>
            </span>
            <img
              className={styles.audit_mid__tokenAddress__copy}
              src={Copy}
              alt=""
              onClick={() => copyToClipboard(auditMid.tokenAddressFirt)}
            />
          </div>
          <div className={styles.audit_mid__tokenAddress}>
            <img src={Eth} alt="" />
            <span>
              <p>{formatToken(auditMid.tokenAddressFirt)}</p>
            </span>
            <img
              className={styles.audit_mid__tokenAddress__copy}
              src={Copy}
              alt=""
              onClick={() => copyToClipboard(auditMid.tokenAddressFirt)}
            />
          </div>
        </div>
      </div>
      <div className={styles.audit_bottom}>
        {buyList.map((item, index) => {
          return (
            <a
              rel="noreferrer"
              key={index}
              href={item.link}
              target="_blank"
              className={styles.audit_bottom__card}
            >
              <span>Buy On</span>
              <img src={item.img} alt={item.name} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Audit;
