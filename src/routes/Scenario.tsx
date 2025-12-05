import ResponseChoiceProps from "../components/responseChoice.tsx";
import NextButton  from "../components/nextButton.tsx";

import "./styles/Scenario.css";

interface ScenarioProps {
  descriptions?: string[];
  numberPage?: number;
  numberActive?: number;
  nextButton ?: boolean;
  titre : string;
  question : string;
};

function Scneario({numberPage : number = 6, numberActive = 2, nextButton = false, descriptions = [], titre, question}: ScenarioProps) {
  return (
    <div className="container-scenario">
      <div className="group-scenario">
      <div className="left-scenario">
        <div className="scenario-content">
          <img src="/back.png" className="scenario-image" alt="Keyboard" />
          <div className="text-scenario">
            <h3>{titre}</h3>
            <div className="scenario-icons">
              <img src="/Share.svg" alt="Share" className="button-img"
                onClick={
                  () => {
                  }
                }
              />
              <img 
                src="/Copy.svg" 
                alt="Copy" 
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                }}
                className="button-img"
              />
            </div>
          </div>
          <div className="scenario-description">
            {
              descriptions?.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))
            }
          </div>
        </div>
      </div>
      
      <div className="right-scenario">
        <div className="question-scenario">
          <h1>{question}</h1>
          <h2>Choisissez une réponse</h2>
        </div>
        
        <ResponseChoiceProps question={[
          "Réponse 1: Lorem ipsum dolor sit amet, incididunt proident pariatur velit et eiusmod anim nostrud.",
          "Réponse 2: Lorem ipsum dolor sit amet, incididunt proident pariatur velit et eiusmod anim nostrud.",
          "Réponse 3: Lorem ipsum dolor sit amet, incididunt proident pariatur velit et eiusmod anim nostrud.",
        ]} />

        {nextButton && <NextButton />}
        
      </div>

    </div>
        <div className="carousel-dots">
        {
          Array.from({ length: number }).map((_, index) => (
            <span
              key={index}
              className={`dot ${index === numberActive ? 'active' : ''}`}
            ></span>
          ))
        }
      </div>
    </div>
  )
}

export default Scneario;
