import { FaReact, FaNode, FaDatabase, FaPython, FaJava } from 'react-icons/fa'; // Import icons from react-icons
import { IoLogoJavascript,  } from 'react-icons/io5';


const skills = [
  { name: 'React', icon: <FaReact className="text-blue-500" /> },
  { name: 'Node.js', icon: <FaNode className="text-green-500" /> },
  { name: 'Python', icon: <FaPython className="text-yellow-500" /> },
  { name: 'MySQL', icon: <FaDatabase className="text-red-500" /> },
  { name: 'JavaScript', icon: <IoLogoJavascript className="text-yellow-500" /> },
  { name: 'Express.js', icon: <FaNode className="text-green-500" /> },
  { name: 'Java', icon: <FaJava className="text-red-500" /> },
    { name: 'MongoDB', icon: <FaDatabase className="text-green-500" /> },
   ,
];

export default function Skills() {
  return (
    <section className="bg-black text-white py-8 flex justify-center align-middle text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">Stacks</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex items-center space-x-4">
              <div className="text-4xl">{skill.icon}</div>
              <p className="text-xl">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
