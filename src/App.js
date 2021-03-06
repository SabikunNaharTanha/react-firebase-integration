import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import './App.css';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>

    </div>
  );
}

export default App;
