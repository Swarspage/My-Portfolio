function Introduction() {
  return (
    <>
      <div className="max-w-2xl mx-auto px-4 sm:px-8 md:px-12">
        <div className="flex items-center gap-4">
          <img
            src="./src/assets/ProfilePic.jpg"
            alt=""
            className="profile-picture rounded-full h-20 w-20 hover:"
          />
          <div className="name">
            <h1 className="font-[doto] font-bold tracking-wider text-[26px] leading-8 text-[#fafafa]">
              Swar
            </h1>
            <p className="font-[Quicksand] tracking-wider text-[15px] leading-8 text-gray-500 hover:text-[white] transition-colors duration-300 cursor-pointer">
              <a href="https://github.com/Swarspage" target="_blank">
                @sswar_09
              </a>
            </p>
          </div>
        </div>
        <p className="text-gray-400 text-sm mt-5">
          I'm <span className="text-[#fafafa]">Swar</span>, an 19-year-old
          developer-in-training from Navi Mumbai, India. I spend most of my time
          <span className="text-[#fafafa]"> building websites</span>, breaking
          them, and then pretending it was all part of the plan.
        </p>

        <p className="text-gray-400 text-sm mt-5">
          I’m all about development with a bit of design sense, so yeah, I can
          make things look good and actually work (shocking, I know). My current
          tech crush is the <span className="text-[#fafafa]">MERN</span> stack,
          but I’ll flirt with any tool that gets the job done.
        </p>

        <p className="text-gray-400 text-sm mt-5">
          When <span className="text-[#fafafa]">I'm not coding</span>, you’ll
          catch me riding my bike, playing chess (and occasionally winning),
          cooking something experimental, or plotting my next hackathon win.
        </p>

        <p className="text-gray-400 text-sm mt-5">
          <span className="text-[#fafafa]">
            I code like I play chess — thinking three moves ahead, but still
            ready to improvise when the plan falls apart.
          </span>
        </p>

        <div className="mt-5 flex items-center gap-3">
          <button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/swar-shinde-91131a2b9/",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className=" p-2 font-[Quicksand] text-xs bg-gray-900 rounded-xl hover:cursor-pointer text-[white] border border-transparent transition duration-500 hover:border-red-400 "
          >
            Connect with me 😃
          </button>
          <button className=" p-2 hover:cursor-pointer font-[Quicksand] text-xs bg-gray-900 rounded-xl text-[white] border border-transparent transition duration-500 hover:border-red-400 ">
            <div className="flex items-center gap-1">
              <img
                src="./src/assets/downloadicon.png"
                className="h-4 w-4"
                alt=""
              />
              Download CV
            </div>
          </button>
        </div>

        <div className=" mt-5 border-t border-gray-700 font-[Quicksand] text-[#fafafa]">
          <div className="my-3 text-[#fafafa] text-sm ">
            Where to find me? (ofc! Online xD)
          </div>
          <div className="flex gap-3 items-center">
            <button
              onClick={() => {
                navigator.clipboard
                  .writeText("swarshinde2006@gmail.com")
                  .then(() => {
                    alert("📋 Email copied to clipboard!");
                  })
                  .catch((err) => {
                    console.error("Failed to copy email: ", err);
                  });
              }}
              className="p-2 font-[Quicksand] text-xs bg-gray-900 rounded-xl text-white border border-transparent transition duration-500 hover:border-red-400 hover:cursor-pointer"
            >
              <div className="flex items-center gap-1">
                <img
                  src="./src/assets/email.png"
                  className="h-4 w-4"
                  alt="Email icon"
                />
                Email me
              </div>
            </button>
            <button
              className=" p-2 font-[Quicksand] text-xs bg-gray-900 rounded-xl text-[white] border border-transparent transition duration-500 hover:border-red-400 hover:cursor-pointer"
              onClick={() =>
                window.open(
                  "https://github.com/Swarspage",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <div className="flex items-center gap-1">
                <img src="./src/assets/github.png" className="h-5 w-5" alt="" />
                GitHub
              </div>
            </button>
            <button
              className=" p-2 font-[Quicksand] text-xs bg-gray-900 rounded-xl text-[white] border border-transparent transition duration-500 hover:border-red-400 hover:cursor-pointer"
              onClick={() =>
                window.open(
                  "https://x.com/Swars_page",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <div className="flex items-center gap-1">
                <img src="./src/assets/X.png" className="h-4 w-4" alt="" />X
              </div>
            </button>
            <button
              className=" p-2 font-[Quicksand] text-xs bg-gray-900 rounded-xl text-[white] border border-transparent transition duration-500 hover:border-red-400 hover:cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/swar-shinde-91131a2b9/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <div className="flex items-center gap-1">
                <img
                  src="./src/assets/linkedin-logo.png"
                  className="h-4 w-4 bg-amber-50 rounded-sm"
                  alt=""
                />
                Linkedin
              </div>
            </button>
            <button
              className=" p-2 font-[Quicksand] text-xs bg-gray-900 rounded-xl text-[white] border border-transparent transition duration-500 hover:border-red-400 "
              onClick={() => {
                navigator.clipboard
                  .writeText("itsme.3974")
                  .then(() => {
                    alert("ID copied to clipboard!");
                  })
                  .catch((err) => {
                    console.error("Failed to copy ID: ", err);
                  });
              }}
            >
              <div className="flex items-center gap-1">
                <img
                  src="./src/assets/discord.png"
                  className="h-4 w-4  bg-amber-50 rounded-sm"
                  alt=""
                />
                Discord
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduction;
