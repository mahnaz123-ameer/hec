import layout from "./layout";
import auth from "./api/auth/authSlice";
import commonSlice from "./common/commonSlice";

const rootReducer = {
  layout,
  auth,
  commonSlice,
};
export default rootReducer;
