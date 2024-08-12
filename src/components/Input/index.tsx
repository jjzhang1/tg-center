import React, { useState, useEffect, useRef } from "react";
import styles from "./Input.module.css";
import classNames from "classnames";

export default function Input(props: any) {
  const { placeholder = "Search", onChange, value = "", enterKey } = props;

  const [values, setValues] = useState("");

  useEffect(() => {
    setValues(value);
  }, [value]);

  const inputChange = (e: any) => {
    setValues(e.target.value);
    onChange(e.target.value);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      enterKey();
    }
  };

  const clearValue = () => {
    setValues("");
    onChange("");
  };

  return (
    <div className={classNames(styles.inputWrap, values ? styles.width : "")}>
      <div className={styles.iconSearch}></div>
      <input
        className={classNames(styles.input)}
        type="text"
        placeholder={placeholder}
        onChange={inputChange}
        onKeyDown={handleKeyDown}
        value={values}
      />
      <div className={styles.iconClose} onClick={clearValue}></div>
    </div>
  );
}
