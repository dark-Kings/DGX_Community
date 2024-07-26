import React, { useState, useEffect, useMemo } from 'react';

const LoadPage = () => {
  const messages = useMemo(() => [
    "Loading your experience...",
    "Just a moment, almost there...",
    "Loading, please wait...",
    "Almost ready...",
    "Hang tight, we're getting things ready...",
    "Loading your content, one moment please...",
    "We're working on it, please wait...",
    "Preparing everything for you...",
    "Your experience is loading...",
    "Setting things up, just a second...",
    "Loading in progress, stay with us...",
    "We're almost there, hang on...",
    "Fetching your data, please wait...",
    "Loading, don't go anywhere..."
  ], []);

  const [message, setMessage] = useState(messages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * messages.length);
      setMessage(messages[randomIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, [messages]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 opacity-70">
      <div className="relative flex items-center justify-center w-40 h-40 mb-4">
        <div className="absolute animate-spin rounded-full border-t-4 border-DGXblue w-full h-full"></div>
        <div className="absolute animate-spin-reverse rounded-full border-t-4 border-DGXgreen w-36 h-36"></div>
        <div className="absolute animate-spin rounded-full border-t-4 border-DGXblack w-32 h-32"></div>
        <div className="absolute text-center text-3xl font-bold text-DGXblack animate-bounce">
          DGX
        </div>
      </div>
      <div className="text-center text-lg font-medium text-DGXblack m-5 mb-1">
        {message}
      </div>
      <div className="text-center text-base font-medium text-gray-600 opacity-90">
        Please wait while we prepare your content.
      </div>
    </div>
  );
};

export default LoadPage;
