import React, { useState, useEffect } from "react";
import styles from "./Tips.module.css";
import classnames from "classnames";

export default function Tips(props: any) {
  const {
    arrow = "top",
    children,
    style,
    text = "Success",
    display,
    callback,
  } = props;

  const styleClass = classnames(styles.tips, {
    [styles.top]: arrow === "top",
    [styles.left]: arrow === "left",
    [styles.bottom]: arrow === "bottom",
    [styles.right]: arrow === "right",
  });

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (display) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
        callback();
      }, 3000);
    }
  }, [display]);

  return (
    <div className={styles.tipsWrapper}>
      {show && (
        <div className={styleClass} style={style}>
          {text}
        </div>
      )}
      {children}
    </div>
  );
}
