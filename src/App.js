import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import { useContext } from 'react';
import { authContext } from './Contexts/AuthContext';
import Loader from './Components/Loader';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import PrivateRoute from './Components/PrivateRoute';



function App() {
  const {loader } = useContext(authContext)
  return (
    <>
      {loader ? <Loader /> : <div className="App">
        <Routes>
          <Route path='/*' element={<PrivateRoute><Home/></PrivateRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>}

    </>
  );
}

export default App;
