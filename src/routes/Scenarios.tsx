import './styles/Scenarios.css';
import { useParams } from "react-router";
import ScenarioCard from "../components/ScenarioCard.tsx"; // Assurez-vous que ce composant existe
import JsonScenarios from '../assets/Scenarii_SatURN.json'; // Importation du fichier JSON

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
                        url={scenario.url} // Utilisation de l'URL pour rediriger
                    />
                ))}
            </div>
        </div>
    );
}

export default Scenarios;
