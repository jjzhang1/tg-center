import React, { useState, useEffect } from "react";
import "./index.less";
export default function Home() {
  useEffect(() => {
    console.log("index111111111111111111");
  }, []);
  return <main className="home-wrap">indexpage</main>;
}
