import { Link } from 'react-router-dom';
import { images } from '../constant/index.js';

const Home = () => {
    return (
        <div className="home_container w-full bg-dgx-gradient flex items-center justify-center p-10">
            <div className="flex flex-col items-center lg:flex-row lg:space-x-8 px-4 sm:px-8 lg:px-16 xl:px-24 text-center lg:text-left">
                <img
                    src={images.secure}
                    alt="Background"
                    className="w-3/4 max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg object-contain"
                />
                <div className="mt-6 lg:mt-0 flex flex-col items-center lg:items-start justify-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-DGXwhite">DGX Community</h1>
                    <h3 className="text-2xl sm:text-xl lg:text-2xl font-black text-DGXwhite mt-7">Unleash the Power of AI with DGX Systems</h3>
                    <p className="mt-5 text-DGXwhite max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg">Welcome to the DGX Community, your ultimate hub for everything related to NVIDIA DGX systems. Whether you’re a seasoned professional or just starting your journey with DGX, this community is designed to support and inspire you.</p>
                    <Link to="/SignInn">
                        <button className="mt-6 py-2 px-6 bg-DGXblue text-DGXwhite text-lg font-bold rounded-full hover:bg-DGXwhite hover:text-DGXgreen transition duration-300">Join Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
