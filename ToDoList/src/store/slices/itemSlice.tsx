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
        },
        deleteItem:(state, action: PayloadAction<{id: number}>) => {
            console.log(action.payload.id);
            const index = state.items.findIndex( i => i.id == action.payload.id);
            if (index !== -1) state.items.splice(index, 1)
            // fix non-unique id issue
            
        }
        
    }
})

export default ItemSlice.reducer;
export const { addItem, deleteItem } = ItemSlice.actions;