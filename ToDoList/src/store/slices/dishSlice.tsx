import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
const USER_URL = 'http://localhost:5297/api/dish'


export const fetchDishes = createAsyncThunk('dish', async () => {
    try {
        const response = await axios.get(USER_URL)
        return response.data
    } catch (error: any) {
        return error.message;
    }
}
)

export interface Dish{
    id: number;
    dishName: string;
    category: string;
    complexity: number;
    efficiency: number;
    time: number;
    cookingMethodId: number;
    

}

interface DishState{
    dishes: Dish[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
}

const initialState: DishState = {
    dishes: [],
    status: 'idle'
}

export const ItemSlice = createSlice({
    name: "dish",
    initialState,
    reducers: {
        
        deleteItem:(state, action: PayloadAction<{id: number}>) => {
            // Find the targeted index, then delete it.
            const index = state.dishes.findIndex( i => i.id == action.payload.id);
            state.dishes.splice(index, 1)
        },
        changeItemStatus:(state, action: PayloadAction<{id: number}>) => {
            // Change isFinished to yes, for caching - long enoung to animate it when it gets deleted.
            const index = state.dishes.findIndex( i => i.id == action.payload.id);
            
            
        },

    },
    extraReducers(builder){
        builder
            .addCase(fetchDishes.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchDishes.fulfilled, (state, action) => {
                state.status = 'succeeded'
                console.log("good")
                console.log(action.payload)
                

                
            })
            .addCase(fetchDishes.rejected, (state, action) => {
                state.status = 'failed'
                console.log(action.error.message)
            })
    }
})

export default ItemSlice.reducer;
export const { deleteItem, changeItemStatus } = ItemSlice.actions;