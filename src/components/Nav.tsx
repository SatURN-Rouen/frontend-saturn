import "./styles/Nav.css";
import {NavLink, useLocation} from "react-router";

function Nav() {

    const isOnChat = useLocation().pathname.split("/").includes("chat")
    return (
        <nav className="nav">
            <div id={"left"}>
                <NavLink to={"/"}>
                    <img alt={"Logo"} src={"https://nird.forge.apps.education.fr/img/logo+text206px.png"}/>
                </NavLink>
                <div id={"linksBar"}>
                    <NavLink to={"/scenarios"}>Scenarios</NavLink>
                    <a href={"https://nird.forge.apps.education.fr/"}>Notre site</a>
                    <a href={"https://edurl.fr/tchap-demarche-nird"}>Nous contacter</a>
                    <NavLink to={"/admin"}>Connexion</NavLink>
                </div>
            </div>
            <NavLink to="/chat" id={"right"}
                     style={{visibility: isOnChat ? "hidden" : "visible", textDecoration: "none", color: "inherit"}}>
                <div></div>
                <div>
                    <img src="https://img.icons8.com/fluency/48/bard.png" alt="AI"/>
                    <p>Avez-vous une idée en tête ? Une question ?</p>
                </div>
            </NavLink>
        </nav>
    );
}

export default Nav;