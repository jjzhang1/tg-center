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
        blurDataURL="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        width={1}
        height={1}
      />
    </div>
  );
}
