import React from "react";
import styleApp from "../../App.module.css";
import arrow from "../../assets/icons/arrow-button.svg";
import { useState } from "react";

let Projects = () => {
  const [hidden, setHidden] = useState(false);
  let isHidden = hidden; // This assignment is done just to get rid of the warning in the console, which isHidden is not used anywhere

  return (
    <div>
      <div className={styleApp.header}>
        Direct links to my projects
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
          <a
            href="https://aleksey-bor.github.io/social_network/#/login"
            target="_blank"
            rel="noreferrer"
          >
            Social Network
          </a>
        </p>
        <p className={styleApp.bold}>
          <a
            href="https://aleksey-bor.github.io/retoart/"
            target="_blank"
            rel="noreferrer"
          >
            RETOART
          </a>
        </p>
        <p>
          <a
            href="https://aleksey-bor.github.io/React_tic_tac-toe/"
            target="_blank"
            rel="noreferrer"
          >
            Tic Tac Toe
          </a>
        </p>
        <p>
          <a
            href="https://puzle15.alieksieiborko1.repl.co/"
            target="_blank"
            rel="noreferrer"
          >
            Fifteen Game
          </a>
        </p>
        <p>
          <a
            href="https://aleksey-bor.github.io/Keyboard/"
            target="_blank"
            rel="noreferrer"
          >
            Virtual Keyboard
          </a>
        </p>
        <p>
          <a
            href="https://rolling-scopes-school.github.io/aleksey-bor-JS2020Q3/calculator/"
            target="_blank"
            rel="noreferrer"
          >
            Calculator
          </a>
        </p>
        <p>
          <a
            href="https://onlinetravel.alieksieiborko1.repl.co/"
            target="_blank"
            rel="noreferrer"
          >
            Hobby project
          </a>
        </p>
      </div>
    </div>
  );
};

export default Projects;
