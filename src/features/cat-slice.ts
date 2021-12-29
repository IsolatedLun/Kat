import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useFetchCatsQuery } from "./cats-api-slice";

export interface INF_Cats {
    status: 'idle' | 'success' | 'rejected';
    options: any
    
}

const initialState: INF_Cats = {
    status: 'idle',
    options: {
        'breed': '',
        'limit': 16
    }
}

export const catSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {
        setCats(state, action) {
            if(action.payload.length > 0) {
                state.status = 'success';
            }
        },

        setOption(state, action) {
            const option: 'breed' | 'limit' = action.payload['action']

            state.options[option] = action.payload['val']
        }
    }
})

export default catSlice.reducer;
export const {  setCats, setOption } = catSlice.actions;