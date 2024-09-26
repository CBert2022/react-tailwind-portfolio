import React, { useState } from "react"; //rafce import snippet
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = ({ language, handleLanguage, handleMode, lightMode }) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <p className="text-pink-600 text-4xl">CR</p>
        {/* menu */}
        {/* md:flex = anything above medium (760px) will be displayed */}
        <ul className="hidden md:flex">
          <li>
            <Link className="text-xl" to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link className="text-xl" to="about" smooth={true} duration={500}>
              {language ? "Über mich" : "About"}
            </Link>
          </li>
          <li>
            <Link className="text-xl" to="skills" smooth={true} duration={500}>
              {language ? "Kompetezen" : "Skills"}
            </Link>
          </li>
          <li>
            <Link className="text-xl" to="work" smooth={true} duration={500}>
              {language ? "Referenzen" : "Work"}
            </Link>
          </li>
          <li>
            <Link className="text-xl" to="contact" smooth={true} duration={500}>
              {language ? "Kontakt" : "Contact"}
            </Link>
          </li>
          <li>
            <button
              onClick={handleLanguage}
              className="text-xl"
              smooth={true}
              duration={500}
            >
              {language ? "en" : "de"}
            </button>
          </li>
          {/* <li>
                    <img onClick={handleMode} src={LigthModeImg} alt="pink sun" className='h-6 w-6'/>
                </li> */}
        </ul>

        {/* hamburger menu */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* mobil menu */}
        {/* absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
          <li>
            <button
              onClick={handleLanguage}
              className="py-6 text-4xl"
              smooth={true}
              duration={500}
            >
              {language ? "en" : "de"}
            </button>
          </li>
        </ul>

        {/* social icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0891B2]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://www.linkedin.com/in/carolin-rieche/"
              >
                LinkedIn <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://github.com/CBert2022"
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#047857]'>
                            <a className='flex justify-between items-center w-full text-gray-300' href="#" onClick={openPDF}>
                                CV <FaListAlt size={30} />
                            </a>
                        </li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
