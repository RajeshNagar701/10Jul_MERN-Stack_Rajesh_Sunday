import { createSlice } from '@reduxjs/toolkit'


export const DataSlice = createSlice({
    name: 'DataSlice',
    initialState:{
        username: "Rajesh nagar",
        age: 33,
        number: 1,
        isImage: true
    },
    reducers:{
        CHANGE:(state)=>{
            return({...state,username:"Akash Nagar",age:35});
        },
        PLUS:(state)=>{
            return({...state,number:state.number+1});
        },
        MINUS:(state)=>{
            return({...state,number:state.number-1});
        },
        HIDE:(state)=>{
            return({...state,isImage:false});
        },
        SHOW:(state)=>{
            return({...state,isImage:true});
        },
        TOOGLE:(state)=>{
            return({...state,isImage:!state.isImage});
        }
    }

});

export const { CHANGE, PLUS,MINUS ,HIDE,SHOW,TOOGLE } = DataSlice.actions
export default DataSlice.reducer