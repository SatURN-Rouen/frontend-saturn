interface ResponseChoiceProps {
  question : string[];
};

const ColorOptions = [{bck:"#2C1330", text: "#D054C9"}, {bck:"#3C300F", text: "#D3AC45"}, {bck:"#132B43", text: "#4C94DB"}];

function ResponseChoice({question} : ResponseChoiceProps) {
  return (
    <div className="options-container">
      {
        question.map((q, index) => (
          <div className="option-card" key={index} style={{backgroundColor: ColorOptions[index % ColorOptions.length].bck, color: ColorOptions[index % ColorOptions.length].text}}>
            <span className="option-number" style={{color: ColorOptions[index % ColorOptions.length].text}}>{index + 1}.</span>
            <p>{q}</p>
          </div>
        ))
      }
    </div>
  );
}

export default ResponseChoice;