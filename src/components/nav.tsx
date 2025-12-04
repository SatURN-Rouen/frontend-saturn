import "./styles/nav.css";

function Nav() {
    return (
        <nav className="nav">
            <div id={"left"}>
                <a href={"/"}>
                    <img alt={"Logo"} src={"https://nird.forge.apps.education.fr/img/logo+text206px.png"}/>
                </a>
                <div id={"linksBar"}>
                    <a href={"/scenarios"}>Scenarios</a>
                    <a href={"https://nird.forge.apps.education.fr/"}>Notre site</a>
                    <a href={"/contact"}>Nous contacter</a>
                    <a href={"/admin"}>Connexion</a>
                </div>
            </div>
            <div id={"right"}>
                <div></div>
                <div>
                    <img src="https://img.icons8.com/fluency/48/bard.png" alt="AI"/>
                    <input type={"text"} placeholder={"Avez-vous une idée en tête ? Une question ?"}/>
                </div>
            </div>
        </nav>
    );
}

export default Nav;