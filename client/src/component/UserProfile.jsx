import React, { useState } from 'react';
import UserProfileChart from './UserProfileChart'; // Import the chart component

const UserProfile = () => {
  const [openSettings, setOpenSettings] = useState(false);

  const handleSettingsToggle = () => {
    setOpenSettings(!openSettings);
  };

  return (
    <div className="h-full bg-DGXwhite p-8">
      <div className="bg-DGXwhite rounded-lg shadow-xl pb-8">
            <div className="absolute right-12 mt-4 rounded">
                <button onClick={() => setOpenSettings(!openSettings)} className="border border-DGXgray p-2 rounded text-DGXgray hover:text-DGXgray bg-DGXwhite  hover:bg-opacity-20" title="Settings">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                </button>
                {openSettings && (
                    <div onClick={() => setOpenSettings(false)} className="bg-DGXwhite absolute right-0 w-40 py-2 mt-1 border border-DGXgray shadow-2xl">
                        <div className="py-2 border-b">
                            <p className="text-DGXgray text-xs px-6 uppercase mb-1">Settings</p>
                            <button className="w-full flex items-center px-6 py-1.5 space-x-2 hover:bg-DGXgray">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-DGXgray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                </svg>
                                <span className="text-sm text-DGXgray">Share Profile</span>
                            </button>
                            <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-DGXgray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                </svg>
                                <span className="text-sm text-DGXgray">Block User</span>
                            </button>
                            <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-DGXgray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-sm text-DGXgray">More Info</span>
                            </button>
                        </div>
                        <div className="py-2">
                            <p className="text-DGXgray text-xs px-6 uppercase mb-1">Feedback</p>
                            <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-DGXgray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                <span className="text-sm text-DGXgray">Report</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <div className="w-full h-[250px]">
                <img src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg" className="w-full h-full rounded-tl-lg rounded-tr-lg" alt="Profile background" />
            </div>
            <div className="flex flex-col items-center -mt-20">
                <img src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg" className="w-40 border-4 border-white rounded-full" alt="Profile" />
                <div className="flex items-center space-x-2 mt-2">
                    <p className="text-2xl">Amanda Ross</p>
                    <span className="bg-blue-500 rounded-full p-1" title="Verified">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-DGXgray h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                        </svg>
                    </span>
                </div>
                <p className="text-DGXgray">Senior Software Engineer at Tailwind CSS</p>
                <p className="text-sm text-gray-500">New York, USA</p>
            </div>
            <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
                <div className="flex items-center space-x-4 mt-2">
                    <button className="flex items-center bg-[#1d4ed8] hover:bg-blue-700 text-DGXwhite px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                        </svg>
                        <span>Connect</span>
                    </button>
                    <button className="flex items-center bg-[#1d4ed8] hover:bg-blue-700 text-DGXwhite px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                        </svg>
                        <span>Message</span>
                    </button>
                </div>
            </div>
        </div>
	  <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
            <div className="w-full flex flex-col 2xl:w-1/3">
                <div className="flex-1 bg-DGXwhite rounded-lg shadow-xl p-8">
                    <h4 className="text-xl text-DGXgray font-bold">Personal Info</h4>
                    <ul className="mt-2 text-DGXgray">
                        <li className="flex border-y py-2">
                            <span className="font-bold w-24">Full name:</span>
                            <span className="text-DGXgray">Amanda S. Ross</span>
                        </li>
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">Birthday:</span>
                            <span className="text-DGXgray">24 Jul, 1991</span>
                        </li>
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">Joined:</span>
                            <span className="text-DGXgray">10 Jan 2022 (25 days ago)</span>
                        </li>
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">Mobile:</span>
                            <span className="text-DGXgray">(123) 123-1234</span>
                        </li>
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">Email:</span>
                            <span className="text-DGXgray">amandaross@example.com</span>
                        </li>
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">Location:</span>
                            <span className="text-DGXgray">New York, US</span>
                        </li>
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">Languages:</span>
                            <span className="text-DGXgray">English, Spanish</span>
                        </li>
						<li className="flex border-b py-2">
						<span className="font-bold w-24">Professional Skills:</span>
						<span className="text-DGXgray">HTML, CSS, JavaScript, React, Node.js, Tailwind CSS</span>
						</li>
										
                        <li className="flex items-center border-b py-2 space-x-2">
                            <span className="font-bold w-24">Elsewhere:</span>
                            <a href="#" title="Facebook">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 506.86 506.86"><path fill="#1877f2" d="M506.86,253.43C506.86,113.46,393.39,0,253.43,0S0,113.46,0,253.43C0,379.92,92.68,484.77,213.83,503.78V326.69H149.48V253.43h64.35V197.6c0-63.52,37.84-98.6,95.72-98.6,27.73,0,56.73,5,56.73,5v62.36H334.33c-31.49,0-41.3,19.54-41.3,39.58v47.54h70.28l-11.23,73.26H293V503.78C414.18,484.77,506.86,379.92,506.86,253.43Z"/><path fill="#fff" d="M352.08,326.69l11.23-73.26H293V205.89c0-20,9.81-39.58,41.3-39.58h31.95V104s-29-5-56.73-5c-57.88,0-95.72,35.08-95.72,98.6v55.83H149.48v73.26h64.35V503.78a256.11,256.11,0,0,0,79.2,0V326.69Z"/></svg>
                            </a>
                            <a href="#" title="Twitter">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333333 333333"><path fill="#1da1f2" d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm90493 110539c-6654 2976-13822 4953-21307 5835 7669-4593 13533-11870 16333-20535-7168 4239-15133 7348-23574 9011-6787-7211-16426-11694-27105-11694-20504 0-37104 16610-37104 37101 0 2893 320 5722 949 8450-30852-1564-58204-16333-76513-38806-3285 5666-5022 12109-5022 18661v4c0 12866 6532 24246 16500 30882-6083-180-11804-1876-16828-4626v464c0 17993 12789 33007 29783 36400-3113 845-6400 1313-9786 1313-2398 0-4709-247-7007-665 4746 14736 18448 25478 34673 25791-12722 9967-28700 15902-46120 15902-3006 0-5935-184-8860-534 16466 10565 35972 16684 56928 16684 68271 0 105636-56577 105636-105632 0-1630-36-3209-104-4806 7251-5187 13538-11733 18514-19185l17-17-3 2z"/></svg>
                            </a>
                            <a href="#" title="LinkedIn">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333333 333333"><path fill="#0077b5" d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm-18220 138885h28897v14814l418 1c4024-7220 13865-14814 28538-14814 30514-1 36157 18989 36157 43691v50320l-30136 1v-44607c0-10634-221-24322-15670-24322-15691 0-18096 11575-18096 23548v45382h-30109v-94013zm-20892-26114c0 8650-7020 15670-15670 15670s-15672-7020-15672-15670 7022-15670 15672-15670 15670 7020 15670 15670zm-31342 26114h31342v94013H96213v-94013z"/></svg>
                            </a>
                            <a href="#" title="Github">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 640 640"><path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.5-63.52 32.951-86.014-3.348-8.066-14.295-40.77 3.11-85.05 0 0 26.946-8.68 88.203 32.92a308.89 308.89 0 0180.085-10.774c27.21.01 54.736 3.66 80.993 10.762 61.206-41.6 88.103-32.92 88.103-32.92 17.438 44.28 6.503 76.984 3.172 85.05 20.495 22.494 32.917 51.088 32.917 86.014 0 122.99-75.856 149.997-147.987 157.942 11.623 9.954 22.01 29.482 22.01 59.446 0 42.98-.384 77.558-.384 88.144 0 8.52 5.812 18.522 21.972 15.367C548.325 589.192 640 469.28 640 327.96 640 151.242 496.72 7.973 319.988 7.973z"/></svg>
                            </a>
                        </li>
                    </ul>
                </div>
				<div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
            <h4 className="text-xl text-gray-900 font-bold">Activity log</h4>
            <div className="relative px-4">
                <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>

                {/* Timeline items */}
                <div className="flex items-center w-full my-6 -ml-1.5">
                    <div className="w-1/12 z-10">
                        <div className="w-3.5 h-3.5 bg-[#0ea5e9] rounded-full"></div>
                    </div>
                    <div className="w-11/12">
                        <p className="text-sm">Profile information changed.</p>
                        <p className="text-xs text-gray-500">3 min ago</p>
                    </div>
                </div>

                <div className="flex items-center w-full my-6 -ml-1.5">
                    <div className="w-1/12 z-10">
                        <div className="w-3.5 h-3.5 bg-[#0ea5e9] rounded-full"></div>
                    </div>
                    <div className="w-11/12">
                        <p className="text-sm">
                            Connected with <a href="#" className="text-DGXblue font-bold">Colby Covington</a>.
                        </p>
                        <p className="text-xs text-gray-500">15 min ago</p>
                    </div>
                </div>

                <div className="flex items-center w-full my-6 -ml-1.5">
                    <div className="w-1/12 z-10">
                        <div className="w-3.5 h-3.5 bg-[#0ea5e9] rounded-full"></div>
                    </div>
                    <div className="w-11/12">
                        <p className="text-sm">Invoice <a href="#" className="text-DGXblue font-bold">#4563</a> was created.</p>
                        <p className="text-xs text-gray-500">57 min ago</p>
                    </div>
                </div>

                <div className="flex items-center w-full my-6 -ml-1.5">
                    <div className="w-1/12 z-10">
                        <div className="w-3.5 h-3.5 bg-[#0ea5e9] rounded-full"></div>
                    </div>
                    <div className="w-11/12">
                        <p className="text-sm">
                            Message received from <a href="#" className="text-DGXblue font-bold">Cecilia Hendric</a>.
                        </p>
                        <p className="text-xs text-gray-500">1 hour ago</p>
                    </div>
                </div>

                <div className="flex items-center w-full my-6 -ml-1.5">
                    <div className="w-1/12 z-10">
                        <div className="w-3.5 h-3.5 bg-[#0ea5e9] rounded-full"></div>
                    </div>
                    <div className="w-11/12">
                        <p className="text-sm">New order received <a href="#" className="text-DGXblue font-bold">#OR9653</a>.</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                </div>

                <div className="flex items-center w-full my-6 -ml-1.5">
                    <div className="w-1/12 z-10">
                        <div className="w-3.5 h-3.5 bg-[#0ea5e9] rounded-full"></div>
                    </div>
                    <div className="w-11/12">
                        <p className="text-sm">
                            Message received from <a href="#" className="text-DGXblue font-bold">Jane Stillman</a>.
                        </p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                </div>
                {/* End of Timeline items */}
            </div>
        </div>
		
            </div>
			
            <div className="flex flex-col w-full 2xl:w-2/3">
            <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                <h4 className="text-xl text-gray-900 font-bold">About</h4>
                <p className="mt-2 text-DGXgray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates obcaecati numquam error et ut fugiat asperiores. Sunt nulla ad incidunt laboriosam, laudantium est unde natus cum numquam, neque facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, magni odio magnam commodi sunt ipsum eum! Voluptas eveniet aperiam at maxime, iste id dicta autem odio laudantium eligendi commodi distinctio!</p>
            </div>
            <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
                <h4 className="text-xl text-gray-900 font-bold">Statistics</h4>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
                    <div className="px-6 py-6 bg-DGXwhite border border-DGXgreen rounded-lg shadow-xl">
                        <div className="flex items-center justify-between">
                            <span className="font-bold text-sm text-indigo-600">Total Revenue</span>
                            <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">7 days</span>
                        </div>
                        <div className="flex items-center justify-between mt-6">
                            <div>
                                <svg className="w-12 h-12 p-2.5 bg-indigo-400 bg-opacity-20 rounded-full text-indigo-600 border border-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-end">
                                    <span className="text-2xl 2xl:text-3xl font-bold">$8,141</span>
                                    <div className="flex items-center ml-2 mb-1">
                                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                        <span className="font-bold text-sm text-gray-500 ml-0.5">3%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-6 py-6 bg-DGXwhite border border-DGXgreen rounded-lg shadow-xl">
                        <div className="flex items-center justify-between">
                            <span className="font-bold text-sm text-[#1e40af]">New Orders</span>
                            <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">7 days</span>
                        </div>
                        <div className="flex items-center justify-between mt-6">
                            <div>
                                <svg className="w-12 h-12 p-2.5 bg-green-400 bg-opacity-20 rounded-full text-[#1e40af] border border-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-end">
                                    <span className="text-2xl 2xl:text-3xl font-bold">217</span>
                                    <div className="flex items-center ml-2 mb-1">
                                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                        <span className="font-bold text-sm text-gray-500 ml-0.5">5%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-6 py-6 bg-DGXwhite border border-DGXgreen rounded-lg shadow-xl">
                        <div className="flex items-center justify-between">
                            <span className="font-bold text-sm text-DGXblue">New Connections</span>
                            <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">7 days</span>
                        </div>
                        <div className="flex items-center justify-between mt-6">
                            <div>
                                <svg className="w-12 h-12 p-2.5 bg-blue-400 bg-opacity-20 rounded-full text-DGXblue border border-DGXblue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-end">
                                    <span className="text-2xl 2xl:text-3xl font-bold">54</span>
                                    <div className="flex items-center ml-2 mb-1">
                                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                        <span className="font-bold text-sm text-gray-500 ml-0.5">7%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
				<UserProfileChart /> {/* Include the Chart component */}
                </div>
            </div>
        </div>
        </div>
		<div className="bg-DGXwhite rounded-lg shadow-xl p-8">
            <div className="flex items-center justify-between">
                <h4 className="text-xl text-DGXgray font-bold">Connections (532)</h4>
                <a href="#" title="View All">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-DGXgray hover:text-DGXgray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-8 mt-8">
                <a href="#" className="flex flex-col items-center justify-center text-DGXgray hover:text-DGXblue" title="View Profile">
                    <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection1.jpg" className="w-16 rounded-full" alt="Connection 1" />
                    <p className="text-center font-bold text-sm mt-1">Diane Aguilar</p>
                    <p className="text-xs text-DGXgray text-center">UI/UX Design at Upwork</p>
                </a>
                <a href="#" className="flex flex-col items-center justify-center text-DGXgray hover:text-DGXblue" title="View Profile">
                    <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection2.jpg" className="w-16 rounded-full" alt="Connection 2" />
                    <p className="text-center font-bold text-sm mt-1">Frances Mather</p>
                    <p className="text-xs text-DGXgray text-center">Software Engineer at Facebook</p>
                </a>
                <a href="#" className="flex flex-col items-center justify-center text-DGXgray hover:text-DGXblue" title="View Profile">
                    <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection3.jpg" className="w-16 rounded-full" alt="Connection 3" />
                    <p className="text-center font-bold text-sm mt-1">Carlos Friedrich</p>
                    <p className="text-xs text-DGXgray text-center">Front-End Developer at Tailwind CSS</p>
                </a>
                <a href="#" className="flex flex-col items-center justify-center text-DGXgray hover:text-DGXblue" title="View Profile">
                    <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection4.jpg" className="w-16 rounded-full" alt="Connection 4" />
                    <p className="text-center font-bold text-sm mt-1">Donna Serrano</p>
                    <p className="text-xs text-DGXgray text-center">System Engineer at Tesla</p>
                </a>
                <a href="#" className="flex flex-col items-center justify-center text-DGXgray hover:text-DGXblue" title="View Profile">
                    <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection5.jpg" className="w-16 rounded-full" alt="Connection 5" />
                    <p className="text-center font-bold text-sm mt-1">Randall Tabron</p>
                    <p className="text-xs text-DGXgray text-center">Software Developer at Upwork</p>
                </a>
                <a href="#" className="flex flex-col items-center justify-center text-DGXgray hover:text-DGXblue" title="View Profile">
                    <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection6.jpg" className="w-16 rounded-full" alt="Connection 6" />
                    <p className="text-center font-bold text-sm mt-1">John McCleary</p>
                    <p className="text-xs text-DGXgray text-center">Software Engineer at Laravel</p>
                </a>
                <a href="#" className="flex flex-col items-center justify-center text-DGXgray hover:text-DGXblue" title="View Profile">
                    <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection7.jpg" className="w-16 rounded-full" alt="Connection 7" />
                    <p className="text-center font-bold text-sm mt-1">Amanda Noble</p>
                    <p className="text-xs text-DGXgray text-center">Graphic Designer at Tailwind CSS</p>
                </a>
                <a href="#" className="flex flex-col items-center justify-center text-DGXgray hover:text-DGXblue" title="View Profile">
                    <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection8.jpg" className="w-16 rounded-full" alt="Connection 8" />
                    <p className="text-center font-bold text-sm mt-1">Christine Drew</p>
                    <p className="text-xs text-DGXgray text-center">Senior Android Developer at Google</p>
                </a>
                <a href="#" className="flex flex-col items-center justify-center text-DGXgray hover:text-DGXblue" title="View Profile">
                    <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection9.jpg" className="w-16 rounded-full" alt="Connection 9" />
                    <p className="text-center font-bold text-sm mt-1">Lucas Bell</p>
                    <p className="text-xs text-DGXgray text-center">Creative Writer at Upwork</p>
                </a>
                <a href="#" className="flex flex-col items-center justify-center text-DGXgray hover:text-DGXblue" title="View Profile">
                    <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection10.jpg" className="w-16 rounded-full" alt="Connection 10" />
                    <p className="text-center font-bold text-sm mt-1">Debra Herring</p>
                    <p className="text-xs text-DGXgray text-center">Co-Founder at Alpine.js</p>
                </a>
                <a href="#" className="flex flex-col items-center justify-center text-DGXgray hover:text-DGXblue" title="View Profile">
                    <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection11.jpg" className="w-16 rounded-full" alt="Connection 11" />
                    <p className="text-center font-bold text-sm mt-1">Benjamin Farrior</p>
                    <p className="text-xs text-DGXgray text-center">Software Engineer Lead at Microsoft</p>
                </a>
                <a href="#" className="flex flex-col items-center justify-center text-DGXgray hover:text-DGXblue" title="View Profile">
                    <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection12.jpg" className="w-16 rounded-full" alt="Connection 12" />
                    <p className="text-center font-bold text-sm mt-1">Maria Heal</p>
                    <p className="text-xs text-DGXgray text-center">Linux System Administrator at Twitter</p>
                </a>
                <a href="#" className="flex flex-col items-center justify-center text-DGXgray hover:text-DGXblue" title="View Profile">
                    <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection13.jpg" className="w-16 rounded-full" alt="Connection 13" />
                    <p className="text-center font-bold text-sm mt-1">Edward Ice</p>
                    <p className="text-xs text-DGXgray text-center">Customer Support at Instagram</p>
                </a>
                <a href="#" className="flex flex-col items-center justify-center text-DGXgray hover:text-DGXblue" title="View Profile">
                    <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection14.jpg" className="w-16 rounded-full" alt="Connection 14" />
                    <p className="text-center font-bold text-sm mt-1">Jeffery Silver</p>
                    <p className="text-xs text-DGXgray text-center">Software Engineer at Twitter</p>
                </a>
                <a href="#" className="flex flex-col items-center justify-center text-DGXgray hover:text-DGXblue" title="View Profile">
                    <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection15.jpg" className="w-16 rounded-full" alt="Connection 15" />
                    <p className="text-center font-bold text-sm mt-1">Jennifer Schultz</p>
                    <p className="text-xs text-DGXgray text-center">Project Manager at Google</p>
                </a>
                <a href="#" className="flex flex-col items-center justify-center text-DGXgray hover:text-DGXblue" title="View Profile">
                    <img src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection16.jpg" className="w-16 rounded-full" alt="Connection 16" />
                    <p className="text-center font-bold text-sm mt-1">Joseph Marlatt</p>
                    <p className="text-xs text-DGXgray text-center">Team Lead at Facebook</p>
                </a>
            </div>
        </div>
    </div>
  );
};

export default UserProfile;
