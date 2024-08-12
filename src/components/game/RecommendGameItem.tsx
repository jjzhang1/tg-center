import React, { useState, useEffect } from "react";
import styles from "./RecommendGameItem.module.css";
import useIsMobile from "@/hooks/useIsMobile";
import { useRouter } from "next/router";

export default function RecommendGameItem({ data }) {
  const isMobile = useIsMobile();
  const router = useRouter();
  return (
    <div
      className={styles.recommendGameItem}
      onClick={() => router.push(`/game/${data?.game_id}`)}
    >
      <div className={styles.image}>
        <img src={data?.cover_url} />
      </div>
      <div className={styles.title}>{data?.name}</div>
      <div className={styles.description}>{data?.short_introduction}</div>
    </div>
  );
}
