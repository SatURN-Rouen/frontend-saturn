import './styles/Scenarios.css'
import {useParams} from "react-router";
import ScenarioCard from "../components/ScenarioCard.tsx";
import JsonScenarios from "../assets/Scenarii_SatURN.json"


function Scenarios() {

    const $params = useParams();
    console.log($params.profile)

    const content = Array.from(JsonScenarios, (c) => (
        <ScenarioCard img={c.img} title={c.title} url={c.url} />
    ));

    return (
        <div id={"Scenarios"}>
            <h1>J'ai un problème</h1>
            <div className={"scenarios"}>
                {content}
            </div>
        </div>
    )
}

export default Scenarios
