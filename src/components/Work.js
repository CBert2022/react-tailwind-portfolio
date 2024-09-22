import React from "react";
import { data } from "../data/data";
import screenshot from "../assets/projects/weather.png";

const Work = ({ language }) => {
  const project = data;

  return (
    <div
      name="work"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f] flex justify-center items-center"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            {language ? "Referenzen" : "Work"}
          </p>
          <p className="py-6 text-xl">
            {language
              ? "Schau Dir einige meiner letzten Projekte an:"
              : "Check out some of my recent projects:"}
          </p>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="flex justify-center items-start w-[300px] h-[550px] border-4 border-gray-400 rounded-lg overflow-y-auto">
            <img
              src={screenshot}
              alt="Screenshot der Webseite"
              className="w-full h-auto object-cover object-top"
            />
          </div>
          <div>
            <div className="text-3xl font-bold mb-2 text-pink-600">
              React Weather App
            </div>{" "}
            {language ? (
              <p className="text-xl">
                Eine benutzerfreundliche Wetter-App, die es Nutzern ermöglicht,
                den Namen einer Stadt einzugeben und umfassende Wetterdaten
                abzurufen. <br />
                Technologien: Entwickelt mit ReactJS, Axios und der API von
                OpenWeather.
                <ul className="list">
                  <li>
                    <p>
                      {" "}
                      Aktuelle Wetterinformationen basierend auf der Geolokation
                      des Nutzers
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      Detaillierte Wettervorhersagen in 3-Stunden-Intervallen
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      5-Tage-Vorhersage für die eingegebene Stadt oder die
                      aktuelle Geolokation
                    </p>
                  </li>
                  <li>
                    <p>Möglichkeit zur Stadtsuche</p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      Angaben zu Temperatur, Luftfeuchtigkeit,
                      Windgeschwindigkeit und passende Wetter-Icons
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      Dynamische Anpassung von Hintergrund und Icons je nach
                      Tages- oder Nachtzeit, basierend auf den
                      Sonnenaufgangsdaten.
                    </p>
                  </li>
                </ul>
              </p>
            ) : (
              <p className="text-xl">
                A user-friendly weather app that allows users to enter the name
                of a city and retrieve comprehensive weather data.
                <br />
                Technologies: Developed with ReactJS, Axios, and the OpenWeather
                API.
                <ul className="list">
                  <li>
                    <p>
                      {" "}
                      Current weather information based on the user's
                      geolocation
                    </p>
                  </li>
                  <li>
                    <p>Detailed weather forecasts in 3-hour intervals</p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      5-day forecast for the entered city or the current
                      geolocation
                    </p>
                  </li>
                  <li>
                    <p>Ability to search for cities</p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      Information on temperature, humidity, wind speed, and
                      corresponding weather icons
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      Dynamic adjustment of the background and icons based on
                      day or night, based on sunrise data.
                    </p>
                  </li>
                </ul>
              </p>
            )}
            <div className="flex justify-center items-center mt-2">
              <a
                href="https://github.com/CBert2022/react-weather-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-white group border-2 px-6 py-3 my-2 mx-2 hover:bg-pink-600 hover:border-pink-600">
                  Code
                </button>
              </a>
              <a
                href="https://cbert2022.github.io/react-weather-app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-white group border-2 px-6 py-3 my-2 mx-2 hover:bg-pink-600 hover:border-pink-600">
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
