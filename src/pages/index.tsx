import React, { useState, useEffect } from "react";
import "./assets/less/index.less";
import Image from "next/image";

export default function Index(props: any) {
  return (
    <div className="index_container">
      <Image
        src="/assets/images/home.png"
        alt=""
        layout="responsive"
        placeholder="blur"
        blurDataURL="/assets/images/default.png"
        width={1}
        height={1}
      />
    </div>
  );
}
