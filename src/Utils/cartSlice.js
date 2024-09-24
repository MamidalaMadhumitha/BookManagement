import { createSlice} from "@reduxjs/toolkit";
import { Books } from "./mockdata";

const cartSlice =  createSlice(
  { 
    name:"cart",
    initialState:{

        items: [...Books], 
    },
    reducers:{
      addBook:(state,action) =>{
        state.items.push(action.payload)
        Books.push(action.payload)
      }
    }
}

);
       
  
export const {addBook} =cartSlice.actions;
export default cartSlice.reducer;