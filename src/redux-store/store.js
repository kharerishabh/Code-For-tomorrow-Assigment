import { configureStore } from "@reduxjs/toolkit";
import cardDataReducer from "./dataSlice";
import appReducer from "./appSlice";
const appStore = configureStore({
  reducer: {
    cardData: cardDataReducer,
    toogle: appReducer,
  },
});

export default appStore;
