import { useState } from 'react';
import UserProfileChart from './UserProfileChart'; 
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaUsers, FaPoll } from 'react-icons/fa';
import { GoCommentDiscussion } from "react-icons/go";
import { FaArrowTrendDown, FaArrowTrendUp, FaEllipsisVertical  } from "react-icons/fa6";
import { MdOutlineReportProblem, MdShare, MdMessage, MdBlock, MdPersonAddAlt1, MdOutlineSettings } from "react-icons/md";

const UserProfile = () => {
	// Define colors
	const facebookColor = "#1877f2";
	const twitterColor = "#1da1f2";
	const linkedinColor = "#0077b5";
	const githubColor = "#000000";
  const [openSettings, setOpenSettings] = useState(false);

  const handleSettingsToggle = () => {
    setOpenSettings(!openSettings);
  };

  return (
    <div className="h-full bg-DGXwhite p-8">
      <div className="bg-DGXwhite rounded-lg shadow-xl pb-8 border border-DGXgreen">
            <div className="absolute right-12 mt-4 rounded ">
                <button onClick={() => setOpenSettings(!openSettings)} className="border border-DGXgray p-2 rounded text-DGXblack hover:text-DGXgray bg-DGXwhite  hover:bg-opacity-20" title="Settings">
				<FaEllipsisVertical />
                </button>
                {openSettings && (
                    <div onClick={() => setOpenSettings(false)} className="bg-DGXwhite absolute right-0 w-40 py-2 mt-1 border border-DGXgray shadow-2xl">
                        <div className="py-2 border-b">
							<button className="w-full flex items-center px-6 py-1.5 space-x-2 hover:bg-[#e5e7eb]">
							<MdOutlineSettings />
								<span className="text-sm text-DGXblack">Settings</span>
							</button>
                            <button className="w-full flex items-center px-6 py-1.5 space-x-2 hover:bg-[#e5e7eb]">
							<MdShare />
                                <span className="text-sm text-DGXblack">Share Profile</span>
                            </button>
                            <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-[#e5e7eb]">
							<MdBlock />
                                <span className="text-sm text-DGXblack">Block User</span>
                            </button>
                        </div>
                        <div className="py-2">
                            <p className="text-DGXgray text-sm font-medium px-6 uppercase mb-1">Feedback</p>
                            <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-[#e5e7eb]">
							<MdOutlineReportProblem />
                                <span className="text-sm text-DGXblack">Report</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <div className="w-full h-[250px] rounded-t-lg border border-t-0 border-l-0 border-r-0 border-b-DGXgreen border-b-4">
                <img src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg" className="w-full h-full rounded-tl-lg rounded-tr-lg" alt="Profile background" />
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
            <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
                <div className="flex items-center space-x-4 mt-2">
                    <button className="flex items-center bg-[#1d4ed8] hover:bg-[#1d4ed8] text-DGXwhite px-4 py-2 rounded text-sm space-x-2 transition duration-100">
					<MdPersonAddAlt1 />
                        <span>Connect</span>
                    </button>
                    <button className="flex items-center bg-[#1d4ed8] hover:bg-[#1d4ed8] text-DGXwhite px-4 py-2 rounded text-sm space-x-2 transition duration-100">
					<MdMessage />
                        <span>Message</span>
                    </button>
                </div>
            </div>
        </div>
 <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
            <div className="w-full flex flex-col 2xl:w-1/3">
                <div className="flex-1 bg-DGXwhite rounded-lg shadow-xl p-8 border border-DGXgreen">
                    <h4 className="text-xl text-DGXblack font-bold">Personal Info</h4>
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
							<a href="#" title="Facebook"><FaFacebook className="w-5 h-5" color={facebookColor} /></a>
							<a href="#" title="Twitter"><FaTwitter className="w-5 h-5" color={twitterColor} /></a>
							<a href="#" title="LinkedIn"><FaLinkedin className="w-5 h-5" color={linkedinColor} /></a>
							<a href="#" title="Github"><FaGithub className="w-5 h-5" color={githubColor} /></a>
						</li>
                    </ul>
                </div>
				<div className="flex-1 bg-DGXwhite rounded-lg shadow-xl mt-4 p-8 border border-DGXgreen">
            <h4 className="text-xl text-[#0f172a] font-bold">Activity log</h4>
            <div className="relative px-4 ">
                <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>

                {/* Timeline items */}
                <div className="flex items-center w-full my-6 -ml-1.5 ">
                    <div className="w-1/12 z-10">
                        <div className="w-3.5 h-3.5 bg-[#0ea5e9] rounded-full"></div>
                    </div>
                    <div className="w-11/12">
                        <p className="text-sm">Profile information changed.</p>
                        <p className="text-xs text-[#6b7280]">3 min ago</p>
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
                        <p className="text-xs text-[#6b7280]">15 min ago</p>
                    </div>
                </div>

                <div className="flex items-center w-full my-6 -ml-1.5">
                    <div className="w-1/12 z-10">
                        <div className="w-3.5 h-3.5 bg-[#0ea5e9] rounded-full"></div>
                    </div>
                    <div className="w-11/12">
                        <p className="text-sm">Poll <a href="#" className="text-DGXblue font-bold">#4563</a> was created.</p>
                        <p className="text-xs text-[#6b7280]">57 min ago</p>
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
                        <p className="text-xs text-[#6b7280]">1 hour ago</p>
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
                        <p className="text-xs text-[#6b7280]">2 hours ago</p>
                    </div>
                </div>
                {/* End of Timeline items */}
            </div>
        </div>
		
            </div>
			
            <div className="flex flex-col w-full 2xl:w-2/3 ">
            <div className="flex-1 bg-DGXwhite rounded-lg shadow-xl p-8 border border-DGXgreen">
                <h4 className="text-xl text-[#111827] font-bold">About</h4>
                <p className="mt-2 text-DGXgray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates obcaecati numquam error et ut fugiat asperiores. Sunt nulla ad incidunt laboriosam, laudantium est unde natus cum numquam, neque facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, magni odio magnam commodi sunt ipsum eum! Voluptas eveniet aperiam at maxime, iste id dicta autem odio laudantium eligendi commodi distinctio!</p>
            </div>
            <div className="flex-1 bg-DGXwhite rounded-lg shadow-xl mt-4 p-8 border border-DGXgreen">
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
                <span className="font-bold text-sm text-DGXblue">New Connections</span>
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
        </div>
		<div className="bg-DGXwhite rounded-lg shadow-xl p-8 border border-DGXgreen">
            <div className="flex items-center justify-between">
                <h4 className="text-xl text-DGXblack font-bold">Connections (532)</h4>
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
