import React, { useEffect, useState } from "react";
import { fetchListings } from "../utils/api";
import { motion } from "framer-motion";

function Dashboard() {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getListings = async () => {
      try {
        const response = await fetchListings();
        setListings(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "An error occurred");
      }
    };

    getListings();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A1628] to-gray-900">
      {/* Hero Section */}
      <div className="bg-[#0A1628] py-12 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">Dashboard</h1>
          <p className="text-gray-300 text-lg">
            Manage your listings and track your business metrics
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => {
            const isFutureDate = new Date(listing.availableFrom) > new Date();
            const isAvailable = !isFutureDate;

            return (
              <motion.div
                key={listing._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl hover:shadow-white/5"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />

                <div className="relative">
                  <h2 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {listing.location}
                  </h2>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-gray-300">
                      <span>Size</span>
                      <span className="font-medium text-white">{listing.size}</span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-gray-300">
                        <span>Hourly Rate</span>
                        <span className="font-medium text-white">${listing.price.hour}</span>
                      </div>
                      <div className="flex items-center justify-between text-gray-300">
                        <span>Daily Rate</span>
                        <span className="font-medium text-white">${listing.price.day}</span>
                      </div>
                      <div className="flex items-center justify-between text-gray-300">
                        <span>Monthly Rate</span>
                        <span className="font-medium text-white">${listing.price.month}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <div className="flex items-center justify-between text-gray-300">
                        <span>Status</span>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            isAvailable
                              ? "bg-green-500/10 text-green-400"
                              : "bg-red-500/10 text-red-400"
                          }`}
                        >
                          {isAvailable ? "Available" : "Not Available"}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 pt-4 text-sm text-gray-400">
                      <p>
                        Min Booking: {new Date(listing.minBooking).toLocaleDateString()}
                      </p>
                      <p>
                        Available From: {new Date(listing.availableFrom).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
