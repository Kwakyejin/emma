export const LOADING_START = "LOADING_START";
export const LOADING_END = "LOADING_END";

const loading = (loading = false, action) => {
  switch (action.type) {
    case LOADING_START:
      return true;
    case LOADING_END:
      return false;
    default:
      return loading;
  }
};

export default loading;
