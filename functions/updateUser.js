import axios from "axios";
import { API } from "../lib/API";

export const updateUser = async (updatedUser) => {
  try {
    await axios
      .put(`${API}/auth/user`, { updatedUser: updatedUser })
      .then((res) => {
        if (res.data.status === "success") {
          return true;
        } else {
          return false;
        }
      });
  } catch (error) {
    return error;
  }
};
