import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { ethers } from "ethers";
import {
  setMenuInfo,
  setUserInfo,
  setWalletInfo,
} from "../../redux/actions/walletActions";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { hideAddress, isMobile, removeStorage } from "@/utils";
import classNames from "classnames";
import styles from "./Top.module.css";
import Input from "../Input";
import Bread from "../bread";

declare global {
  interface Window {
    ethereum: any;
  }
}

export default function Top() {
  const dispatch = useDispatch();
  let [modalIsOpen, setIsOpen] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [active, setActive] = useState("home");
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  const { h, flex, ane, padr30, jud, judb } = styles;

  const address = useSelector((state: any) => state.wallet.address);
  const display_name = useSelector((state: any) => state.userInfo.display_name);
  const avatar = useSelector((state: any) => state.userInfo.avatar);
  const { searchText } = useSelector((state: any) => state.menu);

  const inputChange = (value: string) => {
    setSearchValue(value);
  };

  const onEnterKey = () => {
    if (searchValue) {
      dispatch(setMenuInfo({ searchText: searchValue }));
      router.push("/search");
    }
  };

  useEffect(() => {
    if (router.pathname !== "/search") return;
    if (searchText) {
      setSearchValue(searchText);
    } else {
      router.replace("/game");
    }
  }, []);

  useEffect(() => {
    if (isMobile()) {
      dispatch(setMenuInfo({ displayMenu: false }));
    } else {
      dispatch(setMenuInfo({ displayMenu: true }));
    }
  }, [isMobile()]);

  const nav = (params: any) => {
    sessionStorage.setItem("nav", params);
    router.push(params);
    setActive(params);
  };
  const signout = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className={styles["react-confirm-alert-body"]}>
            <p className={styles["react-confirm-header"]}>
              Sure you want to log out?
            </p>
            <div style={{ marginTop: "18px" }}>
              <button
                onClick={onClose}
                className={styles["react-confirm-cancel"]}
              >
                No
              </button>
              <button
                onClick={async () => {
                  // @ts-ignore
                  let provider = new ethers.providers.Web3Provider(
                    (window as any).ethereum
                  );
                  onClose();
                  await window.ethereum.request({
                    method: "wallet_revokePermissions",
                    params: [
                      {
                        eth_accounts: {},
                      },
                    ],
                  });
                  removeStorage("token");
                  provider.removeAllListeners();
                  removeStorage("address");
                  removeStorage("isConnected");
                  dispatch(setWalletInfo("", "", false));
                  nav("user");
                  router.push("user");
                }}
                className={styles["react-confirm-confirm"]}
              >
                Yes
              </button>
            </div>
          </div>
        );
      },
    });
  };
  const closeModal = () => {
    setIsOpen(true);
  };
  const show = () => {
    setIsOpen(false);
  };
  const handleMouseEnter = () => {
    setShowContent(true);
  };
  const handleMouseLeave = (e: any) => {
    if (e.target.className.indexOf("newModal") <= 0) {
      setShowContent(false);
    }
  };
  const showMenu = () => {
    dispatch(setMenuInfo({ displayMenu: true }));
  };
  const handleClickOutside = (event: any) => {
    if (event.target.closest(".menu-button-click")) {
      dispatch(setMenuInfo({ displayMenu: isMobile() ? true : true }));
    } else {
      dispatch(setMenuInfo({ displayMenu: isMobile() ? false : true }));
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className={classNames(h, flex, ane, padr30, judb)}>
      <Head>
        <style>
          {`
            .react-confirm-alert-overlay {
              background: rgba(0, 0, 0, 0.6) !important;
            }
          `}
        </style>
      </Head>
      <div
        className={classNames(styles.topMenuButton, "menu-button-click")}
      ></div>
      <div className={styles.bread}>
        <Bread />
      </div>
      <div className={styles.right}>
        <div className={styles.search}>
          <Input
            onChange={inputChange}
            value={searchValue}
            enterKey={onEnterKey}
          />
        </div>
        <div
          className={classNames(styles.newModal, flex, ane)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={avatar} className={styles.img2} />
          <div className={styles.d1}>
            <p className={styles.p1}>{display_name}</p>
            <span className={styles.s1}> {hideAddress(address)}</span>
          </div>
          <div
            className={classNames(
              styles.newcontent,
              showContent ? styles.newcontentHover : ""
            )}
          >
            <div
              className={classNames(
                styles.flex,
                styles.ane,
                styles["login-item"]
              )}
              onClick={() => nav("profile")}
            >
              <img
                src="/assets/img/account.png"
                width={20}
                style={{ marginRight: "12px" }}
              />
              Profile
            </div>
            <div
              className={classNames(
                styles.bortop,
                styles.flex,
                styles["login-item"]
              )}
              onClick={() => signout()}
            >
              <img
                src="/assets/img/logout.png"
                width={20}
                style={{ marginRight: "12px" }}
              />
              Sign out
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
