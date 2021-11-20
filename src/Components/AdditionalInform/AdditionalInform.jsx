import React from "react";
import styleApp from "../../App.module.css";
import arrow from "../../assets/icons/arrow-button.svg";
import { useState } from "react";

let AdditionalInform = () => {
  const [hidden, setHidden] = useState(false);
  let isHidden = hidden; // This assignment is done just to get rid of the warning in the console, which isHidden is not used anywhere

  return (
    <div>
      <div className={styleApp.header}>
        Additional Information
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
          Portfolio:{" "}
          <a
            href="https://github.com/Aleksey-Bor"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/Aleksey-Bor
          </a>
        </p>
        <div className={styleApp.bold}>
          Professional interests:{" "}
          <ul className={styleApp.ulNoMarginTop}>
            <li className={styleApp.normal}>YouTube: IT-KAMASUTRA</li>
            <li className={styleApp.normal}>
              YouTube: Front-end Science with Sergey Puzankov and other channel
            </li>
            <li className={styleApp.normal}>Dev.by</li>
            <li className={styleApp.normal}>it-academy.by and other</li>
          </ul>
        </div>
        <p>
          <span className={styleApp.bold}>Military obligation status: </span>
          <span className={styleApp.normal}>
            I completed my compulsory military service in 2001-2002
          </span>
        </p>
      </div>
    </div>
  );
};

export default AdditionalInform;
