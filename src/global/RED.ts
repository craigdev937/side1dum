import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ThemeReducer } from "./ThemeSlice";
import { DAPI } from "./DAPI";

export const RED = configureStore({
    reducer: {
        theme: ThemeReducer,
        [DAPI.reducerPath]: DAPI.reducer,
    },      // gDM = getDefaultMiddleware.
    middleware: (gDM) => gDM().concat(DAPI.middleware),
});

setupListeners(RED.dispatch);
export type RootState = ReturnType<typeof RED.getState>;
export type AppDispatch = typeof RED.dispatch;



