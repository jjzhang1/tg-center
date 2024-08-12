export const SET_USER_INFO = "SET_USER_INFO";

export const setUserInfo = (payload: any) => ({
  type: SET_USER_INFO,
  payload: { ...payload },
});
