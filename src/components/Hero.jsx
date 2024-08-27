import profilePic from "../assets/pic1a.jpg"
import {HERO_CONTENT} from "../constants"
const Hero = () => {
  return (
    <div className="border-b border-pink-950 pb-4 lg:mb-35 mt-50">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
                        Diyana Sadath
                    </h1>
                    <span className="bg-gradient-to-r from-pink-400 to-pink-900 bg-clip-text text-4xl tracking-tight text-transparent">
                    Full Stack Developer
                    </span>
                    <p className="my-2 max-w-xl py-6 front-light tracking-tighter">
                        {HERO_CONTENT}
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-10 mb-20">
                <div className="flex justify-between">
                    <img src={profilePic} alt="Diyana Sadath" className="w-full h-auto rounded-lg"/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero;