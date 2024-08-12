import React, { useState, useEffect } from "react";
import "./assets/less/index.less";
import Image from "next/image";

export default function Index(props: any) {
  return (
    <div className="index_container">
      <h1>不同的 哈哈哈哈</h1>
      <p className="ignore-p">Recommend</p>
      <button>点击积极</button>
      <Image
        src="/assets/images/home.png" // 图片路径
        alt="Descriptive Alt Text"
        layout="responsive"
        width={700}
        height={475}
        placeholder="blur" // 开启模糊占位符
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAABXGlDQ1BJQ0MgUHJvZmlsZQAAKJF1kL9LAnEYxh/LUMJ+DA0ODjdUk4aZQasKVpBwWEEFDefXS4Pz/HJ3EkFj0So0tYX1N1RjY0MQFDRENDUE5hS5lFzv16tOi154eT88PO/Dywv0+BXONS+Akm4Z2dmktLK6Jvme4UcAAwhiTGEmT8jyAlnwPbureQePmLcRkZVuJC/rN/XQS2a9EdkffPrr76r+vGoymh/UUcYNC/CEieUtiwveIR4x6CjiquCCwyeCcw6ftz1L2RTxFfEwKyp54gficK5DL3RwSauwrxvE9QFVX14UOdQhZLAJCTHEMU1zDmlM/uOPt/0plMGxDYP2CijCoq0EKRwaVOJ56GCYQLidGhXJ4s+//+dq5Row8wb0Vl0tdwic7QHBe1cbPQKGdoHTa64Yys9XPU2vuTEVcziQBPoebft1HPAdAK2qbb/XbLt1TPn0owv9Eyk8ZRhqOi6hAAAAOGVYSWZNTQAqAAAACAABh2kABAAAAAEAAAAaAAAAAAACoAIABAAAAAEAAAACoAMABAAAAAEAAAACAAAAAM7QnpAAAAAUSURBVAgdY/xsGvSfAQiYQAQIAAAmaQJ95rW4wAAAAABJRU5ErkJggg=="
      />
    </div>
  );
}
