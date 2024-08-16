import { useDispatch, useSelector } from "react-redux";
import { deleteStudent, editStudent } from "./features/students/studentSlice";

function StudentTable() {
    const studentData = useSelector((state)=>state.student.students)
const dispatch = useDispatch()
    
    return (
        <table>
            <thead>
                <tr>
                    <th>Roll No.</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {studentData?.map((student, index) => {
                    return <tr key={index}>
                        <td>{student.roll}</td>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>
                            <button onClick={()=>dispatch(deleteStudent(student.roll))}>delete</button>
                            <button onClick={()=>dispatch(editStudent(student))}>edit</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}
export default StudentTable;
