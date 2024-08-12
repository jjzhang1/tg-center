import React, { useState, useEffect } from "react";
import styles from "./BannerItem.module.css";
import useIsMobile from "@/hooks/useIsMobile";
import { useRouter } from "next/router";
import Button from "../button";
// import { Rate } from 'antd';

export default function BannerItem({ data }) {
  const isMobile = useIsMobile();
  const router = useRouter();

  const skipDetails = () => {
    router.push({ pathname: `/game/${data?.game_id}` });
  };

  return (
    <div
      className={styles.bannerItem}
      onClick={() => router.push(`/game/${data?.game_id}`)}
      style={{
        backgroundImage: `url(${data?.cover_url})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "100%",
      }}
    >
      <div className={styles.linearBg}>
        <div className={styles.logo}>
          <img src={data?.logo} />
        </div>
        <div className={styles.title}>{data?.name}</div>
        <div className={styles.description}>{data?.short_introduction}</div>
        {data?.review_user_num && (
          <div className={styles.review}>Reviews {data?.review_user_num}</div>
        )}
        <div className={styles.rate}>
          {/*<Rate disabled defaultValue={5} />*/}
        </div>
        <div className={styles.btnBox}>
          <div className={styles.btnGetStarted}>
            <Button
              size="default"
              style={{ padding: "8px 16px" }}
              onClick={skipDetails}
            >
              <div className={styles.oCardBtn}>
                <span>Get Stared</span>
                <img src="/assets/images/game/icon-go.svg" alt="" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
