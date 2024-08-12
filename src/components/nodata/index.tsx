import React, { useState, useEffect } from "react";
import classnames from "classnames";
import styles from "./Nodata.module.css";

export default function Nodata(props: any) {
  return (
    <div className={classnames(styles.nodata)}>
      <div className={styles.icon}></div>
      <div className={styles.title}>{props.title || "No data"}</div>
      {props.message && (
        <div className={styles.message}>
          {props.message || "No data to display！"}
        </div>
      )}
    </div>
  );
}
