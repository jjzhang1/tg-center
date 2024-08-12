import React, { useState, useEffect } from "react";
import styles from "./BannerItemForDetail.module.css";
import useIsMobile from "@/hooks/useIsMobile";
import { useRouter } from "next/router";
// import { Rate } from 'antd';

export default function BannerItem({ data }) {
  const isMobile = useIsMobile();
  const router = useRouter();
  return (
    <div className={styles.bannerItem}>
      <div className={styles.linearBg} />
      <img src={data} />
    </div>
  );
}
