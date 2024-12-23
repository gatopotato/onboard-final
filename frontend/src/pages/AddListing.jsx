import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addListing } from "../utils/api";

function AddListing() {
  const [formData, setFormData] = useState({
    location: "",
    size: "",
    price: {
      hour: "",
      day: "",
      month: "",
    },
    isAvailable: true,
    minBooking: "",
    availableFrom: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("price.")) {
      const priceField = name.split(".")[1];
      setFormData({
        ...formData,
        price: {
          ...formData.price,
          [priceField]: value,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await addListing(formData);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add Listing</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="location" className="block mb-1">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="size" className="block mb-1">
            Size
          </label>
          <input
            type="text"
            id="size"
            name="size"
            value={formData.size}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="price.hour" className="block mb-1">
            Price per Hour
          </label>
          <input
            type="number"
            id="price.hour"
            name="price.hour"
            value={formData.price.hour}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="price.day" className="block mb-1">
            Price per Day
          </label>
          <input
            type="number"
            id="price.day"
            name="price.day"
            value={formData.price.day}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="price.month" className="block mb-1">
            Price per Month
          </label>
          <input
            type="number"
            id="price.month"
            name="price.month"
            value={formData.price.month}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        {/* <div>
          <label htmlFor="isAvailable" className="block mb-1">
            Is Available
          </label>
          <select
            id="isAvailable"
            name="isAvailable"
            value={formData.isAvailable}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>
        <div>
          <label htmlFor="minBooking" className="block mb-1">
            Minimum Booking Date
          </label>
          <input
            type="date"
            id="minBooking"
            name="minBooking"
            value={formData.minBooking}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div> */}
        <div>
          <label htmlFor="availableFrom" className="block mb-1">
            Available From
          </label>
          <input
            type="date"
            id="availableFrom"
            name="availableFrom"
            value={formData.availableFrom}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add Listing
        </button>
      </form>
    </div>
  );
}

export default AddListing;
