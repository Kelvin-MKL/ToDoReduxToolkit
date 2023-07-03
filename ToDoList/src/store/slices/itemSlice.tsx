import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Item{
    id: number;
    name: string;
    place: string;
    

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
        addItem: (state, action: PayloadAction<{ name: string; place: string }>) => {
            action.payload.name && action.payload.place ? 
                state.items.push({
                    id: parseInt(Math.random().toString().substring(2,10)),
                    name: action.payload.name,
                    place: action.payload.place,
                }) : console.log("addItem missing a parameter.")
        },
        deleteItem:(state, action: PayloadAction<{id: number}>) => {
            // Find the targeted index, then delete it.
            const index = state.items.findIndex( i => i.id == action.payload.id);
            if (index !== -1) state.items.splice(index, 1)
            
            
        }
        
    }
})

export default ItemSlice.reducer;
export const { addItem, deleteItem } = ItemSlice.actions;