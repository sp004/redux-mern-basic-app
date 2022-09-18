import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: 
        {
            name: "Souvik",
            email: "souvik@email.com",
        },
        pending: null,
        error: null,
    },
    reducers: {
        update: (state, action) => {
            const {name, email} = action.payload
            state.userInfo.name = name
            state.userInfo.email = email
        }
    },
    extraReducers: {}
})

export const selectUser = (state) => state.user.userInfo
export const {update} = userSlice.actions

export default userSlice.reducer