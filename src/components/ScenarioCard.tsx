import './styles/ScenarioCard.css'
import {NavLink} from "react-router";

export interface ScenarioCardProps {
    img: string
    title: string
    url: string
}


function ScenarioCard(e: ScenarioCardProps) {

    return (
        <NavLink to={e.url} style={{textDecoration: "none"}}>
            <div className={"ScenarioCard"} style={{background: `url(${e.img}) lightgray 50% / cover no-repeat`}}>
                <h1>{e.title}</h1>
            </div>
        </NavLink>
    )
}

export default ScenarioCard
