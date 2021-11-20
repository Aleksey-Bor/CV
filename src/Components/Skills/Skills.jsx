import React from "react";
import styleApp from "../../App.module.css";
import arrow from "../../assets/icons/arrow-button.svg";
import { useState } from "react";

let Skills = () => {
  const [hidden, setHidden] = useState(false);
  let isHidden = hidden; // This assignment is done just to get rid of the warning in the console, which isHidden is not used anywhere

  return (
    <div>
      <div className={styleApp.header}>
        Skills
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
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Native JS</li>
          <li>React / Redux</li>
        </ul>
        <p>
          English Proficiency:{" "}
          <a
            href="https://www.efset.org/cert/ejY1ta"
            target="_blank"
            rel="noreferrer"
          >
            A1
          </a>
        </p>
      </div>
    </div>
  );
};

export default Skills;
