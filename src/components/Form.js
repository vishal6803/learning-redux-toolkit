import { useEffect, useState } from "react";
import { addStudent, addTest, editTest, setIsEdit, setTest,setFormData, updateStudent } from "./features/students/studentSlice";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Box, TextField, Button } from "@mui/material";

function Form() {
  const dispatch = useDispatch();
  const { name, email, roll } = useSelector((state) => state.student.formData)
 const isEdit = useSelector((state)=>state.student.isEdit)
 function handleOnChange(e){
   dispatch(setFormData({name:e.target.name,value:e.target.value}))
 }
  const styles = {
    box: { display: "flex", flexDirection: "column", width: "30vw", padding: "30px", textAlign: "center" },
    input: {
      margin: "10px 0px"
    }
  }
  return (
    

    <Box sx={styles.box}>
      <Typography variant="h5">Form</Typography>
      <TextField sx={styles.input} size="small" label="Name" name="name" value={name}  onChange={handleOnChange}/>
      <TextField sx={styles.input} size="small" label="Email" name="email" value={email}  onChange={handleOnChange}/>
      <TextField sx={styles.input} size="small" label="Roll No." name="roll" value={roll} onChange={handleOnChange} />
      {
        !isEdit ? <Button variant="contained" onClick={()=>dispatch(addStudent())}>Add</Button>
        :  <Button variant="contained" onClick={()=>dispatch(updateStudent())}>Update</Button>
      }
      
    </Box>
  );
}

export default Form;
