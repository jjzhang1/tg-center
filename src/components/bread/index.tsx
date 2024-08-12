import React, { useState, useEffect, use } from "react";
import classnames from "classnames";
import styles from "./Bread.module.css";
import { useRouter } from "next/router";

export default function Bread(props) {
  const { bread = "All Games", root = "/game", rootName = "Game" } = props;
  const [active, setActive] = useState(null);

  const routeConfigs = [
    {
      pathname: "/search",
      name: "Search",
    },
    {
      pathname: "/omnibus",
      name: "Editor's Pick List",
    },
    {
      pathname: "/gamelist",
      name: "All Games",
    },
    {
      pathname: "/discuss",
      name: "All Views",
    },
    {
      pathname: "/omnlist",
      name: "Editor's Pick",
    },
    {
      pathname: "/game/",
      name: "Introduce",
    },
  ];

  const router = useRouter();

  useEffect(() => {
    const path = router.pathname;
    const route = routeConfigs.find((item) => path.indexOf(item.pathname) >= 0);
    if (route) {
      setActive(route);
    } else {
      setActive(null);
    }
  }, [router]);

  const skip = () => {
    router.push(root);
  };
  return (
    <>
      {active != null ? (
        <div className={classnames(styles.breadWrap)}>
          <span className={styles.root} onClick={skip}>
            {rootName}
          </span>
          <img src="/assets/images/arrow-r.png" alt="" />
          <span className={styles.current}>{active.name}</span>
        </div>
      ) : null}
    </>
  );
}
