// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './container/Home.jsx';
import Navbar from './component/Navbar.jsx';
import VerifyEmail from './component/VerifyEmail.jsx';
import Register from './component/Register.jsx';
import SignInn from './component/SignInn';
import ForgotPassword from './component/ForgotPassword';
import ChangePassword from './component/ChangePassword.jsx';
import Discussion from './container/Discussion.jsx';
import LoadPage from './component/LoadPage.jsx';



function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
<<<<<<< HEAD
            <Route path="/LoadPage" element={<LoadPage/>} />
            {/* <Route path="/Login" element={<Login />} /> */}
=======
>>>>>>> 2ea2ac951bff18e566e2fa2f10187d090a7fa5e1
            <Route exact path="/VerifyEmail" element={<VerifyEmail />} />
            <Route exact path="/Register" element={<Register />} />
            <Route path="/SignInn" element={<SignInn />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/ChangePassword" element={<ChangePassword />} />
            <Route path="/Discussion" element={<Discussion />} />





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
