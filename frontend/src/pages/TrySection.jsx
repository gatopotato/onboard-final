import React from 'react';

export function TrySection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-[#0A1628]/70">
            TRY ONBOARD
          </h2>
          <p className="mt-6 text-4xl font-bold tracking-tight text-[#0A1628] sm:text-6xl">
            Launch OOH campaigns in minutes
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4 text-lg text-[#0A1628]/70">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Industry Leading Technology
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              99% of Billboard Ads
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Best Billboard Prices Guaranteed
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              White Glove Service
            </div>
          </div>
          
          <div className="mt-10 flex w-full max-w-md gap-4">
            <input
              type="email"
              placeholder="Enter business email"
              className="min-w-0 flex-auto rounded-md border-0 bg-white px-4 py-3 text-[#0A1628] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrySection;