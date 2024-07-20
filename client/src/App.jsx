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
import ContactUs from './container/ContactUs.jsx';
import DiscussionModal from './component/DiscussionModal.jsx';
import Notfound from './component/Notfound.jsx';
import ResetPassword from './component/ResetPassword.jsx';
import images from './constant/images.js';
// import LoadPage from './component/LoadPage.jsx';



function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/VerifyEmail" element={<VerifyEmail />} />
            <Route exact path="/Register" element={<Register />} />
            <Route exact path="/SignInn" element={<SignInn />} />
            <Route exact path="/ForgotPassword" element={<ForgotPassword />} />
            <Route exact path='/ResetPassword' element={<ResetPassword />} />
            <Route exact path="/ChangePassword" element={<ChangePassword />} />
            <Route exact path="/UserProfile" element={<UserProfile />} />
            <Route exact path='/Discussion' element={<Discussion />} />
            <Route exact path='/Discussion' element={<Discussion />} />
            <Route exact path='/ContactUs' element={<ContactUs />} />
            <Route exact path='/DiscussionModal' element={<DiscussionModal />} />
            <Route exact path='/404' element={<Notfound />} />
          </Routes>
        </div>

        <footer className="footer bg-DGXblue text-DGXwhite text-justify">
          <div className="container mx-auto px-4 lg:px-8 py-4 flex flex-col lg:flex-row lg:items-start justify-around">
            <div className="flex flex-col items-center lg:items-start mb-4 lg:mb-0">
              <a href="/ContactUs" className="flex items-center mb-2 lg:mb-4 space-x-3 rtl:space-x-reverse">
                <img src={images.giventures} className="h-8" alt="GiVenture Logo" />
              </a>
              <div className="text-center lg:text-left">
                <div className="text-sm tracking-wide mt-2 lg:mt-0">
                  <p>Community Guideline | Manage My Privacy | Do Not Sell or Share My Data | Legal | Accessibility | Corporate Policies | Product Security | Contact</p>
                </div>
                <div className="text-sm font-poppins tracking-wide mt-1">
                  <p>Copyright @ 2024 GI Corporation</p>
                </div>
              </div>
            </div>
          </div>
        </footer>



      </div>
    </>
  );
}

export default App;
