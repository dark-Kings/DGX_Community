import { useState } from 'react';
import { Link } from 'react-router-dom';
import { images } from '../constant/index.js';
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdCloseCircleOutline } from "react-icons/io";
import clsx from 'clsx';


const Navbar = () => {
    const [isSideMenuOpen, setMenu] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // const handleLogin = () => {
    //     // Perform login logic here
    //     // After successful login, set isLoggedIn to true
    //     setIsLoggedIn(true);
    // };


    const navLinks = [
        {
            label: 'Home',
            href: '/'
        },
        {
            label: 'Discussions',
            href: '/Discussion'
        },
        {
            label: 'Event and Workshop',
            href: '#'
        },
        {
            label: 'Contact Us',
            href: '#'
        },
        {
            label: 'Community Guidelines',
            href: '#'
        }
    ]

    // const toggleDropdown = () => {
    //     setIsOpen(!isOpen);
    // };
    return (
        <main className=''>
            <nav className='flex justify-between px-8 item-center py-6 lg:px-24 xs:px-0 xs:mx-0'>
                <div className='flex item-center gap-8'>
                    <section className='flex items-center gap-6 xs:gap-1'>
                        <AiOutlineMenu onClick={() => setMenu(true)} className='text-3xl cursor-pointer lg:hidden' />
                        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src={images.nvidiaPartner} className="h-10 md:h-12 lg:h-14 xl:h-12 item-center" alt="NVIDIA Partner Logo" />
                        </Link>
                    </section>
                    {navLinks.map((d, i) => (
                        <Link key={i} className='hidden lg:block text-DGXblue-400 hover:text-black' href={d.link}>
                            {d.label}
                        </Link>
                    ))}
                </div>

                {/*----------sidebarMenu-------------- */}
                <div className={clsx('fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all z-10',
                    isSideMenuOpen && 'translate-x-0'
                )}>
                    <section className='text-black bg-DGXgreen/10 flex flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-60'>
                        <IoMdCloseCircleOutline
                            onClick={() => setMenu(false)}
                            className='mt-0 mb-8 text-3xl cursor-pointer' />

                        {navLinks.map((d, i) => (
                            <Link key={i} className='font-bold' href={d.link}>
                                {d.label}
                            </Link>
                        ))}

                    </section>
                </div>

                <section className='flex items-center gap-6 xs:gap-1'>
                    {!isLoggedIn ? (
                        <Link to="/SignInn"><button
                            type="button"
                            // onClick={handleLogin}
                            className="text-white bg-DGXgreen hover:bg-DGXgreen-800 focus:ring-4 focus:outline-none focus:ring-DGXgreen-300 font-medium rounded-lg text-xl px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Login
                        </button></Link>
                    ) : (
                        <img
                            src=''  // Add the user's image URL here
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
