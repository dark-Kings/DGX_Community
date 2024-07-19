import { useState } from 'react';
import { images } from '../constant/index.js'; // Adjust the path relative to the component file

const ForgotPassword = () => {
  const [email, setEmail] = useState('');





  const handleVerifyEmail = (event) => {
    event.preventDefault();
    // Generate OTP and "send" to user
    // Simulating email sending with an alert
    console.log(email)

  };





  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center relative">
      {/* Left side with form */}
      <div className="w-full lg:w-1/2 min-h-screen py-20 px-8 lg:rounded-r-3xl bg-DGXblue flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-xl mx-auto shadow-lg overflow-hidden bg-DGXwhite shadow-DGXgreen p-8">
            <h1 className="text-DGXblue text-3xl mb-6 font-bold text-center">Forgot Password</h1>

            <form onSubmit={handleVerifyEmail} className="w-full">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Email or Username"
                  className="border border-DGXgreen py-2 px-3 w-full rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <button type="submit" className="w-full text-lg bg-DGXgreen hover:bg-[#1d4ed8] rounded-full py-3 text-center font-medium text-DGXwhite">Verify Email</button>
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

export default ForgotPassword;
