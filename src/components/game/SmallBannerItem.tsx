import React, { useState, useEffect } from "react";
import styles from "./SmallBannerItem.module.css";
import useIsMobile from "@/hooks/useIsMobile";
import { useRouter } from "next/router";

export default function SmallBannerItem({
  active,
  toggleIndex,
  activeIndex,
  data,
  onClick,
}) {
  const isMobile = useIsMobile();
  const router = useRouter();
  return (
    <div
      className={`${styles.smallBannerItem} ${active ? styles.activeItem : ""}`}
      onClick={() => {
        onClick && onClick(activeIndex);
      }}
      style={{
        backgroundImage: `url(${data?.cover_url})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "100%",
      }}
    >
      <div
        className={`${styles.opacityBg} ${
          active ? styles.opacityAnimation : ""
        }`}
      />
    </div>
  );
}
