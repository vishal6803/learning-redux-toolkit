import { useEffect, useState} from "react";
import { addStudent } from "./features/students/studentSlice";
import { useDispatch, useSelector } from "react-redux";

function Form() {
  const dispatch = useDispatch()
  const selectedStudent = useSelector(state=>state.student.selectedStudent);

  
  const [formdata,setFormData] = useState({
    name:"",
    roll:"",
    email:"",
  })
  const {name,email,roll} = formdata;
  function handleChange(e){
     setFormData({...formdata , [e.target.name]:e.target.value})
  }
  console.log(formdata);
  function handleSubmit(e){
e.preventDefault();
dispatch(addStudent(formdata))
setFormData({
  name:"",
  roll:"",
  email:"",
})
  }
  useEffect(()=>{ 
    if(selectedStudent!=null)
    setFormData(prev = {...prev,...selectedStudent})
    },[name,email,roll])

  return (
    <form onSubmit={handleSubmit}>
     <input type="text" name="name" placeholder="enter name" value={name}  onChange={handleChange}/>
     <input type="text" name="email" placeholder="enter email" value={email} onChange={handleChange} />
     <input type="text" name="roll" placeholder="enter roll" value={roll} onChange={handleChange}/>
     {!selectedStudent ?  <button type="submit" >Add</button> : <button type="submit" >update</button>}
    </form>
  );
}

export default Form;
