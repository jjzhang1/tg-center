import React, { useState, useEffect } from "react";
import styles from "./EditorPart.module.css";
import useIsMobile from "@/hooks/useIsMobile";
import { useRouter } from "next/router";

export default function EditorPart({ data }) {
  const isMobile = useIsMobile();
  const router = useRouter();
  return (
    <div className={styles.editorPart}>
      <div
        className={styles.opacityBg}
        style={{
          backgroundImage: `url(${data?.cover_url})`,
          backgroundSize: "100%",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className={styles.editorPartLeft}>
        <img src={`${data?.cover_url}`} />
        <div className={styles.bottom}>
          <button className={styles.button} />
        </div>
      </div>
      <div className={styles.editorPartRight}>
        <ul className={styles.list}>
          {data?.games &&
            data?.games?.length > 0 &&
            data?.games.map((item, index) => {
              return (
                <li className={styles.item} key={item?.game_id}>
                  <div className={styles.itemLeft}>
                    <img src={item?.logo} />
                  </div>
                  <div className={styles.itemRight}>
                    <div className={styles.title}>{item?.name}</div>
                    <div className={styles.tags}>
                      {item?.tags &&
                        item?.tags.length > 0 &&
                        item?.tags.map((item2) => {
                          return (
                            <span key={item2} className={styles.tag}>
                              {item2}
                            </span>
                          );
                        })}
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
