import React, { useState, useEffect } from "react";
import styles from "./HotGameItem.module.css";
import useIsMobile from "@/hooks/useIsMobile";
import { useRouter } from "next/router";
import Button from "../button";

export default function HotGameItem({ data }) {
  const isMobile = useIsMobile();
  const router = useRouter();
  return (
    <div
      className={styles.hotGameItem}
      onClick={() => router.push(`/game/${data?.game_id}`)}
    >
      <div className={styles.image}>
        <img src={data?.cover_url} />
      </div>
      <div className={styles.title}>{data?.name}</div>
      <div className={styles.description}>{data?.short_introduction}</div>
      <div className={styles.btnBox}>
        {/* <button className={styles.btnGetStarted} /> */}
        <Button
          size="default"
          style={{ padding: " 7px 7px 7px 14px", width: "130px" }}
          onClick={() => router.push(`/game/${data?.game_id}`)}
        >
          <div className={styles.oCardBtn}>
            <span>Get Stared</span>
            <img src="/assets/images/game/icon-go.svg" alt="" />
          </div>
        </Button>
        <div className={styles.participants}>
          <ul className={styles.list}>
            {data?.user_logos && data?.user_logos.length > 0 && (
              <li className={styles.participantsNum}>
                +{data?.user_logos?.length}
              </li>
            )}

            {data?.user_logos &&
              data?.user_logos.length > 0 &&
              data?.user_logos.map((item) => {
                <li className={styles.head} key={item} style={{ zIndex: 3 }}>
                  <img src={item} />
                </li>;
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}
