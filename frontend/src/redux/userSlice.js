import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
    },

    reducers: {
        loginFetch:(state)=>{
            state.isFetching = true
        },
        loginSuccess:(state)=>{
            state.isFetching = false;
            //state.currentUser = action.payload;
        },
        loginFail:(state)=>{
            state.isFetching = false;
            state.error = true;
        },
        },
    },
);

export const {loginFetch, loginSuccess, loginFail} = userSlice.actions;
export default userSlice.reducer;