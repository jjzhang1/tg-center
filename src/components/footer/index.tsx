import React, { useState, useEffect } from "react";
import styles from "./Footer.module.css";
import useIsMobile from "@/hooks/useIsMobile";
import classNames from "classnames";
import Link from "next/link";
export default function Footer() {
  const isMobile = useIsMobile();
  const { flex, ane, jus, wrap } = styles;
  return (
    <div className={styles.foot}>
      <div className={classNames(flex, ane, wrap, jus)}>
        <div className={styles.w570}>
          <div className={styles.subtitle}>
            <img src="/assets/images/footer/logo-w.png" alt="" />
          </div>
          <div className={`${styles.c80}`}>
            Balance is a Web3 ecosystem dedicated to Web3 gaming, leveraging a
            user base of 260M to revolutionize the gaming industry with
            blockchain and AI technology.
          </div>
        </div>
        <div className={styles.w420}>
          <ul className={`${styles.flex} ${styles.jus} ${styles.footerUl}`}>
            <li>
              <h6 className={`${styles.cf} ${styles.fs20}`}>Home</h6>
              <p>
                <Link href="/game">About Us</Link>
              </p>
              <p>
                <Link href="/game">Advantage</Link>
              </p>
              <p>
                <Link href="/game">Tokens</Link>
              </p>
            </li>
            <li>
              <h6 className={`${styles.cf} ${styles.fs20}`}>Community</h6>
              <p>
                <a href="https://www.epal.gg/" target="__blank">
                  E-Pal
                </a>
              </p>
              <p>
                <a href="https://x.com/Balance_Games" target="__blank">
                  Twitter
                </a>
              </p>
              <p>
                <a href="https://discord.gg/balance-games" target="__blank">
                  Discord
                </a>
              </p>
            </li>
            <li>
              <h6 className={`${styles.cf} ${styles.fs20}`}>Support</h6>
              <p>
                <Link href="/privacy">Privacy Policyr</Link>
              </p>
              <p>
                <Link href="/terms">Terms of Services</Link>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.fBottom}>
        <div className={styles.internet}>
          © 2024 balance game all rights reserved.
        </div>
        <div className={styles.social}>
          <a href="https://discord.gg/balance-games" target="_blank" rel="">
            <img src="/assets/images/footer/discord.svg" alt="" />
          </a>
          <a href="https://x.com/Balance_Games" target="_blank" rel="">
            <img src="/assets/images/footer/twitter.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
