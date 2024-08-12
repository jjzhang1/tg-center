import React, { useState, useEffect, useRef } from "react";
import useIsMobile from "@/hooks/useIsMobile";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./Left.module.css";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { setMenuInfo } from "@/redux/actions/walletActions";

export default function Left() {
  const isMobile = useIsMobile();
  const router = useRouter();
  const [active, setActive] = useState("");
  const { displayMenu } = useSelector((state: any) => state.menu);
  const popupRef = useRef(null);
  const dispatch = useDispatch();

  const nav = (params) => {
    sessionStorage.setItem("nav", params);
    router.push(params);
    setActive(params);
  };

  useEffect(() => {
    const route = router.route.split("/")[1];
    setActive(route);
  }, [router]);
  useEffect(() => {
    // const storedNav = sessionStorage.getItem("nav");
    // if (storedNav !== active) {
    //   setActive(storedNav);
    // }
  }, [active]);

  return (
    <>
      {displayMenu ? (
        <div
          ref={popupRef}
          className={classNames(styles.pad25, styles.leftWrap)}
        >
          <img
            src="/assets/img/1.png"
            onClick={() => nav("/")}
            className={styles.img1}
          />
          <ul className={styles.ul1}>
            <li
              onClick={() => nav("/user")}
              style={{ display: "none" }}
              className={classNames(
                styles.flex,
                styles.ane,
                active === "user" ? styles.active : ""
              )}
            >
              <img
                src="/assets/img/a18un.png"
                style={{ width: 24, height: 24 }}
              />
              Home
            </li>
            <li
              onClick={() => nav("/home")}
              className={classNames(
                styles.flex,
                styles.ane,
                active == "home" || active === "/" || active == "user"
                  ? styles.active
                  : ""
              )}
            >
              {active == "home" || active === "/" || active == "user" ? (
                <img
                  src="/assets/img/a3un-active.png"
                  style={{ width: 24, height: 24 }}
                />
              ) : (
                <img
                  src="/assets/img/a3un.png"
                  style={{ width: 24, height: 24 }}
                />
              )}
              Account
            </li>
            <li
              onClick={() => nav("/account")}
              className={classNames(
                styles.flex,
                styles.ane,
                active === "account" ? styles.active : ""
              )}
            >
              {active == "account" ? (
                <img
                  src="/assets/img/a13un-active.png"
                  style={{ width: 24, height: 24 }}
                />
              ) : (
                <img
                  src="/assets/img/a13un.png"
                  style={{ width: 24, height: 24 }}
                />
              )}
              Rewards
            </li>
            <li
              onClick={() => nav("/game")}
              className={classNames(
                styles.flex,
                styles.ane,
                active === "game" ||
                  active === "search" ||
                  active === "omnibus" ||
                  active === "gamelist" ||
                  active === "discuss" ||
                  active === "omnlist"
                  ? styles.active
                  : ""
              )}
            >
              {active == "game" ||
              active === "search" ||
              active === "omnibus" ||
              active === "gamelist" ||
              active === "discuss" ||
              active === "omnlist" ? (
                <img
                  src="/assets/img/icon-game-active.png"
                  style={{ width: 24, height: 24 }}
                />
              ) : (
                <img
                  src="/assets/img/icon-game.png"
                  style={{ width: 24, height: 24 }}
                />
              )}
              Game
            </li>
            <li
              onClick={() => nav("/savvyID")}
              style={{ display: "none" }}
              className={classNames(
                styles.flex,
                styles.ane,
                active === "savvyID" ? styles.active : ""
              )}
            >
              <img
                src="/assets/img/a1un.png"
                style={{ width: 24, height: 24 }}
              />
              Savvy ID
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}
