import React from "react";
import styleApp from "./App.module.css";
import AdditionalInform from "./Components/AdditionalInform/AdditionalInform";
import BusinessCard from "./Components/BusinessCard/BusinessCard";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import WorkExperience from "./Components/WorkExperience/WorkExperience";

function App() {
  return (
    <div className={styleApp.appWrapper}>
      <BusinessCard />
      <Skills />
      <WorkExperience />
      <Education />
      <AdditionalInform />
      <Projects />
    </div>
  );
}

export default App;
