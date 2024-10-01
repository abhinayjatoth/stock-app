import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stocks from './pages/Stocks';
import './App.css';
import Slider from './components/Slider';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path='/slider' element={ <Slider/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;