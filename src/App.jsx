import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import './app.scss';



function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

    </div>
  );
}

export default App;
