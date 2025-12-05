import './styles/Scenarios.css';
import { useParams } from "react-router";
import ScenarioCard from "../components/ScenarioCard.tsx"; 
import JsonScenarios from '../assets/Scenarii_SatURN.json'; 

function Scenarios() {
    const $params = useParams();
    console.log($params.profile);

    return (
        <div id={"Scenarios"}>
            <h1>Choisir un scénario</h1>
            <div className={"scenarios"}>
                {JsonScenarios.map((scenario, index) => (
                    <ScenarioCard
                        key={index}
                        img={scenario.img}
                        title={scenario.title}
                        url={scenario.url} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Scenarios;
