import React, { useEffect, useState } from "react";
import { fetchListings } from "../utils/api";

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
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {listings.map((listing) => (
          <div key={listing._id} className="bg-white shadow rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{listing.location}</h2>
            <p>Size: {listing.size}</p>
            <p>Price per hour: ${listing.price.hour}</p>
            <p>Price per day: ${listing.price.day}</p>
            <p>Price per month: ${listing.price.month}</p>
            <p>Available: {listing.isAvailable ? "Yes" : "No"}</p>
            <p>
              Min Booking: {new Date(listing.minBooking).toLocaleDateString()}
            </p>
            <p>
              Available From:{" "}
              {new Date(listing.availableFrom).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
