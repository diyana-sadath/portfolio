import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/technologies";
import Projects from "./components/Projects"

const App = () => {
  return (
    <div className="overflow-x-hidden text-pink-900 antialiased selection:bg-pink-800 selection:text-neutral-200">
        <div className="fixed top-0 -z-10 h-full w-full"> 
        <div class="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
        </div> 
        <div className="container mx-auto px-8"> 
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          {/*<Experience />*/}
          <Projects />
        </div>
    </div> 
  );
};

export default App;
