import React from "react";
import styles from "./Button.module.scss";

const Button = ({ title, size, style, className, onClick, isGradient }) => {
  const sizeClass =
    size === "large"
      ? styles.btn_large
      : size === "small"
      ? styles.btn_small
      : "";

  const gradientClass = isGradient ? styles.btn__grad : "";

  return (
    <button
      style={style}
      className={`${className} ${styles.button} ${sizeClass} ${gradientClass}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  size: "",
  style: {},
  className: "",
  onClick: () => {},
  isGradient: false,
};
