import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";

export const store = configureStore({
    reducer: {
        cartState: cartReducer,
        //other reducers can be provider here
    }
});