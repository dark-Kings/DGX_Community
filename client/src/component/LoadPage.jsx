// import React from 'react';

const LoadPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 opacity-70">
      <div className="relative flex items-center justify-center w-32 h-32 mb-4">
        <div className="absolute animate-spin rounded-full border-t-4 border-DGXblue w-full h-full"></div>
        <div className="absolute animate-spin-reverse rounded-full border-t-4 border-DGXgreen w-28 h-28"></div>
        <div className="absolute animate-spin rounded-full border-t-4 border-DGXblack w-24 h-24"></div>
        <div className="absolute text-center text-2xl font-bold text-DGXblack animate-pulse">
          DGX
        </div>
      </div>
      <div className="text-center text-lg font-medium text-DGXblack m-5 mb-1 opacity-80">
        Loading...
      </div>
      <div className="text-center text-base font-medium text-gray-600 opacity-80">
        Please wait while we prepare your content.
      </div>
    </div>
  );
};

export default LoadPage;
