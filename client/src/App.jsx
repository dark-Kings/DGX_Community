// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './container/Home.jsx';
import Navbar from './component/Navbar.jsx';
// import Login from './component/Login.jsx';
import VerifyEmail from './component/VerifyEmail.jsx';
import Register from './component/Register.jsx';
import SignInn from './component/SignInn';
import ForgotPassword from './component/ForgotPassword';
<<<<<<< HEAD
import Login from './component/Login.jsx';
=======
import ChangePassword from './component/ChangePassword.jsx';
>>>>>>> da4b7a9b34c3ff095721dbba8c3e5e97b89811d3


function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/Login" element={<Login />} /> */}
            <Route exact path="/VerifyEmail" element={<VerifyEmail />} />
            <Route exact path="/Register" element={<Register />} />
            <Route path="/SignInn" element={<SignInn />} />
            <Route path="/login" element={<Login />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
<<<<<<< HEAD
=======
            <Route path="/ChangePassword" element={<ChangePassword />} />

            


>>>>>>> da4b7a9b34c3ff095721dbba8c3e5e97b89811d3
          </Routes>
        </div>
        <footer className="footer bg-DGXgreen text-DGXwhite text-center">
          <p>Copyright &copy; 2022</p>
        </footer>
      </div>
    </>
  );
}

export default App;
