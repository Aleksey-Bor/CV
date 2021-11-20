import React from "react";
import styleApp from "../../App.module.css";
import arrow from "../../assets/icons/arrow-button.svg";
import { useState } from "react";

let Education = () => {
  const [hidden, setHidden] = useState(false);
  let isHidden = hidden; // This assignment is done just to get rid of the warning in the console, which isHidden is not used anywhere

  return (
    <div>
      <div className={styleApp.header}>
        Education
        <button className={styleApp.button} onClick={() => setHidden(!hidden)}>
          <img
            className={
              isHidden
                ? styleApp.arrowButtonToClose
                : styleApp.arrowButtonToOpen
            }
            src={arrow}
            alt="hide / show"
          />
        </button>
      </div>
      <div className={isHidden ? styleApp.contentShow : styleApp.contentHidden}>
        <p className={styleApp.bold}>
          April 2020 - November 2021: Studied Java Script and React on my own{" "}
        </p>
        <div>
          Used sources:
          <ul className={styleApp.ulNoMarginTop}>
            <li className={styleApp.bold}>
              YouTube course:{" "}
              <a
                href="https://youtube.com/playlist?list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8"
                target="_blank"
                rel="noreferrer"
              >
                ReactJS - The Samurai Way
              </a>
            </li>
            <li className={styleApp.bold}>
              <a
                href="https://learn-reactjs.ru/tutorial"
                target="_blank"
                rel="noreferrer"
              >
                Learn ReactJS Tutorial
              </a>
            </li>
            <li className={styleApp.bold}>
              Online school materials Rolling Scopes
            </li>
            <li className={styleApp.bold}>
              <a
                href="https://learn.javascript.ru/"
                target="_blank"
                rel="noreferrer"
              >
                The Modern JavaScript Tutorial
              </a>
            </li>
            <li className={styleApp.bold}>And other</li>
          </ul>
        </div>
        <p className={styleApp.bold}>
          2021: I study English on my own with YouTube Courses
        </p>
        <p className={styleApp.bold}>
          August 2019 - March 2020: Studied, Educational Center for Programming
          and High Tech (IT-Academy)
        </p>
        <div>
          Courses:
          <ul className={styleApp.ulNoMarginTop}>
            <li className={styleApp.bold}>
              Website development using HTML, CSS and JS
            </li>
            <li className={styleApp.bold}>
              Development of web applications on Java script
            </li>
          </ul>
        </div>
        <p className={styleApp.bold}>
          2000: Graduated from the Belarusian State Pedagogical University
        </p>
        <div className={styleApp.normal}>
          <span>Faculty: Natural Science</span>
          <br />
          <span>
            Specialty: Teacher of biology and psychologist in educational
            institutions
          </span>
        </div>
      </div>
    </div>
  );
};

export default Education;
