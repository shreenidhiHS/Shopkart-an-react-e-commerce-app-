import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState:{ 
        isLoggedIn: false ,
        isAdmin : false

    
    },
    reducers:{
        login(state){
            state.isLoggedIn = true;
        },
        logout(state){
            state.isLoggedIn = false;
        },
        isAdmin(state , payload){
            state.isAdmin = true
            console.log(state.isAdmin)
        }
    }
});
export const authActions = authSlice.actions;
export default authSlice
