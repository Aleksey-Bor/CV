import React from "react";
import styleApp from "../../App.module.css";
import styleBusinessCard from "./BusinessCard.module.css";
import avatar from "../../assets/images/avatar.jpg";
import arrow from "../../assets/icons/arrow-button.svg";
import { useState } from "react";

let BusinessCard = () => {
  const [hidden, setHidden] = useState(false);
  let isHidden = hidden; // This assignment is done just to get rid of the warning in the console, which isHidden is not used anywhere

  return (
    <div>
      <div className={styleBusinessCard.contactBlockWrapper}>
        <div>
          <h1 className={styleApp.name}>aliaksei barkouski</h1>
          <div className={styleBusinessCard.contacts}>
            <p className={styleApp.bold}>
              Phone: <a href="tel:+375291471834">+37529 147-18-34</a>
            </p>
            <p className={styleApp.bold}>
              Email: <a href="mailto:aborki@gmail.com">aborki@gmail.com</a>
            </p>
            <p className={styleApp.bold}>
              Skype: <a href="skype:live:aborki_1">live:aborki_1</a>
            </p>
            <p className={styleApp.bold}>
              Linkedin:{" "}
              <a href="linkedin.com/in/aliaksei-barkouski-4972b2ba">Link to Linkedin</a>
            </p>
          </div>
        </div>
        <div className={styleBusinessCard.avatarBlock}>
          <img
            className={styleApp.avatar}
            src={avatar}
            alt="Aliaksey Barkouski"
          />
        </div>
      </div>
      <div>
        <div className={styleApp.header}>Objective</div>
        <div className={styleApp.contentShow}>
          Applying for a React Developer Position
        </div>
      </div>
      <div>
        <div className={styleApp.header}>
          Summary
          <button
            className={styleApp.button}
            onClick={() => setHidden(!hidden)}
          >
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
        <div
          className={isHidden ? styleApp.contentShow : styleApp.contentHidden}
        >
          I am persistent. I love to improve my efficiency and functionality. I
          appreciate it when a scientific approach is at the heart of every
          case.
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
