import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { images } from '../constant/index.js';
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdCloseCircleOutline } from "react-icons/io";
import clsx from 'clsx';
import ApiContext from '../context/ApiContext.jsx';
import Cookies from 'js-cookie';

const Navbar = () => {
    const [isSideMenuOpen, setMenu] = useState(false);
    const { fetchData } = useContext(ApiContext);
    const [userToken, setUserToken] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState({});


    useEffect(() => {
        // Retrieve the token from the cookie
        const token = Cookies.get('userToken');
        // console.log("hi")

        if (token) {
            try {
                const parseToken = JSON.parse(token);
                setUserToken(parseToken);
                console.log(userToken)

            } catch (e) {
                console.log("Failed to parse token:", e);
            }
        }
    }, []);

    const handleUser = async () => {

        // Add further form submission logic here (e.g., API call)
        const endpoint = "user/getuser";
        const method = "POST"
        const headers = {
            'Content-Type': 'application/json',
            'auth-token': userToken
        }
        try {
            const data = await fetchData(endpoint, method, headers);
            if (!data.success) {
                console.log(data.message)
            } else if (data.success) {
                setUserData(data)
                console.log(data, userData)
                setIsLoggedIn(true)
            }
        } catch (error) {
            console.log(error)
        }
    };
    // if (userToken) {

    //     handleUser()
    // }
    // console.log(userData, userToken)



    const navLinks = [
        {
            label: 'Home',
            to: "/"
        },
        {
            label: 'Discussions',
            to: '/Discussion'
        },
        {
            label: 'Event and Workshop',
            to: '#'
        },
        {
            label: 'Contact Us',
            to: '/ContactUs'
        },
        {
            label: 'Community Guidelines',
            to: '#'
        }
    ];

    return (
        <main className=''>
            <nav className='flex justify-between item-center p-2'>
                {/* <div className='flex item-center gap-8'> */}
                    <section className=''>
                        <AiOutlineMenu onClick={() => setMenu(true)} className='text-3xl cursor-pointer lg:hidden' />
                        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src={images.nvidiaPartner} className="h-10 md:h-12 lg:h-14 xl:h-12 item-center" alt="NVIDIA Partner Logo" />
                        </Link>
                    </section>
                    <div className="flex items-center justify-center font-bold space-x-6">
                        {navLinks.map((d, i) => (
                            <Link key={i} className='hidden lg:block text-DGXblue hover:text-black' to={d.to}>
                                {d.label}
                            </Link>
                        ))}
                    </div>


                <div className={clsx('fixed h-full w-screen lg:hidden bg-DGXblack/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all z-10',
                    isSideMenuOpen && 'translate-x-0'
                )}>
                    <section className='text-black bg-DGXgreen/10 flex flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-60'>
                        <IoMdCloseCircleOutline
                            onClick={() => setMenu(false)}
                            className='mt-0 mb-8 text-3xl cursor-pointer' />

                        {navLinks.map((d, i) => (
                            <Link key={i} className='font-bold' to={d.to}>
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
                                className="text-white bg-DGXgreen hover:bg-DGXgreen focus:ring-4 focus:outline-none focus:ring-DGXgreen font-medium rounded-md text-xl px-4 py-2 text-center dark:bg-DGXgreen dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Login
                            </button>
                        </Link>
                    ) : (
                        <img
                            src={images.robot}  // Add the user's image URL here
                            alt="User"
                            className='h-12 w-12 rounded-full border-2'
                        />
                    )}
                </section>
            </nav>
            <hr className='lg:mx-22 border-b-4 border-DGXblue' />
        </main>
    );
};

export default Navbar;
