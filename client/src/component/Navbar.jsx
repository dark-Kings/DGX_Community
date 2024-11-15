import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { images } from '../constant/index.js';
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdCloseCircleOutline } from "react-icons/io";
import clsx from 'clsx';
import ApiContext from '../context/ApiContext.jsx';
import Cookies from 'js-cookie';

const Navbar = () => {
    const [isSideMenuOpen, setMenu] = useState(false);
    const { user, userToken, setUserToken } = useContext(ApiContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (userToken && user) {
            setIsLoggedIn(true);
            console.log(user);
            
        } else {
            setIsLoggedIn(false);
        }
    }, [user, userToken]);

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        toggleDropdown();
        Cookies.remove('userToken');
        setUserToken(null);
        navigate('/');
    };

    const navLinks = [
        { label: 'Home', to: "/" },
        { label: 'Discussions', to: '/Discussion' },
        { label: 'Event and Workshop', to: '/EventWorkshopPage' },
        { label: 'Blog', to: '/Blog' },
        { label: 'Contact Us', to: '/ContactUs' },
        { label: 'Community Guidelines', to: '/CommunityGuidelines' }
    ];

    return (
        <main>
            <nav className='flex justify-between items-center p-4'>
                <section>
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <AiOutlineMenu onClick={() => setMenu(true)} className='text-3xl cursor-pointer lg:hidden' />
                        <img src={images.nvidiaPartner} className="h-10 md:h-12 lg:h-14 xl:h-12 items-center" alt="NVIDIA Partner Logo" />
                    </Link>
                </section>
                <div className="flex items-center justify-center font-bold space-x-8">
                    {navLinks.map((d, i) => (
                        <Link
                            key={i}
                            className={clsx(
                                'hidden lg:block text-DGXblue text-xl transition-all duration-300 ease-in-out relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-full after:bg-DGXblue after:scale-x-0 after:transition-transform after:duration-300',
                                location.pathname === d.to && 'after:scale-x-100', // Active state for animation
                                'hover:text-black hover:underline'
                            )}
                            to={d.to}
                        >
                            {d.label}
                        </Link>
                    ))}
                </div>

                <div className={clsx('fixed h-full w-screen lg:hidden bg-DGXblack/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all z-10', isSideMenuOpen && 'translate-x-0')}>
                    <section className='text-DGXwhite bg-DGXblue flex flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-60'>
                        <IoMdCloseCircleOutline onClick={() => setMenu(false)} className='mt-0 mb-8 text-3xl cursor-pointer' />
                        {navLinks.map((d, i) => (
                            <Link
                                key={i}
                                className={clsx(
                                    'font-bold text-xl transition duration-300 ease-in-out relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-full after:bg-DGXblue after:scale-x-0 after:transition-transform after:duration-300',
                                    location.pathname === d.to && 'after:scale-x-100', // Active state for side menu animation
                                    'hover:text-black hover:underline'
                                )}
                                to={d.to}
                                onClick={() => setMenu(false)}
                            >
                                {d.label}
                            </Link>
                        ))}
                    </section>
                </div>

                <section className='flex items-center gap-6 xs:gap-1'>
                    {!isLoggedIn ? (
                        <Link to="/SignInn">
                            <button
                                type="button"
                                className="text-white bg-DGXgreen focus:ring-4 focus:outline-none focus:ring-DGXgreen font-medium rounded-md text-2xl px-6 py-3 text-center hover:bg-DGXblue transition duration-300"
                            >
                                Login
                            </button>
                        </Link>
                    ) : (
                        <div className='relative flex items-center gap-2'>
                            {<h1 className='text-sm font-medium'>{user.Name}</h1>}
                            <img
                                src={images.robot}  // Add the user's image URL here
                                alt="User"
                                className='h-12 w-12 rounded-full border-2 cursor-pointer'
                                onClick={toggleDropdown}
                            />
                            {isDropdownOpen && (
                                <div className="relative">
                                    {isDropdownOpen && (
                                        <div className='absolute right-0 mt-8 w-48 bg-white rounded-md shadow-lg z-50 border border-DGXblue'>
                                            <Link to="/UserProfile" className='block px-4 py-2 text-gray-800 hover:bg-gray-200' onClick={toggleDropdown}>
                                                Profile
                                            </Link>
                                            {user.isAdmin && <Link to="/AdminDashboard" className='block px-4 py-2 text-gray-800 hover:bg-gray-200' onClick={toggleDropdown}>
                                                Admin Profile
                                            </Link>}
                                            <button
                                                onClick={handleLogout}
                                                className='block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200'
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </section>
            </nav>
            <hr className='lg:mx-22 border-b-4 border-DGXblue' />
        </main>
    );
};

export default Navbar;
