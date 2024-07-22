import { useEffect, useState } from 'react';

const Notfound = () => {
    const [digits, setDigits] = useState(['0', '0', '0']);
    const targetDigits = ['4', '0', '4'];

    useEffect(() => {
        const randomizeDigit = (index) => {
            if (index >= digits.length) return;

            let intervalId = setInterval(() => {
                setDigits(prevDigits => {
                    const newDigits = [...prevDigits];
                    newDigits[index] = Math.floor(Math.random() * 10).toString();
                    return newDigits;
                });
            }, 100);

            setTimeout(() => {
                clearInterval(intervalId);
                setDigits(prevDigits => {
                    const newDigits = [...prevDigits];
                    newDigits[index] = targetDigits[index];
                    return newDigits;
                });
                randomizeDigit(index + 1);
            }, 400);
        };

        randomizeDigit(0);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-DGXblue via-DGXgreen to-DGXblack text-DGXgreen p-4">
            <div className="text-9xl sm:text-9xl font-bold animate-pulse flex space-x-2">
                {digits.map((digit, index) => (
                    <span key={index}>{digit}</span>
                ))}
            </div>
            <p className="text-xl sm:text-2xl mt-4 text-center">Oops! Page Not Found</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                    className="px-4 py-2 bg-DGXgreen text-DGXwhite font-semibold rounded hover:bg-[#15803d] transition duration-300"
                    onClick={() => window.history.back()}
                >
                    Go Back
                </button>
                <a 
                    href="/" 
                    className="px-4 py-2 bg-DGXblue text-DGXwhite font-semibold rounded hover:bg-[#1d4ed8] transition duration-300"
                >
                    Home
                </a>
            </div>
            <div className="mt-16 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-DGXwhite animate-pulse"></div>
        </div>
    );
}

export default Notfound;
