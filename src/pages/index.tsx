import React, { useState, useEffect } from "react";
import "./assets/less/index.less";
import Image from "next/image";

export default function Index(props: any) {
  return (
    <div className="index_container">
      <Image
        src="/assets/images/home.png" // 图片路径
        alt="Descriptive Alt Text"
        layout="responsive"
        width={700}
        height={475}
        placeholder="blur" // 开启模糊占位符
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMGA0NGDIhQTQ0Njc/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAQABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUG/8QAIhAAAQQCAwAAAAAAAAAAAAAAAQIDBBEABRIhMUGB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAaEQACAwADAAAAAAAAAAAAAAABAgADESEiMf/aAAwDAQACEQMRAD8A7iiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICKio6+qu0y2aR1Tf//Z"
      />
    </div>
  );
}
