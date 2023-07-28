import React, { useContext } from "react";
import { NotificationContext } from "../../context/NotificationContext";
import styles from "./Notification.module.scss"; // assuming you have some css/scss for this

const Notification = () => {
  const { state, dispatch } = useContext(NotificationContext);

  if (!state.message) {
    return null;
  }

  let styleClass = "";
  switch (state.type) {
    case "success":
      styleClass = styles.success;
      break;
    case "warning":
      styleClass = styles.warning;
      break;
    case "danger":
      styleClass = styles.danger;
      break;
    default:
      styleClass = "";
      break;
  }

  return (
    <div className={`${styles.notification} ${styleClass}`}>
      <span>{state.message}</span>
      {/* <span>Copy Successful !</span> */}
    </div>
  );
};

export default Notification;
