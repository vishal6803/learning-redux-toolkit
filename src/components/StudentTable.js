import { useDispatch, useSelector } from "react-redux";
import { deleteStudent, editStudent } from "./features/students/studentSlice";
import {  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useMediaQuery } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
function StudentTable() {
    const isBreakPoint980 = useMediaQuery('(max-width:980px)')

    const studentData = useSelector((state) => state.student.students)
    const dispatch = useDispatch();
    return (
        <TableContainer sx={{ 
            border: '2px solid yellow',
            // width: isBreakPoint980? '100%' : '60%',
            
            
            padding: "30px",
            minWidth:"500px",maxWidth:"600px" 
        }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">S No.</TableCell>
                        <TableCell align="center">Roll No.</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Opetaions</TableCell>
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
                                <DeleteIcon  onClick={()=>dispatch(deleteStudent(student.id))} sx={{cursor:"pointer",color:"red",transform:"scale(0.9)"}} />
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
