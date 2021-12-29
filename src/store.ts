import { configureStore } from "@reduxjs/toolkit";

import { catApi } from "./features/cats-api-slice";
import catReducer from './features/cat-slice'
import catSlice from "./features/cat-slice";
import { getDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

export const store = configureStore({
    reducer: {
        cats: catReducer,
        [catApi.reducerPath]: catApi.reducer
    },
    
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(catApi.middleware);
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;