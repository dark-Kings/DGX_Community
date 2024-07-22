import { Link } from 'react-router-dom';
import { images } from '../constant/index.js';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';



const Home = () => {

    const people = [
        {
            name: 'Leslie Alexander',
            role: 'Co-Founder / CEO',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Leslie Alexander',
            role: 'Co-Founder / CEO',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Leslie Alexander',
            role: 'Co-Founder / CEO',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Leslie Alexander',
            role: 'Co-Founder / CEO',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        // More people...
    ]

    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/EventWorkshopPage');


    };
    const handleRedirect01 = () => {
        navigate('/Discussion');


    };


    const [currentIndex, setCurrentIndex] = useState(0);

    // Define your slides here
    const slides = [
        images.nvidiaEvent01,
        images.nvidiaEvent02,
        images.nvidiaEvent01,
        // Add more image paths as needed
    ];

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div>
            <div
                className="relative py-14 sm:py-24 bg-cover bg-center"
                style={{ backgroundImage: `url(${images.HeroImg})` }} >
                <div className="absolute inset-0 bg-black opacity-50" ></div> {/* Overlay */}
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-8 flex justify-center">
                        <p className="relative rounded-full px-4 py-1.5 text-DGXwhite leading-6  bg-DGXgreen bg-opacity-80 ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20">
                            <a href="/SignInn" target="_blank" className="font-semibold text-lime-600 bd">
                                <span className="absolute inset-0 "></span> Join Us Today <span>→</span>
                            </a>
                        </p>
                    </div>
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-DGXwhite sm:text-6xl">
                            DGX - COMMUNITY
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-DGXwhite">
                            Collaborate, Innovate, Celebrate: DGX Community Unites Creators
                        </p>

                    </div>

                </div>
            </div>
            <section className="bg-neutral-100">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-4 bg-DGXblue p-4">
                    {/* Text and Links Section */}
                    <div className="flex flex-col justify-center items-center p-4">
                        <h1 className="text-xl md:text-4xl lg:text-5xl font-bold mb-4 text-DGXwhite text-center">
                            Join the Innovations
                        </h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full p-8">
                            {/* Event and Workshop */}
                            <div className="flex flex-col justify-center items-center relative group">
                                <p
                                    onClick={handleRedirect}
                                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-orange-600 text-DGXwhite hover:text-DGXgreen transition-colors duration-300 cursor-pointer"
                                >
                                    Event and Workshop
                                </p>
                                <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col items-center">
                                    <div className="relative z-10 p-2 text-xs md:text-sm leading-none text-DGXwhite whitespace-no-wrap bg-black shadow-lg rounded-md">
                                        Check it Out
                                    </div>
                                    <div className="w-3 h-3 -mt-1 rotate-45 bg-black"></div>
                                </div>
                            </div>
                            {/* Community Ranking */}
                            <div className="flex flex-col justify-center items-center relative group p-6">
                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl  text-DGXwhite hover:text-DGXgreen transition-colors duration-300 cursor-pointer">
                                    Community Ranking
                                </p>
                                <div className="absolute bottom-full  hidden group-hover:flex flex-col items-center">
                                    <div className="relative z-8  text-xs md:text-sm leading-none text-DGXwhite whitespace-no-wrap bg-black shadow-lg rounded-md">
                                        Wait for the next update
                                    </div>
                                    <div className="w-2 h-2 -mt-1 rotate-45 bg-black"></div>
                                </div>
                            </div>
                            {/* Survey and Quizzes */}
                            <div className="flex flex-col justify-center items-center relative group p-6">
                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-DGXwhite hover:text-DGXgreen">
                                    Survey and Quizzes
                                </p>
                                <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col items-center">
                                    <div className="relative z-4 p-2 text-xs md:text-sm leading-none text-DGXwhite whitespace-no-wrap bg-black shadow-lg rounded-md">
                                        Wait for the next update
                                    </div>
                                    <div className="w-3 h-3 -mt-1 rotate-45 bg-black"></div>
                                </div>
                            </div>
                            {/* Discussion Platform */}
                            <div className="flex flex-col justify-center items-center relative group ">
                                <p
                                    onClick={handleRedirect01}
                                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-orange-600 text-DGXwhite hover:text-DGXgreen transition-colors duration-300 cursor-pointer"
                                >
                                    Discussion Platform
                                </p>
                                <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col items-center">
                                    <div className="relative z-10 p-2 text-xs md:text-sm leading-none text-DGXwhite whitespace-no-wrap bg-black shadow-lg rounded-md">
                                        Be A Part Now
                                    </div>
                                    <div className="w-3 h-3 -mt-1 rotate-45 bg-black"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Image and Text Section */}
                    <div className="flex flex-col justify-center items-center bg-DGXwhite opacity-100 w-full h-full p-4 md:p-6 lg:p-10">
                        <div className="text-center">
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-DGXblack">Welcome!</h1>
                            <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl leading-6 text-DGXblack">
                                Hi! Are you a student, researcher, or developer looking to showcase your achievements, access certificates, and collaborate on projects? Join our DGX Community! Connect with like-minded individuals, share your accomplishments, and work on exciting projects together. Let's build a supportive and engaging space for learning and collaboration. See you there!
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-neutral-100">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 lg:p-8">
                    {/* Text and Button Section */}
                    <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                        <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
                            <span className="animate-pulse bg-gradient-to-r from-DGXgreen-500 via-DGXblack-500 to-DGXblue-500 bg-clip-text text-transparent">
                                Upcoming Events
                            </span>
                            <p className="mt-2 text-sm md:text-base lg:text-lg text-DGXblue">
                                Attend our regular events and workshops to learn from the best in the industry. Enhance your skills and network with professionals.
                            </p>
                        </div>
                        <button className="text-sm md:text-md lg:text-lg bg-DGXgreen text-white py-2 px-4 lg:py-2 lg:px-5 border border-DGXblue rounded-md mt-4 hover:bg-zinc-800 transition-colors duration-300">
                            Enroll Now
                        </button>
                    </div>
                    {/* Carousel Section */}
                    <div className="relative w-full h-64 lg:h-[500px] rounded-lg overflow-hidden">
                        <div className="relative h-full">
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                                >
                                    <img src={slide} alt={`Slide ${index}`} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <button
                            type="button"
                            className="absolute top-1/2 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none transform -translate-y-1/2"
                            onClick={prevSlide}
                        >
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                                <svg
                                    className="w-4 h-4 text-DGXwhite"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 1 1 5l4 4"
                                    />
                                </svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button
                            type="button"
                            className="absolute top-1/2 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none transform -translate-y-1/2"
                            onClick={nextSlide}
                        >
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                                <svg
                                    className="w-4 h-4 text-DGXwhite"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 9 4-4-4-4"
                                    />
                                </svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            <div className="bg-DGXgray py-24 sm:py-32 ">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
                            suspendisse.
                        </p>
                    </div>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        {people.map((person) => (
                            <li key={person.name}>
                                <div className="flex items-center gap-x-6">
                                    <img alt="" src={person.imageUrl} className="h-16 w-16 rounded-full" />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                        <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h1 className="text-center text-2xl font-bold leading-8 text-DGXblue">
                    NVIDIA DGX systems are at the forefront of AI research and innovation. Trusted by the world’s most innovative universities and corporations, DGX provides the computational power needed to tackle the most complex AI challenges. Whether advancing research in academic institutions or driving breakthroughs in industry, DGX stands as the premier choice for those leading the charge in artificial intelligence.
                    </h1>
                    <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                        <img
                            alt="Transistor"
                            src={images.ABESIT}
                            width={178}
                            height={100}
                            className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                        />
                        <img
                            alt="Reform"
                            src={images.KIET}
                            width={178}
                            height={100}
                            className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                        />
                         <img
                            alt="SavvyCal"
                            src={images.giventures}
                            width={178}
                            height={100}
                            className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
                        />
                        <img
                            alt="Tuple"
                            src={images.SHARDA}
                            width={178}
                            height={100}
                            className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                        />
                        <img
                            alt="SavvyCal"
                            src={images.GLBAJAJ}
                            width={178}
                            height={100}
                            className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                        />
                      
                       
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Home;
