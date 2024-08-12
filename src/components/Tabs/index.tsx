import React, { useState, useEffect, useRef, cloneElement } from "react";
import styles from "./Tabs.module.css";
import classNames from "classnames";

export default function Tabs(props) {
  const { tabs, children, tabChange, index } = props;

  const [current, setCurrent] = useState(tabs[0].key);

  const itemClick = (item) => {
    setCurrent(item.key);
    tabChange(item.key);
  };

  useEffect(() => {
    setCurrent(index);
  }, [index]);

  return (
    <div className={classNames(styles.tabsWrap)}>
      <div className={styles.tabsContent}>
        {tabs.length > 0
          ? tabs.map((item, index) => (
              <div
                key={index}
                className={classNames(
                  styles.item,
                  current === item.key ? styles.active : ""
                )}
                onClick={() => itemClick(item)}
              >
                <span>{item.value}</span>
                {item.pops > 0 && (
                  <div className={styles.pops}>{item.pops}</div>
                )}
              </div>
            ))
          : null}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
