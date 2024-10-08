import { FaInstagram, FaGithub,FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import logo from "../assets/kevinRushLogo.png"
const Navbar = () => {
    return (
      <nav className=" mb-10 flex items-center justify-between py-4">
        <div className="flex flex-shrink-0 items-center">
          <img className='mx-5 w-10' src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <FaLinkedin />
          <FaGithub />
          <FaInstagram />
          <FaSquareXTwitter />
        </div>
     </nav>
    );
  };
  
  export default Navbar;
  