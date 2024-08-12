import type { AppProps } from "next/app";
import "./globals.less"; // 引入全局样式
import { store } from "@/redux/store";

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div>111</div>
      <Component {...pageProps} />
    </div>
  );
}

export default store.withRedux(App);
