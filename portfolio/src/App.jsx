import Aboutme from "./components/Aboutme";
import Footer from "./components/Footer";
import Forms from "./components/Forms";
import Projects from "./components/projects";
import Skills from "./components/Skills";
import Timeline from "./components/timeline";
import { FaChevronDown } from 'react-icons/fa';


export default function App() {
  return (

<div class="relative">
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-black">
        <Aboutme />
        <Footer />
        <FaChevronDown className="text-white h-6 w-6 animate-bounce" />

    </div>
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-black text-white">
        <Skills />
        <Projects />
        <Footer />
    </div>
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-black text-white pt-10">
        <Timeline />
        <Footer />
    </div>
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-black text-white">
        <Forms />
        <Footer />
    </div>
</div>

  );
}
