import React, { useState, useEffect, useRef } from "react";
import classnames from "classnames";
import styles from "./index.module.css";

export default function Rocket(props) {
  const { contentRef } = props;
  const scrollToTop = () => {
    console.log("scrollToTop", contentRef.current.scrollTop);
    if (contentRef && contentRef.current) {
      contentRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={classnames(styles.rocketWrap)} onClick={scrollToTop}>
      <img src="/assets/images/game/icon-right-w.svg" alt="" />
    </div>
  );
}
