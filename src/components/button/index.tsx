import React, { useState, useEffect } from "react";
import styles from "./Button.module.css";
import classnames from "classnames";

export default function Button(props) {
  const {
    btnType = "default",
    size = "large",
    onClick = null,
    children,
    style,
    disabled = false,
    loading = false,
  } = props;

  const buttonClick = () => {
    if (disabled || !onClick || loading) return;
    onClick();
  };

  const styleClass = classnames(styles.button, {
    [styles.default]: btnType === "default",
    [styles.disabled]: btnType === "disabled" || disabled,
    [styles.large]: size === "large",
    [styles.small]: size === "small",
    [styles.medium]: size === "medium",
    [styles.long]: size === "long",
  });

  return (
    <div className={styleClass} style={style} onClick={buttonClick}>
      {loading ? (
        <div className={styles.loadingContent}>
          <img
            src="/assets/img/icon-loading-w.png"
            alt=""
            className={loading ? styles.loading : ""}
          />
          <span>Loading</span>
        </div>
      ) : (
        children || "Save"
      )}
    </div>
  );
}
