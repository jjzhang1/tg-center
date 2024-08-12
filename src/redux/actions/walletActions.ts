export const SET_WALLET_INFO = "SET_WALLET_INFO";
export const SET_USER_INFO = "SET_USER_INFO";
export const SET_OAUTH_INFO = "SET_OAUTH_INFO";
export const SET_SIGNIN_POINTS = "SET_SIGNIN_POINTS";
export const SET_INVITE_POINTS = "SET_INVITE_POINTS";
export const SET_MENU_INFO = "SET_MENU_INFO";

export const setWalletInfo = (
  address: string,
  network: string,
  isConnected: boolean
) => ({
  type: SET_WALLET_INFO,
  payload: { address, network, isConnected },
});

export const setUserInfo = (payload: any) => ({
  type: SET_USER_INFO,
  payload: { ...payload },
});

export const setOauthInfo = (payload: any) => ({
  type: SET_OAUTH_INFO,
  payload: { ...payload },
});

export const setSignPoints = (payload: any) => ({
  type: SET_SIGNIN_POINTS,
  payload: { ...payload },
});

export const setInviteInfo = (payload: any) => ({
  type: SET_INVITE_POINTS,
  payload: { ...payload },
});

export const setMenuInfo = (payload: any) => ({
  type: SET_MENU_INFO,
  payload: { ...payload },
});
