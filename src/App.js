// import Reacts from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <div className="container">
      <h1 className='heading_style'> Blogger</h1>
      <Routes> 
        <Route path='/' exact element={<Home />}/>
        <Route path='/blog/:id' element={<Blog />}/>
      </Routes>
    </div>
  );
}

export default App; 
