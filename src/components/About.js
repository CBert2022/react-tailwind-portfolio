import React from "react";

const About = ({ language }) => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-6 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              {language ? "Über mich" : "About"}
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              {language
                ? "Schön, dass Du vorbei schaust."
                : "Hi, nice to meet you. Please take a look around."}
            </p>
          </div>
          <div>
            {" "}
            {language ? (
              <p className="text-xl">
                Ich bin eine Junior Full-Stack Entwicklerin und habe gerade
                erfolgreich eine intensive 9-monatige Weiterbildung zur
                Fachkraft für Webentwicklung (IHK) abgeschlossen. <br />
                Zusätzlich bringe ich Expertise aus über 5 Jahren im digitalen
                Projektmanagement mit. <br />
                Ich habe sehr gute Kommunikations-Skills und bin ein Team
                Player.
              </p>
            ) : (
              <p className="text-xl">
                I am a Junior Full-Stack Developer and have successfully
                completed an intensive 9-month training as a Certified Web
                Developer (IHK). <br />
                In addition I contribute my 5+ years expertise as professional
                digital project manager. <br />
                Wich makes me an expert in communication and problem solving
                plus a very good team player.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
