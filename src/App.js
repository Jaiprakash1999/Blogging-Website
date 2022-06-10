// import Reacts from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Topbar from './components/Home/Header/TopBar/Topbar';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Write from './pages/Write/Write';

const App = () => {
  return (
    <div className="container">
      <Topbar />
     
      <Routes> 
        <Route path='/' exact element={<Home />}/>
        <Route path='/blog/:id' element={<Blog />}/>
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Write' element={<Write />} />
      </Routes>
    </div>
  );
}

export default App; 
