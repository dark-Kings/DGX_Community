import { images } from '../constant/index.js';
import { useState, useEffect } from 'react';
import { validatePassword } from "../utils/formValidation.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const ChangePassword = () => {
    const [loading, setLoading] = useState(false)
    const [userToken, setUserToken] = useState(null);
    const navigate = useNavigate();
    const [messages, setMessages] = useState({
        number: false,
        specialChar: false,
        uppercase: false,
        lowercase: false,
        length: false,
    });

    const [formData, setFormData] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });
    useEffect(() => {
        // Retrieve the token from the cookie
        const token = Cookies.get('userToken');
        if (token) {
            try {
                const parseToken = JSON.parse(token);
                // console.log(parseToken);
                setUserToken(parseToken);

            } catch (e) {
                console.log("Failed to parse token:", e);
            }
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { oldPassword, newPassword, confirmPassword } = formData;

        if (Object.values(messages).some((message) => message)) {
            toast.error("Password does not meet the required criteria.");
            return;
        }

        if (newPassword !== confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }
        // Add further form submission logic here (e.g., API call)
        const BaseUrl = import.meta.env.VITE_API_BASEURL
        const endPoint = "user/changePassword";

        // console.log(userToken)
        // const headers = { "Content-Type": "application/json" };

        // console.log(oldPassword, newPassword, confirmPassword)

        const postdata = {
            "currentPassword": oldPassword,
            "newPassword": newPassword
        }

        setLoading(true)
        const response = await fetch(`${BaseUrl}/${endPoint}`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.

            headers: {
                'Content-Type': 'application/json',
                'auth-token': userToken
            },

            body: JSON.stringify(postdata) // body data type must match "Content-Type" header
        });
        const data = await response.json()
        if (!data.success) {
            toast.error("Error in password change", {
                position: "bottom-left",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else if (data.success) {
            setLoading(false)
            toast.success("Password change successfully login again with new credentials", {
                position: "bottom-left",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                Cookies.remove('userToken');
                navigate('/SignInn');
            }, 1500);
        }
    };

    const handleChange = (e) => {
        const { name, value, id } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
        if (name == "newPassword") {
            const passwordInput = document.getElementById(id)
            validatePassword(passwordInput, value)
        }

    }

    return (

        loading ? <h1>loading...</h1> : <section className="h-screen">
            <ToastContainer />
            <div className="h-full">
                <div className="flex h-full flex-wrap md:w-250 items-center justify-center lg:justify-between">
                    <div className="shrink-1 hidden lg:block ml:10 mb-12 grow-0 basis-auto md:mb-0 md:w-5/12 sm:w-6/12 md:shrink-0 lg:w-4/12 xl:w-4/12">
                        <img
                            src={images.verifyImg}
                            className="w-full"
                            alt="Sample image"
                        />
                    </div>
                    <div className="w-full lg:w-6/12 lg:rounded-l-full h-screen flex justify-center items-center bg-[#0ea5e9]">
                        <div className="mb-12 md:mb-0 w-full md:w-8/12 lg:w-5/12 xl:w-5/12 border border-DGXgreen rounded-lg bg-DGXwhite">


                            <form className="max-w-sm mx-auto mb-12 w:50 pr-5 pl-5  ">
                                <div className="flex flex-row items-center justify-center xl:justify-start mt-5 align-item-center">
                                    <p className="mb-5 me-4 text-xl md:font-bold">Change Password</p>
                                </div>
                                <div className="mb-5">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Password</label>
                                    <input type="password" id="oldPassword" name='oldPassword' value={formData.oldPassword} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-DGXgray dark:border-gray-600 dark:placeholder-DGXgray dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                                </div>
                                <div className="mb-5">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New password</label>
                                    <input type="password" id="password" name="newPassword" value={formData.newPassword} onChange={handleChange}
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-DGXgray dark:border-gray-600 dark:placeholder-DGXgray dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                                    <div id="passwordVerify"></div>
                                </div>

                                <div className="mb-5">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
                                    <input type="password" id="repeat-password" name='confirmPassword' value={formData.confirmPassword} onChange={handleChange}
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-DGXgray dark:border-gray-600 dark:placeholder-DGXgray dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                                </div>

                                <button type="button" onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#0ea5e9] dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-DGXgreen">Change Password</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChangePassword