import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./notifications.module.scss";

const Notification = ({ message, type }) => {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setDisplay("none");
    }, 2500);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.notificationContainer} ${
          type === "success" ? styles.success : styles.error
        } ${display && styles.hide}`}
        onClick={() => setDisplay("none")}
      >
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
};

export default Notification;
