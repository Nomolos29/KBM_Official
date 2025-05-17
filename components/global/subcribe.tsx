import React from "react";

function Subscribe() {
  return (
    <section className="flex justify-center items-center w-full z-10 bg-[url('/images/IMG-20250222-WA0005.jpg')] bg-cover bg-center">
      <div className="w-full bg-[#F8B51C8C]">
        {/* Centered dark translucent overlay with backdrop blur */}
        <div className="w-full flex flex-col items-center text-center gap-y-5 md:gap-y-10 px-7 py-14 md:py-20 text-white backdrop-blur-sm bg-[#00000064]">
          {/* Subscription card */}
          <div className="bg-white/40 max-w-[1200px] justify-center flex flex-col gap-y-12 md:p-8 rounded-3xl md:rounded-[40px] w-full h-[350px]">
            <div>
              <h2 className="text-[36px] text-[#1B1B1B] font-semibold leading-tight mb-2 md:mb-0">
                Subscribe Newsletter
              </h2>
              <p className="text-[20px] text-[#474747]">
                Never miss out on latest update
              </p>
            </div>
            <form className="flex flex-col w-[90%] md:w-[70%] mx-auto overflow-hidden sm:flex-row items-center gap-4 sm:gap-0 ">
              <input
                type="email"
                placeholder="Enter your email address"
                className="md:rounded-l-full rounded-full text-lg h-[60px] px-5 md:px-7 text-gray-400 w-full md:w-8/12 outline-none "
              />
              <button
                type="submit"
                className="rounded-full md:rounded-r-full w-full text-xl h-[60px] md:w-4/12 bg-[#F8B51C] ml-[-2px] hover:bg-yellow-500 text-[#1B1B1B] px-2 font-semibold transition"
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
