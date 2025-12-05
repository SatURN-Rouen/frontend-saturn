import './styles/Scenarios.css'
import {useParams} from "react-router";
import ScenarioCard from "../components/ScenarioCard.tsx";


function Scenarios() {

    const $params = useParams();
    console.log($params.profile)

    return (
        <div id={"Scenarios"}>
            <h1>J'ai un problème</h1>
            <div className={"scenarios"}>
                <ScenarioCard
                    img={"https://images.unsplash.com/photo-1684127987312-43455fd95925?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGxhZ2d5JTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D"}
                    title={"“Mon PC n’est pas compatible avec Windows 11 !”"} url={"/scenarios/xxx"}/>
                <ScenarioCard
                    img={"https://images.unsplash.com/photo-1684127987312-43455fd95925?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGxhZ2d5JTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D"}
                    title={"“Mon PC n’est pas compatible avec Windows 11 !”"} url={"/scenarios/xxx"}/>
                <ScenarioCard
                    img={"https://images.unsplash.com/photo-1684127987312-43455fd95925?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGxhZ2d5JTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D"}
                    title={"“Mon PC n’est pas compatible avec Windows 11 !”"} url={"/scenarios/xxx"}/>
                <ScenarioCard
                    img={"https://images.unsplash.com/photo-1684127987312-43455fd95925?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGxhZ2d5JTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D"}
                    title={"“Mon PC n’est pas compatible avec Windows 11 !”"} url={"/scenarios/xxx"}/>
            </div>
        </div>
    )
}

export default Scenarios
