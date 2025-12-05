import './styles/Home.css'
import ProfileCard from "../components/ProfileCard.tsx";
import {getProfiles} from "../services/profileService.ts";
import {useEffect, useState} from "react";

function Home() {

    /*const [profiles, setProfiles] = useState([])


    useEffect(() => {
        const initProfiles = async () => {
            const profileService = await getProfiles()
            return Array.from(profileService, (e) => (
                <ProfileCard img={e.image.path} name={e.name} url={`/${e.name}`}/>
            ))
        }

        // @ts-ignore
        initProfiles().then((res) => setProfiles(res))
    }, [])*/

    return (
        <div id={"Home"}>
            <div className={"title"}>
                <h1>
                    Je suis...
                </h1>
                <p>Des solutions sot disponibles pour tous et toutes. Dites-nous qui vous êtes, et nous pourrons vous
                    aider.</p>
            </div>
            <div className={"profiles"}>
                <ProfileCard img={"/etudiant.png"} name={"Étudiant·e"} url={"/etudiant"}/>
                <ProfileCard img={"/collectivite.png"} name={"une collectivité"} url={"/collective"}/>
                <ProfileCard img={"/particulier.png"} name={"Particulier"} url={"/particulier"}/>
                <ProfileCard img={"/patron.png"} name={"Patron"} url={"/boss"}/>
            </div>
        </div>
    )
}

export default Home
