export const SET_CONTENTS = "SET_CONTENTS";
export const INIT_CONTETNS = "INIT_CONTENTS";
const contents = (contents = [], action) => {
  switch (action.type) {
    case SET_CONTENTS:
      return action.payload;
    case INIT_CONTETNS:
      return [];
    default:
      return contents;
  }
};

export default contents;
