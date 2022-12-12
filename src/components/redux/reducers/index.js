import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { dataReducer } from "./data";
import { sellerDataReducer } from "./sellerData";

const rootReducer = combineReducers({
  auth: authReducer,
  data: dataReducer,
  sellerData: sellerDataReducer,
});

export default rootReducer;
