import type { AppProps } from "next/app";
import "./globals.less"; // 引入全局样式
import { store } from "@/redux/store";
import routes from "./route";
import Notfound from "./404";

function App({ Component, pageProps, router }: AppProps) {
  if (routes.includes(router.pathname)) {
    return (
      <div>
        <div style={{ color: "red" }}>header</div>
        <Component {...pageProps} />
        <div style={{ color: "red" }}>footer</div>
      </div>
    );
  } else {
    return (
      <div>
        <Notfound />
      </div>
    );
  }
}

export default store.withRedux(App);
