import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserList from './pages/UserList';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/coup-de-coeur' element={<UserList/>}></Route>
          <Route path='*' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;