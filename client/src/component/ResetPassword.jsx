import { useState, useContext, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import ApiContext from '../context/ApiContext.jsx';
import { decrypt } from "../utils/decrypt.js";
import { images } from '../constant/index.js';
import Cookies from 'js-cookie';

const ResetPassword = () => {
  // Declare state variables
  const [loading, setLoading] = useState(false)
  const { fetchData, userToken, setUserToken, } = useContext(ApiContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [email, setEmail] = useState('');
  const [signature, setSignature] = useState('');
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    if (userToken != null && userToken != undefined) {
      setIsLoggedIn(true)
      Cookies.remove('userToken');
      setUserToken(null)
    }
    else {
      setIsLoggedIn(false)
    }
  }, [userToken, setUserToken])


  const urlExtract = async () => {
    const params = new URLSearchParams(location.search);
    const encryptedEmail = params.get('email');
    const encryptedReferCode = params.get('signature');

    if (encryptedEmail && encryptedReferCode) {
      const decryptedEmail = await decrypt(encryptedEmail);
      const decryptedSignature = await decrypt(encryptedReferCode);

      if (decryptedEmail && decryptedSignature) {
        setEmail(decryptedEmail);
        console.log(email)
        // console.log(decryptedEmail)
        setSignature(decryptedSignature);
        console.log(signature)
        // console.log(decryptedReferCode)
      } else {
        navigate('/404');
      }
    } else {
      navigate('/404');
    }
  }
  // urlExtract()
  useEffect(() => {
    urlExtract()
  }, [location, navigate])

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (passwordsMatch) {
      // Add your password reset logic here
      const endpoint = "user/resetpassword";
      const method = "POST"
      const body = {

        "email": email,
        "signature": signature,
        "password": newPassword,

      }

      // console.log(body)
      setLoading(true)

      try {

        const data = await fetchData(endpoint, method, body);

        if (!data.success) {
          setLoading(false)
          toast.error("Error in Password Reset", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          return
        } else if (data.success) {
          setLoading(false)
          toast.success("Password Reset done successfully go login", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setTimeout(() => {
            navigate('/SignInn');
          }, 3500);
        }
      } catch (error) {
        setLoading(false)
        toast.error(`Something went wrong try again`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return
      }
      // console.log('Passwords match. Proceed with reset.', newPassword, confirmPassword);
    } else {
      // console.log('Passwords do not match. Please try again.');
      toast.error("Passwords do not match.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
  };

  return (
    loading ? <h1>loading...</h1> : <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center relative">
      {/* Left side with form */}
      <ToastContainer />
      <div className="w-full lg:w-1/2 min-h-screen py-20 px-8 lg:rounded-r-3xl bg-DGXblue flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-xl mx-auto shadow-lg overflow-hidden bg-DGXwhite shadow-DGXgreen p-8">
            <h1 className="text-DGXblue text-3xl mb-6 font-bold text-center">Reset Password</h1>
            <form onSubmit={handleSubmit} className="w-full">
              <div className="mb-4 relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="New Password"
                  className="border border-DGXgreen py-2 px-3 w-full rounded"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-2.5 text-[#4b5563]"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {/* {showPassword ? 'Hide' : 'Show'} */}
                </button>
              </div>
              <div className="mb-4 relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  className={`border border-DGXgreen py-2 px-3 w-full rounded ${passwordsMatch ? '' : 'border-[#ef4444]'}`}
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setPasswordsMatch(e.target.value === newPassword);
                  }}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-2.5 text-[#4b5563]"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {/* {showPassword ? 'Hide' : 'Show'} */}
                </button>
              </div>
              {!passwordsMatch && (
                <p className="text-[#ef4444] mb-4 text-sm">Passwords do not match</p>
              )}
              <div>
                <button type="submit" className="w-full text-lg bg-DGXgreen rounded-full py-3 text-center font-medium text-DGXwhite">Reset Password</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Right side with background image */}
      <div className="lg:w-1/2 hidden lg:flex justify-center items-center lg:pl-1">
        <img
          src={images.secure}
          alt="Background"
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
};

export default ResetPassword;
