import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
const USER_URL = 'http://localhost:5297/api/dish'


export const fetchUsers = createAsyncThunk('user', async () => {
    try {
        const response = await axios.get(USER_URL)
        return response.data
    } catch (error: any) {
        return error.message;
    }
}
)

export interface Item{
    id: number;
    name: string;
    place: string;
    isFinished: boolean;
    

}

interface ItemState{
    items: Item[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
}

const initialState: ItemState = {
    items: [{id: 123, name: "Hello", place: "Write some notes", isFinished: false}],
    status: 'idle'
}

export const ItemSlice = createSlice({
    name: "item",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<{ name: string; place: string; }>) => {
            action.payload.name && action.payload.place ? 
                state.items.push({
                    id: parseInt(Math.random().toString().substring(2,10)),
                    name: action.payload.name,
                    place: action.payload.place,
                    isFinished: false,
                    
                   

                }) : console.log("addItem missing a parameter.")
        },
        deleteItem:(state, action: PayloadAction<{id: number}>) => {
            // Find the targeted index, then delete it.
            const index = state.items.findIndex( i => i.id == action.payload.id);
            state.items.splice(index, 1)
        },
        changeItemStatus:(state, action: PayloadAction<{id: number}>) => {
            // Change isFinished to yes, for caching - long enoung to animate it when it gets deleted.
            const index = state.items.findIndex( i => i.id == action.payload.id);
            if (index !== -1) state.items[index].isFinished = !state.items[index].isFinished;
            
        },

    },
    extraReducers(builder){
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded'
                console.log("good")
                // console.log(action.payload)
                const users = {
                    id: parseInt(Math.random().toString().substring(2,10)),
                    name: action.payload.last_name,
                    place: 'no',
                    isFinished: false,
                } 
                state.items.push(users)

                
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed'
                console.log(action.error.message)
            })
    }
})

export default ItemSlice.reducer;
export const { addItem, deleteItem, changeItemStatus } = ItemSlice.actions;