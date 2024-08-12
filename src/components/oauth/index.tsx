import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  Ref,
} from "react";
import "./Oauth.module.css";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import useAxios from "@/hooks/useAxios";
import useLoginRefresh from "@/hooks/useLoginRefresh";
import useOauthRefresh from "@/hooks/useCreditRefresh";
import { setOauthInfo, setUserInfo } from "@/redux/actions/walletActions";
import { getStorage, removeStorage } from "@/utils";

interface OauthProps {
  children?: React.ReactNode;
  oType: string;
}

const Oauth = forwardRef((props: OauthProps, ref: Ref<any>) => {
  const { oType } = props;

  const dispatch = useDispatch();

  useImperativeHandle(ref, () => ({
    loginWithTwitter() {
      loginTwitter();
    },
    loginWithDiscord() {
      loginDiscord();
    },
  }));

  const { fetchLoginRefreshData, userInfo } = useLoginRefresh();
  const { fetchOauthRefreshData, oauthInfo } = useOauthRefresh();

  const { data, error, loading, fetchData } = useAxios({
    url: `/api/twitter_login`,
    method: "POST",
  });

  const {
    data: dcLoginData,
    error: dcLoginError,
    loading: dcLoginLoading,
    fetchData: dcLoginFetchData,
  } = useAxios({
    url: `/api/discord_login`,
    method: "POST",
  });

  const authRequest = () => {
    const wallet = getStorage("address");
    fetchLoginRefreshData(wallet);
    fetchOauthRefreshData(wallet);
  };

  // 监听store授权是否成功
  useEffect(() => {
    const handleAuthMessage = (event) => {
      if (event.key === "balance_id") {
        authRequest();
      }
    };
    window.addEventListener("storage", handleAuthMessage);
    return () => {
      removeStorage("balance_id");
      window.removeEventListener("storage", handleAuthMessage);
    };
  }, []);

  useEffect(() => {
    if (userInfo) {
      dispatch(setUserInfo(userInfo));
    }
  }, [userInfo]);

  useEffect(() => {
    if (oauthInfo) {
      dispatch(setOauthInfo(oauthInfo));
    }
  }, [oauthInfo]);

  // 授权弹窗内容
  const dialogContent = (url) => {
    const width = 600;
    const height = 800;
    const left = window.screen.width / 2 - width / 2;
    const top = 0;
    window.open(
      url,
      "Oauth",
      `width=${width},height=${height},top=${top},left=${left}`
    );
  };

  // twitter
  useEffect(() => {
    if (!loading && data && data.code === 0) {
      const authorizationUrl = data.data.redirect_url;
      dialogContent(authorizationUrl);
    }
  }, [loading]);

  // discord
  useEffect(() => {
    if (!dcLoginLoading && dcLoginData && dcLoginData.code === 0) {
      const authorizationUrl = dcLoginData.data.redirect_url;
      dialogContent(authorizationUrl);
    }
  }, [dcLoginLoading]);

  const loginTwitter = () => {
    const href = `${window.location.origin}/callback`;
    fetchData({ callback_url: encodeURIComponent(href) });
  };

  const loginDiscord = () => {
    const href = `${window.location.origin}/callbackd`;
    dcLoginFetchData({
      callback_url: encodeURIComponent(href),
    });
  };

  return <>{props.children}</>;
});

export default Oauth;
