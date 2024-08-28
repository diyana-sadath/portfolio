import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"
const About = () => {
  return (
    <div className="border-b border-pink-600 pb-10">
        <h1 className="mt-10 py-5 text-center text-4xl">
        About
        <span className="text-pink-400"> Me</span>
        </h1>
        <div className="flex flex-wrap">
            <div className="w-full">
                    <div className="flex justify-center items-center lg:items-center">
                        <p className="text-center mx-auto max-w-xl py-6">{ABOUT_TEXT}</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default About