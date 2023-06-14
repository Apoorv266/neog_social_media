import { Route, Routes } from 'react-router-dom';
import './App.css';
import Mockman from "mockman-js";
import Login from './Pages/Login';
import { useContext } from 'react';
import { authContext } from './Contexts/AuthContext';
import Loader from './Components/Loader';
import Signup from './Pages/Signup';
import Home from './Components/Home';

function App() {
  const {loader } = useContext(authContext)
  return (
    <>
      {loader ? <Loader /> : <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/mockman' element={<Mockman />} />
        </Routes>
      </div>}

    </>
  );
}

export default App;
