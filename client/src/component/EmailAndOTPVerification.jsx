import { useState } from 'react';
import PropTypes from 'prop-types';

const EmailAndOTPVerification = ({ onVerificationComplete }) => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [otp, setOtp] = useState('');
  const [emailVerified, setEmailVerified] = useState(false);

  const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleVerifyEmail = (event) => {
    event.preventDefault();
    const otp = generateOtp();
    setGeneratedOtp(otp);
    console.log('Generated OTP:', otp);
    alert(`OTP sent to email: ${otp}`);
    setEmailVerified(true);
  };

  const handleVerifyOtp = (event) => {
    event.preventDefault();
    if (otp === generatedOtp) {
      onVerificationComplete(emailOrUsername);
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <>
      {!emailVerified ? (
        <form onSubmit={handleVerifyEmail} className="w-full">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Email or Username"
              className="border border-DGXgreen py-2 px-3 w-full rounded"
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit" className="w-full text-lg bg-DGXgreen hover:bg-[#1d4ed8] rounded-full py-3 text-center font-medium text-DGXwhite">
              Verify Email
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleVerifyOtp} className="w-full">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter OTP"
              className="border border-DGXgreen py-2 px-3 w-full rounded"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit" className="w-full text-lg bg-DGXgreen hover:bg-[#1d4ed8] rounded-full py-3 text-center font-medium text-DGXwhite">
              Verify OTP
            </button>
          </div>
        </form>
      )}
    </>
  );
};

EmailAndOTPVerification.propTypes = {
  onVerificationComplete: PropTypes.func.isRequired,
};

export default EmailAndOTPVerification;