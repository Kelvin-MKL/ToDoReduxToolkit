import { configureStore } from "@reduxjs/toolkit";
import { ItemSlice } from "./slices/itemSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store=configureStore({
    reducer: {
        item:ItemSlice.reducer
    }

})

export const useAppDispatch: ()=> typeof store.dispatch=useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;