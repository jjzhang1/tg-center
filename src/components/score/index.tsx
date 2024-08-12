import React, { useState, useEffect } from "react";
import classnames from "classnames";
import styles from "./Score.module.css";

export default function Score(props) {
  const { width = 52, height = 66, size = 22 } = props;
  return (
    <div className={classnames(styles.scoreWrap)} style={{ width, height }}>
      <span style={{ fontSize: size }}>{props.score}</span>
    </div>
  );
}
