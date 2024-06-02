import { createAsyncThunk,createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// contact

export const userget=createAsyncThunk("userget",async()=>{
    const res=await axios.get(`http://localhost:3000/user`);
    return res.data;
})

export const userinsert=createAsyncThunk("userinsert",async(formvalue)=>{
    const res=await axios.post(`http://localhost:3000/user`,formvalue);
    return res;
})

export const userdelete=createAsyncThunk("userdelete",async(id)=>{
    const res=await axios.delete(`http://localhost:3000/user/${id}`);
    return res;
})

export const userupdate=createAsyncThunk("userupdate",async(formvalue)=>{
    const res=await axios.patch(`http://localhost:3000/user/${formvalue.id}`,formvalue);
    return res;
})


//contact

export const contactsget=createAsyncThunk("contactsget",async()=>{
    const res=await axios.get(`http://localhost:3000/contacts`);
    return res.data;
})

export const contactsinsert=createAsyncThunk("contactsinsert",async(formvalue)=>{
    const res=await axios.post(`http://localhost:3000/contacts`,formvalue);
    return res;
})

export const contactsdelete=createAsyncThunk("contactsdelete",async(id)=>{
    const res=await axios.delete(`http://localhost:3000/contacts/${id}`);
    return res;
})

export const contactsupdate=createAsyncThunk("contactsupdate",async(formvalue)=>{
    const res=await axios.patch(`http://localhost:3000/contacts/${formvalue.id}`,formvalue);
    return res;
})


export const UserSlice=createSlice({
    name:'user',
    initialState:{
        name:"Rajesh nagar",
        user:[],
        contact:[]
    },
    reducers:{

    },
    extraReducers:{
        [userget.fulfilled]:(state,action)=>{
         state.user=action.payload;  
        },
        [contactsget.fulfilled]:(state,action)=>{
            state.contact=action.payload;  
        }
     }
    
})

export const {  } = UserSlice.actions
export default UserSlice.reducer