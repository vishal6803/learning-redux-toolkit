import './App.css';
import Form from './components/Form';
import StudentTable from './components/StudentTable';
import { Provider } from 'react-redux';
import  {store}  from './components/store';

function App() {
  return (
    <Provider store={store} >
      <Form />
      <StudentTable />
    </Provider>

  );
}

export default App;
