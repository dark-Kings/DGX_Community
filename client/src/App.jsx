// import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './container/Home';
import SignInn from './component/SignInn';
import ForgotPassword from './component/ForgotPassword';
//import './index.css'; // Make sure Tailwind CSS is imported

const App = () => (
  <div className="App">
    <nav className="bg-DGXwhite p-5 flex justify-center">
      <ul className="flex list-none p-0 m-0">
        <li className="mr-4 font-semibold text-DGXblack"><Link to="/home" className="text-white">Home</Link></li>
        <li><Link to="/SignInn" className="text-white font-semibold text-DGXblack">SignInn</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/SignInn" element={<SignInn />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
    </Routes>
  </div>
);

export default App;
