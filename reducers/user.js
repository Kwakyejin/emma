export const GET_USER_INFO = "GET_USER_INFO";

const user = (user = "not-yet", action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return action.payload;
    default:
      return user;
  }
};

export default user;
