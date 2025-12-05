import "./styles/Scenario.css";

export interface ScenarioProps {
    descriptions?: string[];
    numberPage?: number;
    numberActive?: number;
    nextButton?: boolean;
    titre: string;
    question: string;
}

function Scenario() {
    const descriptions = ["awa"]

    return (
        <div className="container-scenario">
            {
                descriptions?.map((desc, index) => (
                    <p key={index}>{desc}</p>
                ))
            }
        </div>
    )
}

export default Scenario;
