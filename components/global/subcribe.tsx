import React from "react";

function Subscribe() {
  return (
    <section className="flex justify-center items-center w-full z-10 bg-[url('/images/IMG-20250222-WA0005.jpg')] bg-cover bg-center">
      <div className="w-full bg-[#F8B51C8C]">
        {/* Centered dark translucent overlay with backdrop blur */}
        <div className="w-full flex flex-col items-center text-center gap-y-5 md:gap-y-10 p-7 md:p-32 rounded-[16px] text-white backdrop-blur-sm bg-[#00000064]">
          {/* Subscription card */}
          <div className="bg-white/80 text-gray-800 p-8 rounded-xl shadow-lg max-w-4xl w-full">
            <h2 className="text-2xl font-semibold mb-4">
              Subscribe Newsletter
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Never miss out on latest update
            </p>
            <form className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 ">
              <input
                type="email"
                placeholder="Enter your email address"
                className="rounded-l-full border-y border-l border-gray-300 w-full sm:w-2/3 px-4 py-2  focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                type="submit"
                className="rounded-r-full  border-y border-r border-gray-300 bg-[#F8B51C] ml-[-2px] hover:bg-yellow-500 text-white px-6 py-2  font-semibold transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
