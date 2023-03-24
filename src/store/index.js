import { configureStore } from "@reduxjs/toolkit";
import uiSlice, { uiActions } from "./ui-slice";

const store = configureStore({
    reducer: {ui: uiSlice.reducer}

})
export default store;