export const SET_CURRENT = "SET_CURRENT";
export const INIT_CURRENT = "INIT_CURRENT";

const current = (current = {}, action) => {
  switch (action.type) {
    case SET_CURRENT:
      return action.payload;
    case INIT_CURRENT:
      return {};
    default:
      return current;
  }
};

export default current;
