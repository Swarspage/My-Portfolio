import profilePic from "./assets/profilePic.jpg";
import downloadIcon from "./assets/downloadicon.png";
import emailIcon from "./assets/email.png";
import githubIcon from "./assets/github.png";
import xIcon from "./assets/X.png";
import linkedinIcon from "./assets/linkedin-logo.png";
import discordIcon from "./assets/discord.png";

function Introduction() {
  return (
    <>
      <div className="max-w-2xl mx-auto px-4 sm:px-8 md:px-12">
        <div className="flex items-center gap-3 sm:gap-4">
          <img
            src={profilePic}
            alt=""
            className="profile-picture rounded-full h-16 w-16 sm:h-20 sm:w-20 flex-shrink-0"
          />
          <div className="name min-w-0">
            <h1 className="font-[doto] font-bold tracking-wider text-[22px] sm:text-[26px] leading-7 sm:leading-8 text-[#fafafa]">
              Swar
            </h1>
            <p className="font-[Quicksand] tracking-wider text-[13px] sm:text-[15px] leading-6 sm:leading-8 text-gray-500 hover:text-[white] transition-colors duration-300 cursor-pointer">
              <a href="https://github.com/Swarspage" target="_blank">
                @sswar_09
              </a>
            </p>
          </div>
        </div>
        <p className="text-gray-400 text-sm mt-5">
          Hi! I’m <span className="text-[#fafafa]">Swar</span>, a <span className="text-[#fafafa]">19-year-old 2nd year student</span> at <span className="text-[#fafafa]">Mumbai University</span>. I’m currently working as a college intern under our HOD and as a <span className="text-[#fafafa]">frontend developer</span>.
        </p>

        <p className="text-gray-400 text-sm mt-5">
          I’m currently building a <span className="text-[#fafafa]">scalable student database</span> to store important student information. I’m also learning <span className="text-[#fafafa]">SQL, PostgreSQL, and Express with Node.js</span>, and I plan to learn <span className="text-[#fafafa]">Next.js and TypeScript</span> next.
        </p>

        <p className="text-gray-400 text-sm mt-5">
          I enjoy working with <span className="text-[#fafafa]">React and frontend technologies</span>. Feel free to ask me about frontend development.
        </p>

        <div className="mt-5 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/swar-shinde-91131a2b9/",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="w-full sm:w-auto p-2 font-[Quicksand] text-xs bg-gray-900 rounded-xl hover:cursor-pointer text-[white] border border-transparent transition duration-500 hover:border-red-400"
          >
            Connect with me 😃
          </button>
          <button
            onClick={() => {
              // Create a temporary link element to download the CV
              const link = document.createElement("a");
              // Use the correct base path for GitHub Pages
              link.href = import.meta.env.DEV
                ? "/Swar_Shinde_CV.pdf"
                : "/My-Portfolio/Swar_Shinde_CV.pdf";
              link.download = "Swar_Shinde_CV.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="w-full sm:w-auto p-2 hover:cursor-pointer font-[Quicksand] text-xs bg-gray-900 rounded-xl text-[white] border border-transparent transition duration-500 hover:border-red-400"
          >
            <div className="flex items-center justify-center gap-1">
              <img src={downloadIcon} className="h-4 w-4" alt="" />
              Download CV
            </div>
          </button>
        </div>

        <div className=" mt-5 border-t border-gray-700 font-[Quicksand] text-[#fafafa]">
          <div className="my-3 text-[#fafafa] text-sm ">
            Where to find me? (ofc! Online xD)
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3 items-center">
            <button
              onClick={() => {
                window.open("mailto:swarshinde2006@gmail.com");
              }}
              className="p-2 font-[Quicksand] text-xs bg-gray-900 rounded-xl text-white border border-transparent transition duration-500 hover:border-red-400 hover:cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <img src="https://cdn.simpleicons.org/gmail/EA4335" className="h-4 w-4" alt="Email icon" />
                <span className="hidden xs:inline">Email me</span>
                <span className="xs:hidden">Email</span>
              </div>
            </button>
            <button
              className="p-2 font-[Quicksand] text-xs bg-gray-900 rounded-xl text-[white] border border-transparent transition duration-500 hover:border-red-400 hover:cursor-pointer"
              onClick={() =>
                window.open(
                  "https://github.com/Swarspage",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <div className="flex items-center gap-2">
                <img src="https://cdn.simpleicons.org/github/f87171" className="h-4 w-4" alt="" />
                GitHub
              </div>
            </button>
            <button
              className="p-2 font-[Quicksand] text-xs bg-gray-900 rounded-xl text-[white] border border-transparent transition duration-500 hover:border-red-400 hover:cursor-pointer"
              onClick={() =>
                window.open(
                  "https://x.com/Swars_page",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <div className="flex items-center gap-2">
                <img src="https://cdn.simpleicons.org/x/f87171" className="h-4 w-4" alt="" />X
              </div>
            </button>
            <button
              className="p-2 font-[Quicksand] text-xs bg-gray-900 rounded-xl text-[white] border border-transparent transition duration-500 hover:border-red-400 hover:cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/swar-shinde-91131a2b9/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <div className="flex items-center gap-2">
                <img
                  src="https://img.shields.io/badge/-LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white"
                  className="h-4 w-auto rounded-sm"
                  alt=""
                />
                <span className="hidden xs:inline">LinkedIn</span>
                <span className="xs:hidden">LI</span>
              </div>
            </button>
            <button
              className="p-2 font-[Quicksand] text-xs bg-gray-900 rounded-xl text-[white] border border-transparent transition duration-500 hover:border-red-400"
              onClick={() =>
                window.open(
                  "https://discord.gg/itsme.3974",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.simpleicons.org/discord/5865F2"
                  className="h-4 w-4 rounded-sm"
                  alt=""
                />
                Discord
              </div>
            </button>
            <button
              className="p-2 font-[Quicksand] text-xs bg-gray-900 rounded-xl text-[white] border border-transparent transition duration-500 hover:border-red-400 hover:cursor-pointer"
              onClick={() =>
                window.open(
                  "https://instagram.com/sswar_09",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <div className="flex items-center gap-2">
                <img src="https://cdn.simpleicons.org/instagram/E4405F" className="h-4 w-4" alt="" />
                Instagram
              </div>
            </button>
            <button
              className="p-2 font-[Quicksand] text-xs bg-gray-900 rounded-xl text-[white] border border-transparent transition duration-500 hover:border-red-400 hover:cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/@Swardevv/videos",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <div className="flex items-center gap-2">
                <img src="https://cdn.simpleicons.org/youtube/FF0000" className="h-4 w-4" alt="" />
                YouTube
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduction;
