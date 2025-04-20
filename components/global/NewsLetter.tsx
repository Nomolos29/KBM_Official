import React from "react";

const Newsletter = () => {
  return (
    <div className="relative bg-yellow-600 py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative max-w-3xl mx-auto text-center">
        <div className="bg-white/80 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900">
            Subscribe Newsletter
          </h2>
          <p className="mt-2 text-gray-600">Never miss out on latest update</p>
          <div className="mt-4 flex justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-3 w-2/3 rounded-l-lg border border-gray-300 focus:outline-none"
            />
            <button className="bg-yellow-500 text-white px-5 py-3 rounded-r-lg font-medium hover:bg-yellow-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
