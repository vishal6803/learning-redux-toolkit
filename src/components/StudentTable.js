import { useDispatch, useSelector } from "react-redux";
import { deleteStudent, deleteTest, editStudent, setIsEdit, setTest } from "./features/students/studentSlice";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
function StudentTable() {
    const studentData = useSelector((state) => state.student.students)
    const testData = useSelector((state) => state.student.testData)
    const dispatch = useDispatch()
    function edithandle(student, index) {
        // dispatch(editStudent(student))
        dispatch(setTest(student))
        dispatch(setIsEdit(index))

    }
    return (
        // <table>
        //     <thead>
        //         <tr>
        //             <th>Roll No.</th>
        //             <th>Name</th>
        //             <th>Email</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {studentData?.map((student, index) => {
        //             return <tr key={index}>
        //                 <td>{student.roll}</td>
        //                 <td>{student.name}</td>
        //                 <td>{student.email}</td>
        //                 <td>{student.email}</td>
        //                 <td>
        //                     <button onClick={()=>dispatch(deleteStudent(student.roll))}>delete</button>
        //                     <button onClick={()=>edithandle(student)}>edit</button>
        //                 </td>
        //             </tr>
        //         })}
        //         {
        //             testData.map((item,index)=>{
        //                 return <div key={index}>
        //                     {item.test}
        //                     <button onClick={()=>dispatch(deleteTest(index))}>delete</button>
        //                     <button onClick={()=>edithandle(item.test,index)}>edit</button>
        //                 </div>
        //             })
        //         }
        //     </tbody>
        // </table>
        <TableContainer sx={{ width: "50vw", padding: "30px" }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">S No.</TableCell>
                        <TableCell align="center">Roll No.</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Email)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {studentData.map((student, index) => (
                        <TableRow
                            key={student.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">
                                {index + 1}
                            </TableCell>
                            <TableCell align="center">{student.roll}</TableCell>
                            <TableCell align="center">{student.name}</TableCell>
                            <TableCell align="center">{student.email}</TableCell>
                            <TableCell align="center">
                                <DeleteIcon onClick={()=>dispatch(deleteStudent(student.id))} sx={{cursor:"pointer",color:"red"}} />
                                    <EditNoteIcon onClick={()=>{dispatch(editStudent(student.id))}}/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    )
}
export default StudentTable;
