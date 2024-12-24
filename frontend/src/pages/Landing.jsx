import React from 'react';
import { Link } from 'react-router-dom';
import MapSection from './MapSection';
import AdFormats from './AdFormats';
import TrySection from './TrySection';
import Footer from './Footer';

export function Landing() {
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <div className="min-h-screen bg-[#0A1628]">
      <div className="min-h-screen flex flex-col relative">
        <nav className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex-shrink-0">
                <Link to="/" className="text-2xl font-bold text-white">
                  Onboard
                </Link>
              </div>
              <div className="flex gap-4">
                {isLoggedIn ? (
                  <Link 
                    to="/dashboard"
                    className="bg-white text-[#0A1628] hover:bg-white/90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    View Dashboard
                  </Link>
                ) : (
                  <>
                    <Link 
                      to="/login"
                      className="text-white/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      Log in
                    </Link>
                    <Link 
                      to="/signup"
                      className="bg-white text-[#0A1628] hover:bg-white/90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      Get Started
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>

        <div className="flex-1 flex items-center">
          <div className="w-full">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Welcome to Onboard
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Streamline your onboarding process and manage your business efficiently. Get started today and experience the difference.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  {isLoggedIn ? (
                    <Link
                      to="/dashboard"
                      className="bg-white text-[#0A1628] hover:bg-white/90 px-6 py-3 rounded-md text-sm font-semibold transition-colors"
                    >
                      View Dashboard
                    </Link>
                  ) : (
                    <>
                      <Link
                        to="/signup"
                        className="bg-white text-[#0A1628] hover:bg-white/90 px-6 py-3 rounded-md text-sm font-semibold transition-colors"
                      >
                        Get Started
                      </Link>
                      <Link 
                        to="/login" 
                        className="text-sm font-semibold leading-6 text-white flex items-center"
                      >
                        Log in <span aria-hidden="true" className="ml-1">→</span>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 mx-auto w-fit">
          <div className="text-white/50 text-sm flex flex-col items-center gap-2">
            <span>Scroll to explore</span>
            <svg 
              className="w-6 h-6 animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      <MapSection />
      <AdFormats />
      <TrySection />
      <Footer />
    </div>
  );
}

export default Landing;