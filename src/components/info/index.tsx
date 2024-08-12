import React, { useState, useEffect, useRef } from "react";
import styles from "./Info.module.css";
import classnames from "classnames";
import { getStorage, hideAddress } from "@/utils";
import { useSelector } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxios from "@/hooks/useAxios";
import Oauth from "@/compontents/oauth";
import Tips from "../tips";
import LeftTwo from "../leftTwo";

export default function UserInfo(props) {
  const [totalPoints, setTotalPoints] = useState(0);
  const [displayName, setDisplayName] = useState("");

  const oauthRef = useRef<any>();

  const { reviewClick, page } = props;

  const { flex, ane, t6, obind, tbind, jus } = styles;

  const {
    display_name,
    avatar,
    is_bind_twitter,
    is_bind_discord,
    is_follow_twitter,
    is_follow_discord,
    twitter_name,
    discord_name,
    current_rank,
  } = useSelector((state: any) => state.userInfo);

  const {
    bind_credit_twitter,
    follow_credit_twitter,
    bind_credit_discord,
    follow_credit_discord,
    signInPoints,
  } = useSelector((state: any) => state.oauth);

  const { total_credit } = useSelector((state: any) => state.invite);

  const { address } = useSelector((state: any) => state.wallet);

  const [showTips, setShowTips] = useState(false);

  const [showSwitchChain, setShowSwitchChain] = useState(false);

  const handleCopy = () => {
    setShowTips(true);
  };

  const copyHide = () => {
    setShowTips(false);
  };

  useEffect(() => {
    const total =
      Number(bind_credit_twitter) +
      Number(follow_credit_twitter) +
      Number(bind_credit_discord) +
      Number(follow_credit_discord) +
      Number(signInPoints) +
      Number(total_credit);
    setTotalPoints(total);
  }, [
    bind_credit_twitter,
    follow_credit_twitter,
    bind_credit_discord,
    follow_credit_discord,
    signInPoints,
    total_credit,
  ]);

  const authRequest = () => {
    const wallet = getStorage("address");
    setDisplayName(hideAddress(wallet));
  };

  useEffect(() => {
    authRequest();
  }, []);

  const loginTwitter = () => {
    oauthRef.current.loginWithTwitter();
  };

  const loginDiscord = () => {
    oauthRef.current.loginWithDiscord();
  };

  const closeSwitchChain = () => {
    setShowSwitchChain(false);
  };

  const showSiwtchChain = () => {
    setShowSwitchChain(true);
  };

  return (
    <>
      <div className={styles.div1P}>
        <div className={classnames(styles.div1, flex, jus, ane)}>
          <div className={classnames(flex, ane)}>
            <img src={avatar} className={styles.img3} />
            <div>
              <div className={classnames(styles.p2, flex, ane)}>
                <img
                  src="/assets/img/a14.png"
                  className={classnames(styles.img31)}
                />
                <span className={classnames(styles.t1)}>BNB Mainnet</span>
                {/* <div className={styles.switchChain} onClick={showSiwtchChain}>
                  <img src="/assets/img/a8.png" className={styles.img4} />
                  <span className={styles.t2}>Switch Chain</span>
                </div> */}
              </div>
              <p className={classnames(styles.t3, flex, ane)}>
                {display_name}
                <span className={styles.t4}>Mint Balance ID</span>
              </p>
              <div className={classnames(flex, ane, styles.t5)}>
                {hideAddress(address)}
                <Tips text="Copied" display={showTips} callback={copyHide}>
                  <CopyToClipboard text={address} onCopy={handleCopy}>
                    <div className={styles.img5}></div>
                  </CopyToClipboard>
                </Tips>
              </div>
              <div className={classnames(flex, ane, styles.t7)}>
                {!is_bind_twitter && (
                  <Oauth ref={oauthRef} oType="twitter">
                    <span
                      className={classnames(flex, ane, t6, tbind)}
                      onClick={loginTwitter}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src="/assets/img/a10.png"
                        className={classnames(styles.img6)}
                      />
                      Add
                    </span>
                  </Oauth>
                )}
                {is_bind_twitter && (
                  <span className={classnames(flex, ane, t6, obind)}>
                    <img
                      src="/assets/img/a10.png"
                      className={classnames(styles.img6)}
                    />
                    {twitter_name}
                  </span>
                )}
                {!is_bind_discord && (
                  <Oauth ref={oauthRef} oType="discord">
                    <span
                      className={classnames(flex, ane, t6, tbind)}
                      onClick={loginDiscord}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src="/assets/img/a2.png"
                        className={classnames(styles.img7)}
                      />
                      Add
                    </span>
                  </Oauth>
                )}
                {is_bind_discord && (
                  <span className={classnames(flex, ane, t6, obind)}>
                    <img
                      src="/assets/img/a2.png"
                      className={classnames(styles.img7)}
                    />

                    {discord_name}
                  </span>
                )}
                {/* <span className={classnames("flex ane t8")}>
                <img src="/assets/img/a15.png" className={classnames("img8")} />
                Add
              </span> */}
              </div>
            </div>
          </div>
          <div className={classnames(styles.righttxt)}>
            <p className={classnames(styles.aend, flex, ane)}>
              <img
                src="/assets/img/a24.png"
                width={32}
                style={{ marginRight: "8px" }}
              />
              {totalPoints}
            </p>
            <p className={classnames(styles.t151, styles.aend)}>
              Current ranking：{current_rank}
            </p>
            {page === "account" && (
              <div className={styles["v-records"]} onClick={reviewClick}>
                <span>View records</span>
                <img src="/assets/images/arrow-r.png" alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <LeftTwo onClose={closeSwitchChain} isShow={showSwitchChain} /> */}
    </>
  );
}
