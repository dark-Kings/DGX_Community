import { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    specialRequirements: '',
    numberOfAttendees: '',
    termsAgreed: false,
    privacyConsented: false,
  });
  const [errors, setErrors] = useState({});

  const handlePhoneChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      phoneNumber: value,
    }));
  };
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full name is required.';
    if (!formData.emailAddress) newErrors.emailAddress = 'Email address is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) newErrors.emailAddress = 'Email address is invalid.';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required.';
    else if (!isValidPhoneNumber(formData.phoneNumber)) newErrors.phoneNumber = 'Phone number is invalid.';
    if (!formData.termsAgreed) newErrors.termsAgreed = 'You must agree to the terms and conditions.';
    if (!formData.privacyConsented) newErrors.privacyConsented = 'You must consent to the privacy policy.';
    if (formData.numberOfAttendees && formData.numberOfAttendees <= 0) newErrors.numberOfAttendees = 'Number of attendees must be a positive number.';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Form is valid, submit the form
      console.log('Form submitted:', formData);
      // Add your form submission logic here
    } else {
      // Set form errors
      setErrors(formErrors);
    }
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-DGXblue">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-screen">
        <h1 className="text-2xl font-semibold mb-4 flex items-center justify-center">Register for Event</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="fullName">
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-md`}
              required
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="emailAddress">
              Email Address:
            </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${errors.emailAddress ? 'border-red-500' : 'border-gray-300'} rounded-md`}
              required
            />
            {errors.emailAddress && <p className="text-red-500 text-sm mt-1">{errors.emailAddress}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="phoneNumber">
              Phone Number:
            </label>
            <PhoneInput
              international
              defaultCountry="IN"
              value={formData.phoneNumber}
              onChange={handlePhoneChange}
              className={`w-full px-3 py-2 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
          </div>
          <hr className='p-4 mt-10 border-black/50' />

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="specialRequirements">
              Special Requirements or Requests:
            </label>
            <textarea
              id="specialRequirements"
              name="specialRequirements"
              value={formData.specialRequirements}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="numberOfAttendees">
              Number of Additional Attendees:
            </label>
            <input
              type="number"
              id="numberOfAttendees"
              name="numberOfAttendees"
              value={formData.numberOfAttendees}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${errors.numberOfAttendees ? 'border-red-500' : 'border-gray-300'} rounded-md`}
              min="0"
            />
            {errors.numberOfAttendees && <p className="text-red-500 text-sm mt-1">{errors.numberOfAttendees}</p>}
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="termsAgreed"
              name="termsAgreed"
              checked={formData.termsAgreed}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <label className="text-blue-600 font-bold" htmlFor="termsAgreed">
              I agree to the terms and conditions.
            </label>
            {errors.termsAgreed && <p className="text-red-500 text-sm mt-1">{errors.termsAgreed}</p>}
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="privacyConsented"
              name="privacyConsented"
              checked={formData.privacyConsented}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <label className="text-blue-600 font-bold" htmlFor="privacyConsented">
              I consent to the privacy policy.
            </label>
            {errors.privacyConsented && <p className="text-red-500 text-sm mt-1">{errors.privacyConsented}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-DGXblue text-white py-2 px-4 rounded-md hover:bg-DGXgreen"
          >
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
