import { Route, Routes } from 'react-router-dom';
import './App.css';
import Mockman from "mockman-js";
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      {/* <h1>test</h1> */}
    <Routes>
    <Route path='/' element={<></>}/>
    <Route path='/login' element={<Login/>}/>
      <Route path='/mockman' element={<Mockman/>}/>
    </Routes>
    </div>
  );
}

export default App;
