import { FaHtml5, FaCss3Alt, FaReact, FaJava } from "react-icons/fa";
import { SiPython, SiTailwindcss, SiC } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-pink-600 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* Python */}
        <div className="rounded-2xl border-4 border-pink-200 p-4">
          <SiPython className="text-7xl text-yellow-500" />
        </div>
        {/* CSS */}
        <div className="rounded-2xl border-4 border-pink-200 p-4">
          <FaCss3Alt className="text-7xl text-blue-500" />
        </div>
        {/* HTML */}
        <div className="rounded-2xl border-4 border-pink-200 p-4">
          <FaHtml5 className="text-7xl text-orange-500" />
        </div>
        {/* React */}
        <div className="rounded-2xl border-4 border-pink-200 p-4">
          <FaReact className="text-7xl text-cyan-400" />
        </div>
        {/* Java */}
        <div className="rounded-2xl border-4 border-pink-200 p-4">
          <FaJava className="text-7xl text-red-600" />
        </div>
        {/* C */}
        <div className="rounded-2xl border-4 border-pink-200 p-4">
          <SiC className="text-7xl text-blue-600" />
        </div>
        {/* TailwindCSS */}
        <div className="rounded-2xl border-4 border-pink-200 p-4">
          <SiTailwindcss className="text-7xl text-teal-500" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
