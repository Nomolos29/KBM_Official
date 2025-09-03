import React from "react";

function Subscribe() {
  return (
    <section className="flex justify-center items-center w-full z-10 bg-[url('/images/IMG-20250222-WA0005.jpg')] bg-cover bg-center">
      <div className="w-full bg-[#F8B51C8C]">
         
        <div className="w-full flex flex-col items-center text-center gap-y-4 sm:gap-y-5 md:gap-y-10 px-4 sm:px-5 md:px-7 py-10 sm:py-12 md:py-14 lg:py-20 text-white backdrop-blur-sm bg-[#00000064]">
          
          <div className="bg-white/40 max-w-[1200px] justify-center flex flex-col gap-y-6 sm:gap-y-8 md:gap-y-12 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-3xl md:rounded-[40px] w-full h-auto sm:h-[320px] md:h-[350px]">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-[36px] text-[#1B1B1B] font-semibold leading-tight mb-1 sm:mb-2 md:mb-0">
                Subscribe Newsletter
              </h2>
              <p className="text-base sm:text-lg md:text-[20px] text-[#474747]">
                Never miss out on latest update
              </p>
            </div>
            <form className="flex flex-col w-full sm:w-[90%] md:w-[70%] mx-auto overflow-hidden sm:flex-row items-center gap-3 sm:gap-4 md:gap-0">
              <input
                type="email"
                placeholder="Enter your email address"
                className="md:rounded-l-full rounded-full md:rounded-r-none text-base sm:text-lg h-[45px] sm:h-[50px] md:h-[60px] px-4 sm:px-5 md:px-7 text-gray-400 w-full md:w-8/12 outline-none"
              />
              <button
                type="submit"
                className="rounded-full md:rounded-r-full md:rounded-l-none w-full text-base sm:text-lg md:text-xl h-[45px] sm:h-[50px] md:h-[60px] md:w-4/12 bg-[#F8B51C] ml-[-2px] hover:bg-yellow-500 text-[#1B1B1B] px-2 font-semibold transition"
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
