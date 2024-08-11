import Aboutme from "./components/Aboutme";
import Footer from "./components/Footer";
import Projects from "./components/projects";
import Skills from "./components/Skills";
import Timeline from "./components/timeline";

export default function App() {
  return (
    <div className="dark:bg-gray-950">
      <Aboutme/>
      <Projects/>
      <Skills/>
      <Timeline/>
      <Footer/>
    </div>
  );
}
