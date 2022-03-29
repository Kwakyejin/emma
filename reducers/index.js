import { combineReducers } from "redux";
import user from "./user";
import contents from "./contents";
import current from "./currentPopUp";
import loading from "./loading";

export default combineReducers({ user, contents, current, loading });
