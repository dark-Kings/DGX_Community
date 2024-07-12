import { useState } from 'react';
import { Link } from 'react-router-dom';
import { images } from '../constant/index.js';

const SignIn = () => {
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleFocus = (event) => {
    const { id } = event.target;
    if (id === 'username') setUsernameFocus(true);
    if (id === 'password') setPasswordFocus(true);
  };

  const handleBlur = (event) => {
    const { id, value } = event.target;
    if (id === 'username' && !value) setUsernameFocus(false);
    if (id === 'password' && !value) setPasswordFocus(false);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center relative">
      {/* Background image for large screens */}
      <div className="lg:w-3/4 hidden lg:flex justify-start items-center p-4 lg:pl-40">
        <img
          src={images.secure}
          alt="Background"
          className="max-w-full max-h-full object-contain"
        />
      </div>
      {/* Sign in form container */}
      <div className="w-full lg:w-1/4 h-screen flex justify-center items-center bg-DGXblue">
        <div className="w-full max-w-sm lg:max-w-lg  lg:static pb-16 top-16 lg:top-auto left-1/2 transform -translate-x-1/2">
          <div className="w-full max-w-100 p-4 rounded-lg shadow-md bg-DGXwhite border-2 border-DGXgreen drop-shadow-2xl">
            <div className='text-center text-6xl mb-2 text-DGXgreen font-black p-4 pb-10'>Sign In</div>
            <div className="flex justify-center items-center mb-4">
              <img src={images.robot} alt="Logo" className="logo-image" />
            </div>
            <h1 className="text-center text-2xl mb-2 pb-10">Welcome to <span className="text-DGXgreen font-black">DGX Community</span></h1>
            <form className="space-y-4">
              <div className="relative">
                <label
                  htmlFor="username"
                  className={`absolute opacity-60 left-4 transition-all duration-300 ${usernameFocus ? 'top-0 text-xs text-DGXgreen' : 'top-1/2 transform -translate-y-1/2'}`}
                >
                  Username or email address
                </label>
                <input
                  id="username"
                  type="text"
                  className="w-full px-4 py-2 border border-DGXgreen rounded-md focus:outline-none focus:border-DGXgreen"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="password"
                  className={`absolute opacity-60 left-4 transition-all duration-300 ${passwordFocus ? 'top-0 text-xs text-DGXgreen' : 'top-1/2 transform -translate-y-1/2'}`}
                >
                  Password
                </label>
                <input
                  id="password"
                  type={passwordVisible ? "text" : "password"}
                  className="w-full px-4 py-2 border border-DGXgreen rounded-md focus:outline-none focus:border-DGXgreen" // Adjusted padding to avoid overlap
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center px-4 text-DGXgreen focus:outline-none"
                >
                  {/* <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} /> */}
                </button>
              </div>
              <div className="text-right mb-4">
                <Link to="/ForgotPassword" className="text-DGXgreen font-bold">Forgot Password?</Link>
              </div>
              <button type="submit" className="w-full py-2 bg-DGXgreen text-DGXwhite text-white rounded-md text-lg focus:outline-none hover:bg-DGXblue">Sign in</button>
            </form>
            <div className="text-center mt-4 py-4">
              Signing in for the first time? <Link to="/SignInn" className="text-DGXgreen font-semibold">Verify here</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
