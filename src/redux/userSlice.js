import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users : {
        data: [],
        isLoading: false,
        error: ""
    }
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.users.isLoading = action.payload
        }
    },
    extraReducers: {}
})

export const {setLoading} = userSlice.actions
export default userSlice.reducer