import axios from "axios";
import { API } from "../lib/API";
import { GET_USER_INFO } from "../reducers/user";

export const getMyInfo = (token) => async (dispatch) => {
  try {
    const response = await axios.get(`${API}/auth/myinfo?token=${token}`);
    const {
      data: { user },
    } = response;
    if (response.data.status === "success" && user !== null) {
      dispatch({ type: GET_USER_INFO, payload: user });
    } else {
      dispatch({ type: GET_USER_INFO, payload: false });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_USER_INFO, payload: false });
  }
};
