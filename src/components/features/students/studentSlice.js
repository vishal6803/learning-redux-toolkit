import { createSlice, current } from "@reduxjs/toolkit";
import { act } from "react";


const initialState = {
    students:[],
    selectedStudent:null
}


const studentSlice = createSlice({
    name:"student",
    initialState,
    reducers:{
        addStudent: (state,action)=> {
          state.students.push(action.payload)
        },
        deleteStudent:(state,action)=>{
            console.log(action.payload,"delete");           
          state.students = state.students.filter((student)=>student.roll!==action.payload)           
        },
        editStudent :(state,action)=>{
        state.selectedStudent = action.payload;
        }
    }
})

export const {addStudent,deleteStudent,editStudent} = studentSlice.actions
export default studentSlice.reducer;