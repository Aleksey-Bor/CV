import React from "react";
import styleApp from "../../App.module.css";
// import styleBusinessCard from "./BusinessCard.module.css";
// import avatar from "../../assets/images/avatar.jpg";
import arrow from "../../assets/icons/arrow-button.svg";
import { useState } from "react";

let WorkExperience = () => {
  const [hidden, setHidden] = useState(false);
  let isHidden = hidden; // This assignment is done just to get rid of the warning in the console, which isHidden is not used anywhere

  return (
    <div>
      <div className={styleApp.header}>
        Work experience
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
          May 2021 – today: I am independently working on a training project{" "}
          <a
            href="https://aleksey-bor.github.io/social_network/#/login"
            target="_blank"
            rel="noreferrer"
          >
            Social Network
          </a>
        </p>
        <div className={styleApp.italic}>
          You can test the service:
          <ul className={styleApp.ulNoMarginTop}>
            <li>
              <span className={styleApp.underlined}>Login</span>{" "}
              <span className={styleApp.different}>: free@samuraijs.com</span>
            </li>
            <li>
              <span className={styleApp.underlined}>Password</span>
              <span className={styleApp.different}>: free</span>
            </li>
          </ul>
        </div>
        <p className={styleApp.bold}>
          February 2020: I have developed a portfolio site for photo retouchers{" "}
          <a
            href="https://aleksey-bor.github.io/retoart/"
            target="_blank"
            rel="noreferrer"
          >
            RETOART
          </a>
          .<br />
          <span className={styleApp.normal}>
            This is my first experience with Front-end development.
          </span>
        </p>
        <p className={styleApp.bold}>
          2007 – 2021: Individual entrepreneur.
          <br />
          <span className={styleApp.normal}>
            I worked under a commission agreement
          </span>
        </p>
        <div className={styleApp.italic}>
          Kind of activity:
          <ul className={styleApp.ulNoMarginTop}>
            <li>trading agent</li>
            <li>supervisor of the trading team</li>
          </ul>
        </div>
        <p className={styleApp.bold}>
          2007-2009: Vladprodimport - distribution, wholesale
        </p>
        <div className={styleApp.italic}>
          Position:
          <ul className={styleApp.ulNoMarginTop}>
            <li>trading agent</li>
            <li>supervisor of the trading team</li>
          </ul>
        </div>
        <p className={styleApp.bold}>
          2000 – 2007: Educator-psychologist, Smorgon Social and Pedagogical
          Center
        </p>
      </div>
    </div>
  );
};

export default WorkExperience;
