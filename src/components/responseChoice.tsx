interface ResponseChoiceProps {
  question : string[];
};

function ResponseChoice({question} : ResponseChoiceProps) {
  return (
    <div className="options-container">
      {
        question.map((q, index) => (
          <div className="option-card" key={index}>
            <span className="option-number">{index + 1}.</span>
            <p>{q}</p>
          </div>
        ))
      }
    </div>
  );
}

export default ResponseChoice;