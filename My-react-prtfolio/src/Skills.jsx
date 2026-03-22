function Skills() {
  const categories = [
    {
      title: "Languages",
      skills: [
        { name: "C", slug: "c" },
        { name: "C++", slug: "cplusplus" },
        { name: "JavaScript", slug: "javascript" },
        { name: "TypeScript", slug: "typescript" },
        { name: "Python", slug: "python" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", slug: "html5" },
        { name: "CSS3", slug: "css3", fallback: "https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&logoColor=white" },
        { name: "Bootstrap", slug: "bootstrap" },
        { name: "TailwindCSS", slug: "tailwindcss" },
        { name: "React", slug: "react" },
        { name: "Redux", slug: "redux" },
        { name: "Next JS", slug: "nextdotjs" },
        { name: "Three js", slug: "three.js" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "NodeJS", slug: "nodedotjs" },
        { name: "Express.js", slug: "express" },
        { name: "EJS", slug: "ejs" },
        { name: "JWT", slug: "jsonwebtokens" },
        { name: "Socket.io", slug: "socketdotio" },
        { name: "Nodemon", slug: "nodemon" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", slug: "mysql" },
        { name: "Postgres", slug: "postgresql" },
        { name: "MongoDB", slug: "mongodb" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", slug: "git" },
        { name: "GitHub Actions", slug: "githubactions" },
        { name: "NPM", slug: "npm" },
        { name: "PNPM", slug: "pnpm" },
        { name: "Postman", slug: "postman" },
        { name: "Figma", slug: "figma" },
        { name: "Canva", slug: "canva", fallback: "https://img.shields.io/badge/-Canva-00C4CC?style=flat&logo=canva&logoColor=white" },
        { name: "Notion", slug: "notion" },
      ],
    },
    {
      title: "Deployment",
      skills: [
        { name: "Vercel", slug: "vercel" },
        { name: "Netlify", slug: "netlify" },
        { name: "Render", slug: "render" },
        { name: "Windows Terminal", slug: "windowsterminal", fallback: "https://img.shields.io/badge/-Terminal-4D4D4D?style=flat&logo=windows-terminal&logoColor=white" },
      ],
    },
    {
      title: "Data & Analytics",
      skills: [
        { name: "NumPy", slug: "numpy" },
        { name: "Pandas", slug: "pandas" },
        { name: "Chart.js", slug: "chartdotjs" },
      ],
    },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-8 md:px-12">
      <div className="mt-5 border-t border-gray-700 font-[Quicksand] text-[#fafafa] flex flex-col sm:flex-row gap-2 sm:gap-3">
        <h1 className="my-3 font-[doto] font-bold tracking-wider text-[22px] sm:text-[26px] leading-7 sm:leading-8 text-[#fafafa]">
          Skills
        </h1>
        <div className="my-0 sm:my-3 text-gray-500 text-sm flex items-baseline">
          Tech Stack
        </div>
      </div>
      <p className="text-gray-400 font-[Quicksand] text-sm mb-6">
        These are the technologies I've learned and worked with. This list is
        constantly evolving as I continue to learn and grow as a developer.
      </p>

      {categories.map((category) => (
        <div key={category.title} className="mb-8">
          <div className="text-gray-400 my-3 text-sm font-mono">&lt; {category.title.toUpperCase()} /&gt;</div>
          <div className="flex flex-wrap gap-2 sm:gap-3 items-center">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="group flex items-center gap-2 p-2 bg-gray-900 rounded-xl border border-transparent transition-all duration-300 hover:border-red-400 hover:scale-105"
              >
                <img
                  src={`https://cdn.simpleicons.org/${skill.slug}`}
                  alt={skill.name}
                  className="h-5 w-5 opacity-90 group-hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    if (skill.fallback) {
                      e.target.src = skill.fallback;
                    } else if (!e.target.src.includes('/ffffff')) {
                      e.target.src = e.target.src + '/ffffff';
                    } else {
                      e.target.src = 'https://cdn.simpleicons.org/code/ffffff';
                    }
                  }}
                />
                <span className="text-xs text-gray-400 group-hover:text-white transition-colors">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
