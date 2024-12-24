import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addListing } from "../utils/api";
import { motion } from "framer-motion";

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

  const inputClasses = "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-white/20";
  const labelClasses = "block mb-2 text-sm font-medium text-gray-300";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <div className="bg-[#0A1628]/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl">
        <h1 className="text-3xl font-bold text-white mb-8">Add New Listing</h1>
        
        {error && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6"
          >
            <p className="text-red-400">{error}</p>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="location" className={labelClasses}>
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className={inputClasses}
                placeholder="Enter location"
              />
            </div>

            <div>
              <label htmlFor="size" className={labelClasses}>
                Size
              </label>
              <input
                type="text"
                id="size"
                name="size"
                value={formData.size}
                onChange={handleChange}
                required
                className={inputClasses}
                placeholder="Enter size"
              />
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-6 space-y-6">
            <h2 className="text-xl font-semibold text-white mb-4">Pricing Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label htmlFor="price.hour" className={labelClasses}>
                  Price per Hour ($)
                </label>
                <input
                  type="number"
                  id="price.hour"
                  name="price.hour"
                  value={formData.price.hour}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="0.00"
                />
              </div>

              <div>
                <label htmlFor="price.day" className={labelClasses}>
                  Price per Day ($)
                </label>
                <input
                  type="number"
                  id="price.day"
                  name="price.day"
                  value={formData.price.day}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="0.00"
                />
              </div>

              <div>
                <label htmlFor="price.month" className={labelClasses}>
                  Price per Month ($)
                </label>
                <input
                  type="number"
                  id="price.month"
                  name="price.month"
                  value={formData.price.month}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="0.00"
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="availableFrom" className={labelClasses}>
              Available From
            </label>
            <input
              type="date"
              id="availableFrom"
              name="availableFrom"
              value={formData.availableFrom}
              onChange={handleChange}
              required
              className={inputClasses}
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0A1628] transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
          >
            Add Listing
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}

export default AddListing;