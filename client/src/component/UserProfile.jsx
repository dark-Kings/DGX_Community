import { useState, useEffect } from 'react';
import UserProfileChart from './UserProfileChart';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaUsers, FaPoll } from 'react-icons/fa';
import { GoCommentDiscussion } from "react-icons/go";
import { FaArrowTrendDown, FaArrowTrendUp, FaEllipsisVertical } from "react-icons/fa6";
import { images } from '../constant/index.js';
import ChangePassword from './ChangePassword.jsx';
import { CgProfile } from "react-icons/cg";
import { MdEventAvailable } from "react-icons/md";
import { CgPassword } from "react-icons/cg";
import { SlLogout } from "react-icons/sl";
import Cookies from 'js-cookie';







const UserProfile = () => {
    const [showEmailInput, setShowEmailInput] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [userToken, setUserToken] = useState(null);
    useEffect(() => {
        // Retrieve the token from the cookie
        const token = Cookies.get('userToken');
        if (token) {
            try {
                const parseToken = JSON.parse(token);
                setUserToken(parseToken);

            } catch (e) {
                console.log("Failed to parse token:", e);
            }
        }
    }, []);

    const handleButtonClick = () => {
        setShowEmailInput(true);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    const handleEmailBlur = () => {
        if (!validateEmail(email)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }
    };

    const handleEmailSubmit = () => {
        if (validateEmail(email)) {
            setEmailError('');
            setEmailSubmitted(true);
            // Add your email submission logic here
            console.log('Email submitted:', email);
        } else {
            setEmailError('Invalid email address');
        }
    };
    const [activeTab, setActiveTab] = useState('profile');

    const [openSettings, setOpenSettings] = useState(false);
    const handleSettingsToggle = () => {
        setOpenSettings(!openSettings);
    };
    return (
        <div className="bg-DGXwhite p-2 md:p-8">
            <div className="md:my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
                <div className="w-full flex flex-col 2xl:w-1/3">
                    <div className="bg-DGXwhite w-full rounded-lg shadow-xl  pb-6 border border-DGXgreen">
                        <div className="w-full h-[250px] rounded-t-lg border border-t-0 border-l-0 border-r-0 border-b-DGXgreen border-b-4">
                            <img src={images.NvidiaBackground} className="w-full h-full rounded-tl-lg rounded-tr-lg" alt="Profile background" />
                        </div>
                        <div className="flex flex-col items-center -mt-20">
                            <img src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg" className="w-40 border-4 border-DGXgreen border-white rounded-full" alt="Profile" />
                            <div className="flex items-center space-x-2 mt-2">
                                <p className="text-2xl">Amanda Ross</p>
                                <span className="bg-[#2563eb] rounded-full p-1" title="Verified">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-DGXwhite h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                            </div>
                            <p className="text-DGXgray">Senior Software Engineer at Tailwind CSS</p>
                            <p className="text-sm text-[#6b7280]">New York, USA</p>
                        </div>
                    </div>
                    <div className="my-4 flex flex-col 2xl:flex-row 2xl:space-y-0 2xl:space-x-4">
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                        <div className="flex-1 bg-DGXwhite rounded-lg shadow-xl p-8 border border-DGXgreen">
                                <ul>
                                    <div className='flex items-center p-6 cursor-pointer' onClick={() => setActiveTab('profile')}>
                                        <CgProfile className='mr-4 text-2xl' />
                                        <li className={`text-lg ${activeTab === 'profile' ? 'text-DGXblue font-bold' : ''}`}>My Profile</li>
                                    </div>
                                    <div className='flex items-center p-6 cursor-pointer' onClick={() => setActiveTab('posts')}>
                                        <GoCommentDiscussion className='mr-4 text-2xl' />
                                        <li className={`text-lg ${activeTab === 'posts' ? 'text-DGXblue font-bold' : ''}`}>My Posts</li>
                                    </div>
                                    <div className='flex items-center p-6 cursor-pointer' onClick={() => setActiveTab('events')}>
                                        <MdEventAvailable className='mr-4 text-2xl' />
                                        <li className={`text-lg ${activeTab === 'events' ? 'text-DGXblue font-bold' : ''}`}>My Events</li>
                                    </div>
                                    <div className='flex items-center p-6 cursor-pointer' onClick={() => setActiveTab('password')}>
                                        <CgPassword className='mr-4 text-2xl' />
                                        <li className={`text-lg ${activeTab === 'password' ? 'text-DGXblue font-bold' : ''}`}>Change Password</li>
                                    </div>
                                    <div className='flex items-center p-6 cursor-pointer' onClick={() => setActiveTab('logout')}>
                                        <SlLogout className='mr-4 text-2xl' />
                                        <li className={`text-lg ${activeTab === 'logout' ? 'text-DGXblue font-bold' : ''}`}>Logout</li>
                                    </div>
                                </ul>
                            </div>  
                            <div className="flex-1 bg-DGXwhite rounded-lg shadow-xl p-4 md:p-8 border border-DGXgreen">
                                <h4 className="text-md md:text-xl text-DGXblack font-bold">Personal Info</h4>
                                <ul className="mt-2 text-sm text-DGXgray">
                                    <li className="flex justify-between border-y py-2">
                                        <span className="font-bold w-24">Full name</span>
                                        <span className="text-DGXgray">Amanda S. Ross</span>
                                    </li>
                                    <li className="flex justify-between border-b py-2">
                                        <span className="font-bold w-24">Joined</span>
                                        <span className="text-DGXgray">10 Jan 2022 (25 days ago)</span>
                                    </li>
                                    <li className="flex justify-between border-b py-2">
                                        <span className="font-bold w-24">Mobile</span>
                                        <span className="text-DGXgray">(123) 123-1234</span>
                                    </li>
                                    <li className="flex justify-between border-b py-2">
                                        <span className="font-bold w-24">Email</span>
                                        <span className="text-DGXgray">amandaross@example.com</span>
                                    </li>
                                    <li className="flex justify-between border-b py-2">
                                        <span className="font-bold w-24">Designation: </span>
                                        <span className="text-DGXgray">Assistant Professor</span>
                                    </li>
                                    <li className="flex justify-between border-b py-2 flex-col lg:flex-row">
                                        <span className="font-bold w-24">College Name</span>
                                        <span className="text-DGXgray">GB. Pant University Of Agriculture And Technology</span>
                                    </li>
                                    <li className="flex items-center justify-center border-b py-2 space-x-2">
                                        {/* <span className="font-bold w-24">Elsewhere</span> */}
                                        <a href="#" title="Facebook"><FaFacebook className="w-5 h-5" /></a>
                                        <a href="#" title="Twitter"><FaTwitter className="w-5 h-5" /></a>
                                        <a href="#" title="LinkedIn"><FaLinkedin className="w-5 h-5" /></a>
                                        <a href="#" title="Github"><FaGithub className="w-5 h-5" /></a>
                                    </li>
                                </ul>
                                <button
                                    className="mt-4 px-4 py-2 bg-DGXgreen text-white rounded hover:bg-DGXdarkgreen"
                                    onClick={handleButtonClick}
                                >
                                    Add Email
                                </button>
                                {showEmailInput && (
                                    <div className="mt-4 flex items-center">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={handleEmailChange}
                                            onBlur={handleEmailBlur}
                                            className="p-2 border border-DGXgreen rounded w-full mr-2"
                                            placeholder="Enter your email"
                                        />
                                        <button
                                            className="px-4 py-2 bg-DGXgreen text-white rounded hover:bg-DGXdarkgreen"
                                            onClick={handleEmailSubmit}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                )}
                                {emailError && <p className="text-red-500 mt-2">{emailError}</p>}
                                {emailSubmitted && !emailError && <p className="text-green-500 mt-2">Refered successfully!</p>}
                            </div>
                       
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-3/4 bg-DGXwhite rounded-lg shadow-xl md:p-4 md:border border-DGXgreen mx-auto">
                    {activeTab === 'profile' && (
                        <div className="flex flex-col w-full 2xl:w-3/3 ">
                            <div className="flex bg-DGXwhite rounded-lg shadow-xl p-2 md:p-4 border border-DGXgreen ">
                                <div className="flex-1">
                                    <h4 className="text-xl text-[#111827] font-bold">About</h4>
                                    <p className="mt-2 text-DGXgray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates obcaecati numquam error et ut fugiat asperiores. Sunt nulla ad incidunt laboriosam, laudantium est unde natus cum numquam, neque facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, magni odio magnam commodi sunt ipsum eum! Voluptas eveniet aperiam at maxime, iste id dicta autem odio laudantium eligendi commodi distinctio!</p>
                                </div>
                                <div className="flex items-end mt-4">
                                    {/* User badges go here */}
                                    <span className="badge">Badge 1</span>
                                    <span className="badge">Badge 2</span>
                                    {/* Add more badges as needed */}
                                </div>
                            </div>
                            <div className="flex-1/2 bg-DGXwhite rounded-lg shadow-xl mt-4 p-2 md:p-8 border border-DGXgreen">
                                <h4 className="text-xl text-[#111827] font-bold">Statistics</h4>
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
                                    <div className="px-6 py-6 bg-DGXwhite border border-DGXgreen rounded-lg shadow-xl">
                                        <div className="flex items-center justify-between">
                                            <span className="font-bold text-sm text-DGXblue">Discussions</span>
                                            <span className="text-xs bg-[#e5e7eb] hover:bg-[#6b7280] text-[#6b7280] hover:text-[#e5e7eb] px-2 py-1 rounded-lg transition duration-200 cursor-default">7 days</span>
                                        </div>
                                        <div className="flex items-center justify-between mt-6">
                                            <div>
                                                <div className="w-12 h-12 p-2.5 bg-[#60a5fa] bg-opacity-20 rounded-full text-DGXblue border border-DGXblue flex items-center justify-center">
                                                    <GoCommentDiscussion className="w-6 h-6 text-[#4f46e5]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="flex items-end">
                                                    <span className="text-2xl 2xl:text-3xl font-bold">532</span>
                                                    <div className="flex items-center ml-2 mb-1">
                                                        <FaArrowTrendUp className="w-5 h-5 text-[#22c55e]" />
                                                        <span className="font-bold text-sm text-[#6b7280] ml-0.5">3%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-6 py-6 bg-DGXwhite border border-DGXgreen rounded-lg shadow-xl">
                                        <div className="flex items-center justify-between">
                                            <span className="font-bold text-sm text-DGXblue">Polls</span>
                                            <span className="text-xs bg-[#e5e7eb] hover:bg-[#6b7280] text-[#6b7280] hover:text-[#e5e7eb] px-2 py-1 rounded-lg transition duration-200 cursor-default">7 days</span>
                                        </div>
                                        <div className="flex items-center justify-between mt-6">
                                            <div>
                                                <div className="w-12 h-12 p-2.5 bg-[#4ade80] bg-opacity-20 rounded-full text-[#1e40af] border border-[#16a34a] flex items-center justify-center">
                                                    <FaPoll className="w-6 h-6 text-[#1e40af]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="flex items-end">
                                                    <span className="text-2xl 2xl:text-3xl font-bold">217</span>
                                                    <div className="flex items-center ml-2 mb-1">
                                                        <FaArrowTrendUp className="w-5 h-5 text-[#22c55e]" />
                                                        <span className="font-bold text-sm text-[#6b7280] ml-0.5">5%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-6 py-6 bg-DGXwhite border border-DGXgreen rounded-lg shadow-xl">
                                        <div className="flex items-center justify-between">
                                            <span className="font-bold text-sm text-DGXblue">Connections</span>
                                            <span className="text-xs bg-[#e5e7eb] hover:bg-[#6b7280] text-[#6b7280] hover:text-[#e5e7eb] px-2 py-1 rounded-lg transition duration-200 cursor-default">7 days</span>
                                        </div>
                                        <div className="flex items-center justify-between mt-6">
                                            <div>
                                                <div className="w-12 h-12 p-2.5 bg-[#60a5fa] bg-opacity-20 rounded-full text-DGXblue border border-DGXblue flex items-center justify-center">
                                                    <FaUsers className="w-6 h-6 text-DGXblue" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="flex items-end">
                                                    <span className="text-2xl 2xl:text-3xl font-bold">54</span>
                                                    <div className="flex items-center ml-2 mb-1">
                                                        <FaArrowTrendDown className="w-5 h-5 text-[#c52238]" />
                                                        <span className="font-bold text-sm text-[#6b7280] ml-0.5">7%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-center items-center">
                                    <UserProfileChart /> {/* Include the Chart component */}
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === 'posts' && (
                        <div>
                            <div className='post_bar pt-4 flex flex-col space-y-6'>
                                <div className='flex-col'>
                                    <h4 className="text-xl text-[#0f172a] font-bold">My Posts</h4>
                                </div>
                                <div className='post shadow-xl rounded-md p-2'>
                                    <a href="#" className="m-2 shadow-xl flex flex-col md:flex-row bg-white border border-DGXgreen rounded-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div className="w-full md:w-1/4">
                                            <img className="object-cover w-full h-96 md:h-auto md:rounded-none rounded-t-lg md:rounded-s-lg" src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg" alt="" />
                                        </div>
                                        <div className="w-full md:w-3/4 flex flex-col justify-between p-4 leading-normal">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === 'events' && (
                        <div className='w-full'>
                            <div className='flex-col'>
                                <h4 className="text-xl text-[#0f172a] font-bold">My Events</h4>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                                <a href="#" className="border-DGXgreen shadow-xl flex flex-col items-center bg-white border border-gray-200 rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-2">
                                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                                    <div className="flex flex-col justify-between p-4 leading-normal">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    </div>
                                </a>
                                
                                <a href="#" className="border-DGXgreen shadow-xl flex flex-col items-center bg-white border border-gray-200 rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-2">
                                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                                    <div className="flex flex-col justify-between p-4 leading-normal">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    </div>
                                </a>
                                
                                <a href="#" className="border-DGXgreen shadow-xl flex flex-col items-center bg-white border border-gray-200 rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-2">
                                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                                    <div className="flex flex-col justify-between p-4 leading-normal">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    </div>
                                </a>
                                
                                <a href="#" className="border-DGXgreen shadow-xl flex flex-col items-center bg-white border border-gray-200 rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-2">
                                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                                    <div className="flex flex-col justify-between p-4 leading-normal">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    </div>
                                </a>
                                
                            </div>
                        </div>
                    )}
                    {activeTab === 'password' && (
                        <div>
                            <h4 className="text-xl text-[#0f172a] font-bold">Change Password</h4>
                            <ChangePassword />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
