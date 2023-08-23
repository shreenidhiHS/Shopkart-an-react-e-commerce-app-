import { createSlice } from "@reduxjs/toolkit";


const dataSlice = createSlice({
    name: "data",
    initialState:{
        data:[],
        singleProd:[],
        cart:{
            count : 0,
            items : [{}],
            totalprice : 0
        }
    },
    reducers:{
        addData(state,action){
            const apiData = action.payload;
            state.data = apiData;
        },
        addproduct(state,action){
            const newData = action.payload;
            console.log(typeof(newData.id))
            state.data.push(newData)
            
        },
        updateProduct(state, action){
            const update = action.payload;
            const id = parseInt(update.id);
            const Index = state.data.findIndex((obj) => obj.id === id);
            const data = update.data;
            state.data[Index] = data;
            state.data[Index].id = id;
        },
        removeProduct(state,action){
            const arr = state.data;
            const id = action.payload;
            console.log(typeof(id))
            const Id = parseInt(id)
            const Index = state.data.findIndex((obj) => obj.id === Id);
            console.log(Index)
            state.data.splice(Index,1);
            
        },
        getSingle(state , action){
            const id = action.payload;
            const Id = parseInt(id);
            const Index = state.data.findIndex((obj) => obj.id === Id);
            state.singleProd = state.data[Index];
            
        },
        addCart(state , action){
            const id = action.payload;
            const Id = parseInt(id);
            console.log(Id)
            const Index = state.data.findIndex((obj) => obj.id === Id);
            const cartItem = state.data[Index]
            state.cart.items.push(cartItem)
            state.cart.count += 1;
            state.cart.totalprice +=cartItem.price;
            
        },
        removeCart(state , action){
            const id = action.payload;
            const Id = parseInt(id);
            const Index = state.cart.items.findIndex((obj) => obj.id === Id);
            const cartItem = state.cart.items[Index]
            state.cart.totalprice -=cartItem.price;
            state.cart.items.splice(Index , 1);
            state.cart.count -= 1;
            if(state.cart.totalprice < 0)
            {
                state.cart.totalprice = 0;
            }
        }  
    }
});

export const dataActions = dataSlice.actions;
export default dataSlice