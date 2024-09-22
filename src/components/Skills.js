import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css-1.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Mongo from "../assets/mongo.png";
import Node from "../assets/node.png";
import Php from "../assets/php.png";
import MySQL from "../assets/mysql.png";
import Wp from "../assets/wp.png";

const Skills = ({ language }) => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            {" "}
            {language ? "Kompetenzen" : "Skills"}
          </p>
          <p className="py-4 text-xl">
            {language
              ? "Hier sind einige Technologien mit denen ich gern arbeite:"
              : "Here are some technologies I like to work with:"}
          </p>
        </div>
        {/* icon container change grid from 3 to for when usen uncommented code*/}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="Node icon" />
            <p className="my-4">Node JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="MongoDB icon" />
            <p className="my-4">Mongo DB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Php} alt="Shopify icon" />
            <p className="my-4">PHP</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto sql" src={MySQL} alt="GitHub icon" />
            <p className="my-4">MySQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Wp} alt="GitHub icon" />
            <p className="my-4">Worpress</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
