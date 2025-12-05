import "./styles/Scenario.css";

interface ScenarioProps {
  numberPage?: number;
  numberActive?: number;
};

function Scneario({numberPage : number = 6, numberActive = 2}: ScenarioProps) {
  return (
    <div className="container-scenario">
      <div className="group-scenario">
      <div className="left-scenario">
        <div className="scenario-content">
          <img src="./back.png" className="scenario-image" alt="Keyboard" />
          <div className="text-scenario">
            <h3>"Mon PC n'est pas compatible avec Windows 11 !"</h3>
            <div className="scenario-icons">
              <img src="./Share.svg" alt="Share" />
              <img src="./Copy.svg" alt="Copy" />
            </div>
          </div>
          <div className="scenario-description">
            <p>Lorem ipsum dolor sit amet, incididunt proident pariatur velit et eiusmod anim nostrud. Cupidatat ipsum nulla id. Est adipiscing nulla velit nulla aliquip. Laboris id dolore cillum. Ipsum cupidatat irure duis ex sed. Consequat proident aute eu. Incididunt dolore reprehenderit sed velit, eu anim lorem excepteur incididunt. Nisi sit ea minim. Ex laborum sit ad aliquip consequat, consectetur veniam magna pariatur esse veniam officia.</p>
            <p>Non magna aliquip ullamco ut, et laborum id sint nulla. Magna esse consequat ad. Irure esse exercitation cupidatat id proident esse cupidatat. Deserunt lorem nulla culpa proident ex id. Consequat quis eu non, nisi mollit irure fugiat incididunt mollit. In commodo sed in veniam enim duis. Lorem laboris quis sint. Dolore in incididunt aliqua.</p>
          </div>
        </div>
      </div>
      
      <div className="right-scenario">
        <div className="question-scenario">
          <h1>Que feriez-vous ?</h1>
          <h2>Choisissez une réponse</h2>
        </div>
        
        <div className="options-container">
          <div className="option-card">
            <span className="option-number">1.</span>
            <p>Je jette mon ancien PC et en rachette un nouveau</p>
          </div>
          
          <div className="option-card">
            <span className="option-number">2.</span>
            <p>Je trouve un PC sur un service de seconde main</p>
          </div>
          
          <div className="option-card">
            <span className="option-number">3.</span>
            <p>Je garde mon ancien PC et installe un autre OS</p>
          </div>
        </div>
        
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
