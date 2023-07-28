import { useContext, useCallback } from "react";
import { BaseLogo } from "../../assets";
import { footerTop } from "../../utils/constants";
import { footerBottomItems, footerSocial } from "../../utils/constants/Footer";
import Button from "../Button/Button";
import { NotificationContext } from "../../context/NotificationContext";
import styles from "./Footer.module.scss";
import axios from "axios";
import { useState } from "react";

const Footer = () => {
  const { dispatch } = useContext(NotificationContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [inquiry, setInquiry] = useState("");

  const instance = axios.create({
    baseURL: "http://68.219.222.192:8080",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST",
      "Access-Control-Allow-Headers":
        "Content-Type, Authorization, X-Requested-With",
    },
  });

  const handleSubmit = useCallback(async () => {
    if (!name || !email || !inquiry || !message) {
      dispatch({
        type: "SET_NOTIFICATION",
        payload: {
          message: "Please fill in all fields.",
          type: "danger",
        },
      });
    } else {
      try {
        const params = new URLSearchParams({
          message,
          subject: inquiry,
          email,
          username: name,
        });
        await instance.post(`/user/sendAdminMessage?${params.toString()}`);

        dispatch({
          type: "SET_NOTIFICATION",
          payload: {
            message: "The message has been successfully sent.",
            type: "success",
          },
        });
        setName("");
        setEmail("");
        setMessage("");
        setInquiry("");
      } catch (error) {
        // Handle error if the API request fails
        console.error("Error sending message:", error);
      }
    }
  }, [dispatch, name, email, inquiry, message]);

  return (
    <footer className={styles.footer}>
      <div id="contact" className={styles.footer_top}>
        <div className={styles.footer_top__left}>
          <div className={styles.footer_top__left__text}>
            <div className={styles.footer_top__left__title}>
              <h2>{footerTop.titleFirst}</h2>
              <h2>{footerTop.titleSecond}</h2>
            </div>
            <div className={styles.footer_top__left__desc}>
              <p>{footerTop.descFirst}</p>
              <p>{footerTop.descSecond}</p>
              <p>{footerTop.descThird}</p>
              <p>{footerTop.descFourth}</p>
            </div>
            <a href="#">{footerTop.mail}</a>
          </div>
          <div className={styles.footer_top__left__social}>
            <div>FOLLOW US ON</div>
            <div className={styles.footer_top__left__social__icons}>
              {footerSocial.map((item, index) => {
                return (
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <img src={item.icon} alt={item.name} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.footer_top__right}>
          <div className={styles.footer_top__right__form}>
            <input
              type="text"
              placeholder="Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              placeholder="Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
          </div>
          <input
            value={inquiry}
            onChange={(e) => setInquiry(e.target.value)}
            type="text"
            placeholder="Your inquiry about"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message..."
            required
          ></textarea>
          <Button
            onClick={handleSubmit}
            title="Submit Now"
            isGradient={true}
            style={{
              width: "fit-content",
            }}
          />
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <div className={styles.footer_bottom__first}>
          <img src={BaseLogo} alt="" />
          <p>
            <strong>Decentralogic Limited</strong>
            <br />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Intershore+Chambers,+PO+Box+4342,+Road+Town,+Tortola,+VG1110,+BV"
              target="_blank"
              rel="noopener noreferrer"
            >
              Intershore Chambers, PO Box 4342, Road Town, <br /> Tortola,
              VG1110, BV
            </a>
          </p>
        </div>

        {footerBottomItems.map((item, index) => {
          return (
            <div className={styles.footer_bottom__second}>
              <span>{item.title}</span>
              {item.items.map((item, index) => {
                return <a href={item.link}>{item.name}</a>;
              })}
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
