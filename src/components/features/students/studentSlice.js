import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  students: [
    {
      id:1,
      name:"Test Name",
      email:"test@gmail.com",
      roll:"123"
    }
  ],
  isEdit: false,
  formData: {
    name: "",
    email: "",
    roll: "",
  }
}


const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setFormData:(state,action)=>{
      console.log(action.payload.name);
      state.formData = {...state.formData,[action.payload.name]:action.payload.value}   
    },
    addStudent: (state, action) => {
      state.students.push(state.formData)
      state.formData = initialState.formData;
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter((student) => student.id !== action.payload)
    },
    editStudent: (state, action) => {
      state.isEdit = true;
     const selected =  state.students.find((student)=>student.id===action.payload)
     state.formData = selected;

    },
    updateStudent:(state,action)=>{
      state.students=state.students.map((student)=>student.id===state.formData.id ? {...student,...state.formData} : student )
      state.formData = initialState.formData;
      state.isEdit = false;
    },
  }
})

export const { setFormData ,addStudent,updateStudent, deleteStudent, editStudent } = studentSlice.actions
export default studentSlice.reducer;