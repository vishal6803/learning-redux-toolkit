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
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter((student) => student.id !== action.payload)
    },
    editStudent: (state, action) => {
      state.isEdit = true;
     const selected =  state.students.find((student)=>student.id==action.payload)
     state.formData = selected;

    },
    updateStudent:(state,action)=>{
      state.students=state.students.map((student)=>student.id==state.formData.id ? {...student,...state.formData} : student )
    },

    setTest: (state, action) => {
      state.test = action.payload;
    },
    addTest: (state, action) => {
      state.testData.push({ test: state.test })
    },
    editTest: (state, action) => {
      const newData = state.testData
      newData[state.isedit].test = state.test
      state.testData = newData;
    },
    setIsEdit: (state, action) => {
      state.isedit = action.payload
    },
    deleteTest: (state, action) => {
      state.testData = state.testData.filter((value, index) => index !== action.payload)
    }

  }
})

export const { setFormData ,addStudent,updateStudent, deleteStudent, editStudent, setTest, addTest, editTest, setIsEdit, deleteTest } = studentSlice.actions
export default studentSlice.reducer;