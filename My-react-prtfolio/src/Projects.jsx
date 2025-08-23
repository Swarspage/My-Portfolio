function Projects() {
  return (
    <>
      <div className="max-w-2xl mx-auto px-4 sm:px-8 md:px-12">
        <div className="mt-5 border-t border-gray-700 font-[Quicksand] text-[#fafafa] flex gap-3">
          <h1 className="my-3 font-[doto] font-bold tracking-wider text-[22px] sm:text-[26px] leading-7 sm:leading-8 text-[#fafafa]">
            Projects
          </h1>
        </div>
        <div className="w-full mt-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Swarspage/Runtime-Terrors"
            className="block"
          >
            <div className="h-32 sm:h-40 flex border border-gray-700 bg-none hover:bg-gray-950 rounded-2xl truncate w-full mt-5">
              <div className="h-full overflow-hidden w-[35%] sm:w-[30%]">
                <img
                  className="h-full w-full object-cover rounded-l-2xl transform transition-transform duration-300 ease-in-out hover:scale-[1.2]"
                  src="./src/assets/Project1.jpg"
                  alt="SkillTube Project"
                />
              </div>

              <div className="flex flex-col justify-center px-3 sm:px-5 font-[Quicksand] w-[65%] sm:w-[70%]">
                <p className="text-[#fafafa] text-lg sm:text-xl font-semibold">
                  SkillTube
                </p>
                <p className="text-gray-400 text-xs sm:text-sm break-words whitespace-normal">
                  A video-first platform that empowers skilled workers to
                  showcase their craft and connect directly with global buyers.
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="w-full mt-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Swarspage/CSI-Weather-App"
            className="block"
          >
            <div className="h-32 sm:h-40 flex border border-gray-700 bg-none hover:bg-gray-950 rounded-2xl truncate w-full mt-5">
              <div className="h-full overflow-hidden w-[35%] sm:w-[30%]">
                <img
                  className="h-full w-full object-cover rounded-l-2xl transform transition-transform duration-300 ease-in-out hover:scale-[1.2]"
                  src="./src/assets/Vayu.png"
                  alt="Vayu Project"
                />
              </div>

              <div className="flex flex-col justify-center px-3 sm:px-5 font-[Quicksand] w-[65%] sm:w-[70%]">
                <p className="text-[#fafafa] text-lg sm:text-xl font-semibold">Vayu</p>
                <p className="text-gray-400 text-xs sm:text-sm break-words whitespace-normal">
                  A sleek weather app that delivers real-time forecasts using
                  the OpenWeather API.
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="flex items-center justify-center text-center h-32 sm:h-40 w-full text-gray-400 font-[Quicksand] px-4">
          <p className="text-sm sm:text-base">
            These are just the first chapters — the real story of my creations is
            only getting started.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-8 md:px-12">
        <div className="border-t border-gray-700 font-[Quicksand] flex flex-col text-[#fafafa] gap-3">
          <h1 className="my-6 sm:my-8 font-[doto] font-bold tracking-wider text-[22px] sm:text-[26px] leading-7 sm:leading-8 text-[#b42323]">
            Swar.dev
          </h1>
          <div className="">
            <p className="text-sm my-2 font-[Quicksand] text-gray-400">
              That's all, folks | Designed & built with more headache...
            </p>
            <p className="text-sm my-2 mb-10 font-[Quicksand] text-gray-400">
              © 2025 Swar S Shinde. All rights reserved (even the bugs).
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
