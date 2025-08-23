import Header from "./Header.jsx";
import Introduction from "./Introduction.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <main className="pb-8">
        <Introduction />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;
