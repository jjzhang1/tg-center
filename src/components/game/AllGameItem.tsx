import React, { useState, useEffect } from "react";
import styles from "./AllGameItem.module.css";
import useIsMobile from "@/hooks/useIsMobile";
import { useRouter } from "next/router";

export default function AllGameItem({ data }) {
  const isMobile = useIsMobile();
  const router = useRouter();
  return (
    <div
      className={styles.allGameItem}
      onClick={() => router.push(`/game/${data?.game_id}`)}
    >
      <div className={styles.image}>
        <img src={data?.logo} />
      </div>
      <div className={styles.title}>{data?.name}</div>
    </div>
  );
}
