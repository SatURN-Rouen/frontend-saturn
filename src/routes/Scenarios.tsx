import './styles/Scenarios.css'
import {useParams} from "react-router";
import ScenarioCard from "../components/ScenarioCard.tsx";
import {useEffect, useState} from "react";
import {getProfiles} from "../services/profileService.ts";


function Scenarios() {

    const $params = useParams();
    console.log($params.profile)

    const [scenarios, setScenarios] = useState<Element[]>([])


    useEffect(() => {
        const initProfiles = async () => {
            const profile = $params.profile!
            const profileService = await getProfiles()
            const scenes = (profileService.find((v) => v.name = profile)!).scenarios
            return Array.from(scenes, (e) => (
                <ScenarioCard img="/choupette.svg" title={e.title} url={`/${e.urlRootScene}`}/>
            ))
        }

        // @ts-ignore
        initProfiles().then((res) => setScenarios(res))
    }, [])

    // @ts-ignore
    return (
        <div id={"Scenarios"}>
            <h1>J'ai un problème</h1>
            <div className={"scenarios"}>
                {scenarios}
            </div>
        </div>
    )
}

export default Scenarios
