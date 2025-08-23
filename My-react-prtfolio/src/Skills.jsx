import jsIcon from './assets/js.png';
import htmlIcon from './assets/html.png';
import cssIcon from './assets/css.png';
import cIcon from './assets/C.png';
import javaIcon from './assets/java.png';
import reactIcon from './assets/react.png';
import tailwindIcon from './assets/Tailwind CSS.png';
import nodeIcon from './assets/node-js.png';
import mongoIcon from './assets/MongoDB.png';
import gitIcon from './assets/Git.png';
import githubIcon from './assets/github.png';
import vsIcon from './assets/VS.png';

function Skills() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-8 md:px-12">
      <div className="mt-5 border-t border-gray-700 font-[Quicksand] text-[#fafafa] flex flex-col sm:flex-row gap-2 sm:gap-3">
        <h1 className="my-3 font-[doto] font-bold tracking-wider text-[22px] sm:text-[26px] leading-7 sm:leading-8 text-[#fafafa]">
          Skills
        </h1>
        <div className="my-0 sm:my-3 text-gray-500 text-sm flex items-baseline">
          Which I use/know
        </div>
      </div>
      <p className="text-gray-400 font-[Quicksand] text-sm">
        These are the technologies I've learned and worked with. This list is
        constantly evolving as I continue to learn and grow as a developer.
      </p>
      <div className="text-gray-400 my-3 text-sm">&lt; LANGUAGE /&gt;</div>
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-7 items-center">
        <button className="p-2 font-[Quicksand] text-xs bg-gray-900 rounded-xl text-[white] border border-transparent transition duration-500 hover:border-red-400">
          <div className="flex items-center gap-1">
            <img src={jsIcon} className="h-4 w-4" alt="" />
            Javascript
          </div>
        </button>
        <button className="p-2 font-[Quicksand] text-xs bg-gray-900 rounded-xl text-[white] border border-transparent transition duration-500 hover:border-red-400">
          <div className="flex items-center gap-1">
            <img src={htmlIcon} className="h-4 w-4" alt="" />
            Html
          </div>
        </button>
        <button className="p-2 font-[Quicksand] text-xs bg-gray-900 rounded-xl text-[white] border border-transparent transition duration-500 hover:border-red-400">
          <div className="flex items-center gap-1">
            <img src={cssIcon} className="h-4 w-4" alt="" />
            CSS
          </div>
        </button>
        <button className="p-2 font-[Quicksand] text-xs bg-gray-900 rounded-xl text-[white] border border-transparent transition duration-500 hover:border-red-400">
          <div className="flex items-center gap-1">
            <img src={cIcon} className="h-4 w-4" alt="" />C
          </div>
        </button>
        <button className="p-2 font-[Quicksand] text-xs bg-gray-900 rounded-xl text-[white] border border-transparent transition duration-500 hover:border-red-400">
          <div className="flex items-center gap-1">
            <img src={javaIcon} className="h-4 w-4" alt="" />
            JAVA
          </div>
        </button>
      </div>
      <div className="text-gray-400 my-3 text-sm">
        &lt; FRAMEWORK / LIBRARIES /&gt;
      </div>
      <div className="flex flex-wrap mb-7 items-center gap-2 sm:gap-3">
        <button className="p-2 font-[Quicksand] text-xs bg-gray-900 rounded-xl text-[white] border border-transparent transition duration-500 hover:border-red-400">
          <div className="flex items-center gap-1">
            <img src={reactIcon} className="h-4 w-4" alt="" />
            React
          </div>
        </button>
        <button className="p-2 font-[Quicksand] text-xs bg-gray-900 rounded-xl text-[white] border border-transparent transition duration-500 hover:border-red-400">
          <div className="flex items-center gap-1">
            <img
              src={tailwindIcon}
              className="h-4 w-4"
              alt=""
            />
            Tailwind CSS
          </div>
        </button>
      </div>

      <div className="text-gray-400 my-3 text-sm">
        &lt; BACKEND / RUNTIME /&gt;
      </div>
      <div className="flex flex-wrap mb-7 gap-2 sm:gap-3 items-center">
        <button className="p-2 font-[Quicksand] text-xs bg-gray-900 rounded-xl text-[white] border border-transparent transition duration-500 hover:border-red-400">
          <div className="flex items-center gap-1">
            <img src={nodeIcon} className="h-4 w-4" alt="" />
            NodeJS
          </div>
        </button>
      </div>

      <div className="text-gray-400 my-3 text-sm">&lt; DATABASE /&gt;</div>
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-7 items-center">
        <button className="p-2 font-[Quicksand] text-xs bg-gray-900 rounded-xl text-[white] border border-transparent transition duration-500 hover:border-red-400">
          <div className="flex items-center gap-1">
            <img src={mongoIcon} className="h-4 w-4" alt="" />
            MongoDB
          </div>
        </button>
      </div>
      <div className="text-gray-400 my-3 text-sm">
        &lt; DEVELOPER TOOLS /&gt;
      </div>
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 items-center">
        <button className="p-2 font-[Quicksand] text-xs bg-gray-900 rounded-xl text-[white] border border-transparent transition duration-500 hover:border-red-400">
          <div className="flex items-center gap-1">
            <img src={gitIcon} className="h-4 w-4" alt="" />
            Git
          </div>
        </button>
        <button className="p-2 font-[Quicksand] text-xs bg-gray-900 rounded-xl text-[white] border border-transparent transition duration-500 hover:border-red-400">
          <div className="flex items-center gap-1">
            <img src={githubIcon} className="h-4 w-4" alt="" />
            GitHub
          </div>
        </button>
        <button className="p-2 font-[Quicksand] text-xs bg-gray-900 rounded-xl text-[white] border border-transparent transition duration-500 hover:border-red-400">
          <div className="flex items-center gap-1">
            <img src={vsIcon} className="h-4 w-4" alt="" />
            VS Code
          </div>
        </button>
      </div>
    </div>
  );
}

export default Skills;
