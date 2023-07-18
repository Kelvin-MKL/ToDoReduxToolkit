import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Color{
    id: number;
    r: number;
    b: number;
    g: number;
    a?: number | undefined; 
    

}

interface ColorState{
    colors: Color[];
    selected: Color;
}

const initialState: ColorState = {
    colors: [],
    selected: {id: 112312, r: 12, g: 12, b: 12, a: 1}
}

export const ColorSlice = createSlice({
    name: "color",
    initialState,
    reducers: {
        addColor: (state, action: PayloadAction<{ r:number, b:number, g:number, a?: number | undefined }>) => {
            action.payload.r && action.payload.b && action.payload.g ? 
                state.colors.push({
                    id: parseInt(Math.random().toString().substring(2,10)),
                    r: action.payload.r,
                    b: action.payload.b,
                    g: action.payload.g,
                    a: action.payload.a,
                }) : console.log("addColor missing a parameter.")
        },
        deleteColor:(state, action: PayloadAction<{id: number}>) => {
            // Find the targeted index, then delete it.
            const index = state.colors.findIndex( i => i.id == action.payload.id);
            if (index !== -1) state.colors.splice(index, 1)
        },
        
    }
})

export default ColorSlice.reducer;
export const { addColor, deleteColor } = ColorSlice.actions;