import React, { useState, useEffect } from "react";
import styles from "./SmallBannerItemForDetail.module.css";
import useIsMobile from "@/hooks/useIsMobile";
import { useRouter } from "next/router";

export default function SmallBannerItem({
  active,
  toggleIndex,
  data,
  activeIndex,
  onClick,
}) {
  const isMobile = useIsMobile();
  const router = useRouter();
  return (
    <div
      className={`${styles.smallBannerItem} ${
        active ? styles.activeItem : ""
      } ${styles.opacityBg} ${active ? styles.opacityAnimation : ""}`}
      style={{
        backgroundImage: `url(${data})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "100%",
      }}
      onClick={() => {
        onClick && onClick(activeIndex);
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
