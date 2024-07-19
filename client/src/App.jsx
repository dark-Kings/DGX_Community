// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './container/Home.jsx';
import Navbar from './component/Navbar.jsx';
import VerifyEmail from './component/VerifyEmail.jsx';
import Register from './component/Register.jsx';
import SignInn from './component/SignInn';
import ForgotPassword from './component/ForgotPassword';
import ChangePassword from './component/ChangePassword.jsx';
import UserProfile from './component/UserProfile.jsx';
import Discussion from './container/Discussion.jsx';
import Notfound from './component/Notfound.jsx';
import ResetPassword from './component/ResetPassword.jsx';
// import LoadPage from './component/LoadPage.jsx';



function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/LoadPage" element={<LoadPage/>} /> */}
            {/* <Route path="/Login" element={<Login />} /> */}
            <Route exact path="/VerifyEmail" element={<VerifyEmail />} />
            <Route exact path="/Register" element={<Register />} />
            <Route exact path="/SignInn" element={<SignInn />} />
            <Route exact path="/ForgotPassword" element={<ForgotPassword />} />
            <Route exact path='/ResetPassword' element={<ResetPassword />} />
            <Route exact path="/ChangePassword" element={<ChangePassword />} />
            <Route exact path="/UserProfile" element={<UserProfile />} />
            <Route exact path='/Discussion' element={<Discussion />} />
            <Route path='/404' element={<Notfound />} />
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
