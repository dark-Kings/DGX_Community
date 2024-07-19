import { useState } from 'react';
import EmailAndOTPVerification from './EmailAndOTPVerification';
import { images } from '../constant/index.js'; // Adjust the path relative to the component file

const ForgotPassword = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [otpVerified, setOtpVerified] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleVerificationComplete = (email) => {
    setEmailOrUsername(email);
    setOtpVerified(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }
    console.log('Password reset logic goes here:', emailOrUsername, newPassword);
    setEmailOrUsername('');
    setNewPassword('');
    setConfirmPassword('');
    setPasswordsMatch(true);
    setOtpVerified(false);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center relative">
      {/* Left side with form */}
      <div className="w-full lg:w-1/2 min-h-screen py-20 px-8 lg:rounded-r-3xl bg-DGXblue flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-xl mx-auto shadow-lg overflow-hidden bg-DGXwhite shadow-DGXgreen p-8">
            <h1 className="text-DGXblue text-3xl mb-6 font-bold text-center">Forgot Password</h1>
            {!otpVerified ? (
              <EmailAndOTPVerification onVerificationComplete={handleVerificationComplete} />
            ) : (
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
            )}
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
