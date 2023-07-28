import React, { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.scss";
import { menuItems } from "../../utils/constants";
import { BaseLogo, Arrow } from "../../assets";
import Button from "../Button/Button";
import { Telegram, Discord, Twitter, Youtube } from "../../assets";
import { Link } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(-1);
  const dropdownRef = useRef([]);
  const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(-1);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mobileMenuRef = useRef(); // Referansı oluştur

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const checkIfClickedOutside = (e) => {
      if (
        isDropdownOpen !== -1 &&
        dropdownRef.current[isDropdownOpen] &&
        !dropdownRef.current[isDropdownOpen].contains(e.target)
      ) {
        setDropdownOpen(-1);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let navbarClasses = [styles.navbar];
  if (scrolled) {
    navbarClasses.push(styles.scrolled);
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    const offset = 100;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    // Dışarı tıklama işlemi olduğunda handleClickOutside fonksiyonunu çalıştır
    document.addEventListener("mousedown", handleClickOutside);

    // Component temizlendiğinde (unmount) event listener'ı kaldır
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Boş bir bağımlılık dizisi ile, bu useEffect sadece ilk render'da çalışır ve event listener'ı temizler

  const socialList = [
    {
      name: "Telegram",
      link: "https://t.me/HyperGPTai ",
      icon: Telegram,
    },
    {
      name: "Telegram",
      link: "https://t.me/hypergpt_news  ",
      icon: Telegram,
    },
    {
      name: "Discord",
      link: "https://discord.com/invite/hypergpt ",
      icon: Discord,
    },
    {
      name: "Twitter",
      link: "https://twitter.com/hypergpt ",
      icon: Twitter,
    },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbar__container}>
        <div className={styles.navbar__left}>
          <Link to={"/"} className={styles.navbar__left__logo}>
            <img src={BaseLogo} alt="" />
          </Link>
          <div className={styles.navbar__left__items}>
            {menuItems.map((item, index) => {
              return (
                <span
                  className={styles.navbar__left__item}
                  onMouseEnter={() => setDropdownOpen(index)}
                  ref={(el) => (dropdownRef.current[index] = el)}
                  onClick={() => {
                    if (item.name.toLowerCase() === "contact") {
                      scrollToContact();
                    }
                  }}
                  key={index} // Add a unique key for each item
                >
                  {item.name}
                  &nbsp;
                  {item.isSubmenu && <img src={Arrow} alt="" />}
                  {isDropdownOpen === index && item.isSubmenu && (
                    <div
                      onMouseLeave={() => setDropdownOpen(-1)}
                      className={styles.navbar__left__item__dropdown}
                    >
                      {item?.submenuItems?.map((submenuItem, subIndex) => {
                        return item === "$HGPT" ||
                          item === "Learn" ||
                          item === "Community" ? (
                          <Link
                            className={
                              styles.navbar__left__item__dropdown__item__link
                            }
                            to={submenuItem.path}
                            key={subIndex} // Add a unique key for each submenu item
                          >
                            <span
                              className={
                                styles.navbar__left__item__dropdown__item
                              }
                            >
                              {submenuItem.name}
                            </span>
                          </Link>
                        ) : (
                          <a
                            rel="noreferrer"
                            target="_blank"
                            href={submenuItem.path}
                            className={
                              styles.navbar__left__item__dropdown__item__link
                            }
                            key={subIndex} // Add a unique key for each submenu item
                          >
                            <span
                              className={
                                styles.navbar__left__item__dropdown__item
                              }
                            >
                              {submenuItem.name}
                            </span>
                          </a>
                        );
                      })}
                    </div>
                  )}
                </span>
              );
            })}
          </div>
        </div>
        <div className={styles.navbar__right}>
          <span className={styles.navbar__right__icons}>
            {socialList.map((item, index) => {
              return (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                >
                  <img src={item.icon} alt="" />
                </a>
              );
            })}
          </span>
          <Button
            onClick={() => window.open("/hyperstore")}
            title="Launch App"
            size="large"
            isGradient={true}
          />
          <span
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className={styles.navbar__mobile__menu}
          >
            <HiMenuAlt1 />
          </span>
          {isMobileMenuOpen && (
            <div
              className={styles.navbar__mobile__menu__items}
              ref={mobileMenuRef}
            >
              {menuItems.map((item, index) => {
                return (
                  <div key={index}>
                    <span
                      className={styles.navbar__mobile__menu__item}
                      onClick={() => {
                        if (item.name.toLowerCase() === "contact") {
                          scrollToContact();
                        } else {
                          setMobileDropdownOpen(
                            isMobileDropdownOpen === index ? -1 : index
                          );
                        }
                      }}
                    >
                      <div>
                        <span>{item.name}</span>
                        {item.isSubmenu && (
                          <span
                            className={styles.navbar__mobile__menu__item__arrow}
                          >
                            {" "}
                            {item.isSubmenu && <img src={Arrow} alt="" />}
                          </span>
                        )}
                      </div>
                      {isMobileDropdownOpen === index && item.submenuItems && (
                        <span
                          className={
                            styles.navbar__mobile__menu__item__dropdown
                          }
                        >
                          {item.submenuItems.map((submenuItem, subIndex) => {
                            return (
                              <Link
                                className={
                                  styles.navbar__left__item__dropdown__item__link
                                }
                                to={submenuItem.path}
                                key={subIndex}
                              >
                                <span
                                  className={
                                    styles.navbar__left__item__dropdown__item
                                  }
                                >
                                  {submenuItem.name}
                                </span>
                              </Link>
                            );
                          })}
                        </span>
                      )}
                    </span>
                  </div>
                );
              })}

              <Button title="Launch App" size="large" isGradient={true} />
              <span className={styles.navbar__right__icons}>
                {socialList.map((item, index) => {
                  return (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      key={index}
                    >
                      <img src={item.icon} alt="" />
                    </a>
                  );
                })}
              </span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
