import React, { useState, useEffect } from "react";
import classnames from "classnames";
import styles from "./Loading.module.css";

export default function Loading(props) {
  return (
    <div className={classnames(styles.loading)}>
      <div className={styles.icon}></div>
      {props.message && <div className={styles.message}>{props.message}</div>}
    </div>
  );
}
