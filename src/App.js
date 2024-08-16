import './App.css';
import Form from './components/Form';
import StudentTable from './components/StudentTable';
import { Provider } from 'react-redux';
import  {store}  from './components/store';
import { Box } from '@mui/material';

function App() {
  return (
    <Provider store={store} >
      <Box sx={{display:"flex"}}>
      <Form />
      <StudentTable />
      </Box>
     
    </Provider>

  );
}

export default App;
