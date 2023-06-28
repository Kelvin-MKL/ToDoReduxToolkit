import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Item{
    id: number;
    name: string;

}

interface ItemState{
    items: Item[];
}

const initialState: ItemState = {
    items: []
}

export const ItemSlice = createSlice({
    name: "item",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<{ name: string }>) => {
            state.items.push({
                id: state.items.length,
                name: action.payload.name,
            })
        }
    }
})

export default ItemSlice.reducer;
export const { addItem } = ItemSlice.actions;