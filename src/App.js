import './App.css';
import Form from './components/Form';
import StudentTable from './components/StudentTable';
import { Provider } from 'react-redux';
import { store } from './components/store';
import { Box, useMediaQuery } from '@mui/material';


function App() {
  const isBreakPoint980 = useMediaQuery('(max-width:980px)')
  // const isBreakPoint500 = useMediaQuery('(max-width:500px)')
  const styles = {
    parent: { 
      border: '2px solid blue', 
      display: 'flex', 
      width:'100%',
      flexWrap:"wrap",
      gap: '30px', 
      // flexDirection: isBreakPoint980 ? 'column' : 'row',
    },
  }
  return (
    <Provider store={store} >
      <Box sx={styles.parent}>
        <Form />
        <StudentTable />
      </Box>

    </Provider>

  );
}

export default App;
