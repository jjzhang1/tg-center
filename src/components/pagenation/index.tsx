import React, { useState, useEffect } from "react";
import classnames from "classnames";
import styles from "./pagenation.module.css";

export default function Pagenation(props) {
  const { current = 1, total = 0, size = 10, onChange = () => {} } = props;

  const [pageSize, setPageSize] = useState(0);

  useEffect(() => {
    setPageSize(Math.ceil(total / size));
  }, [total, size]);

  const addPage = () => {
    if (current < total) {
      onChange(current + 1);
    }
  };

  const subPage = () => {
    if (current > 1) {
      onChange(current - 1);
    }
  };

  return (
    <div className={classnames(styles.pagenationWrap)}>
      <div className={styles.number}>
        <span className={styles.current}>{current}</span>
        <span className={styles.line}> / </span>
        <span className={styles.total}>{pageSize}</span>
      </div>
      <div className={styles.icon}>
        <div
          className={classnames(styles.iconL, current === 1 ? styles.disL : "")}
          onClick={subPage}
        ></div>
        <div
          className={classnames(
            styles.iconR,
            current >= pageSize ? styles.disR : ""
          )}
          onClick={addPage}
        ></div>
      </div>
    </div>
  );
}
