import './styles/Home.css'
import ProfileCard from "../components/ProfileCard.tsx";

function Home() {

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
                <ProfileCard img="/profiles/case4.png" name="Un harang" url="/individual"/>
                <ProfileCard img="/profiles/case3.png" name="Un harang" url="/collective"/>
                <ProfileCard img="/profiles/case2.png" name="Un harang" url="/boss"/>
                <ProfileCard img="/profiles/case1.png" name="Un harang" url="/student"/>
            </div>
        </div>
    )
}

export default Home
