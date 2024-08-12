import React, { useState, useEffect } from "react";
import useIsMobile from "@/hooks/useIsMobile";
import Head from "next/head";
import styles from "./LeftTwo.module.css";
import classNames from "classnames";

export default function Top({ onClose, isShow }) {
  const isMobile = useIsMobile();

  const { flex, ane, pl16, pr16, ptb8, lefttop3, jus } = styles;

  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setDisplay(isShow);
  }, [isShow]);

  const closeSwitch = () => {
    onClose();
  };

  return (
    <>
      {display ? (
        <div className={styles.leftTOPfix}>
          <div className={styles.pad25}>
            <div
              onClick={closeSwitch}
              style={{ textAlign: "right", cursor: "pointer" }}
            >
              <img
                src="/assets/img/a7.png"
                className={styles.img2left}
                alt="plus"
              />
            </div>
            <p className={styles.pmy}>My CyberAccount</p>
            <ul className={styles.ul1left}>
              {[1, 2, 3, 4].map((item, index) => (
                <li key={index}>
                  <div className={classNames(flex, ane, pl16, pr16, ptb8)}>
                    <img
                      src="/assets/img/a32.png"
                      style={{ width: 28, height: 28 }}
                    />
                    {/* <Image src='/assets/img/a32.png' alt='' width={28} height={28} /> */}
                    All chain
                  </div>
                  <div
                    className={classNames(
                      lefttop3,
                      flex,
                      ane,
                      jus,
                      pl16,
                      pr16,
                      ptb8
                    )}
                  >
                    <div className={classNames(styles.lefttop1, flex, ane)}>
                      0x3q1...Dad4y
                      <img
                        src="/assets/img/a4.png"
                        className={styles.img2left3}
                        alt="a4"
                      />
                    </div>
                    <div className={styles.lefttop2}>$ 0</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
}
