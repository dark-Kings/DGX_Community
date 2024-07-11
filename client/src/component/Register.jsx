import React, { useState } from "react";
import { images } from "../constant/index.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateEmail, validatePassword } from "../utils/formValidation.js";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    collegeName: "",
    contactNumber: "",
    designation: "",
    email: "",
    category: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [messages, setMessages] = useState({
    number: false,
    specialChar: false,
    uppercase: false,
    lowercase: false,
    length: false,
  });

  const handleChange = (e) => {
    const { id, name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "newPassword") {
      const inputValue = value;
      const passwordInput = document.getElementById(id);
      validatePassword(passwordInput, inputValue);
    }
    if (name === "email") {
      const emailInput = document.getElementById(id);
      validateEmail(emailInput, value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { newPassword, confirmPassword } = formData;

    if (Object.values(messages).some((message) => message)) {
      toast.error("Password does not meet the required criteria.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    // Add further form submission logic here (e.g., API call)
    toast.success("Registration successful!");
  };

  return (
    <div className="my-8">
      <ToastContainer />
      <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-2xl border border-DGXgreen dark:bg-gray-800">
        <h1 className="text-xl font-bold text-white capitalize text-center dark:text-white">
          Welcome to the <span className="text-DGXgreen">DGX Community</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 sm:grid-cols-2">
            <div className="">
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="collegeName"
                >
                  College Name
                </label>
                <input
                  id="collegeName"
                  name="collegeName"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  value={formData.collegeName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex justify-center items-center order-first md:order-none">
              <img src={images.robo} className="w-28" alt="robot" />
            </div>

            <div>
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="contactNumber"
                >
                  Contact Number
                </label>
                <input
                  id="contactNumber"
                  name="contactNumber"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  value={formData.contactNumber}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="designation"
                >
                  Designation
                </label>
                <input
                  id="designation"
                  name="designation"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  value={formData.designation}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="newPassword"
                >
                  Create Password
                </label>
                <input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  value={formData.newPassword}
                  onChange={handleChange}
                />
                <div id="passwordVerify"></div>
              </div>
            </div>

            <div>
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="email"
                >
                  Email Id
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  value={formData.email}
                  onChange={handleChange}
                />
                <div id="emailVerify"></div>
              </div>
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="category"
                >
                  Category
                </label>
                <input
                  id="category"
                  name="category"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  value={formData.category}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none bg-DGXgreen focus:bg-gray-600"
            >
              Register
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Register;
