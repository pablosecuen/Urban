import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../user/userSlice";
import travelReducer from "../travel/travelSlice";


export function makeStore(){
    return configureStore({
        reducer: {
            user: userReducer,
            travel: travelReducer,
        },

    })

}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch