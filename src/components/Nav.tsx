import "./styles/Nav.css";
import {NavLink} from "react-router";

function Nav() {
    return (
        <nav className="nav">
            <div id={"left"}>
                <NavLink to={"/"}>
                    <img alt={"Logo"} src={"https://nird.forge.apps.education.fr/img/logo+text206px.png"}/>
                </NavLink>
                <div id={"linksBar"}>
                    <NavLink to={"/scenarios"}>Scenarios</NavLink>
                    <a href={"https://nird.forge.apps.education.fr/"}>Notre site</a>
                    <NavLink to={"/contact"}>Nous contacter</NavLink>
                    <NavLink to={"/admin"}>Connexion</NavLink>
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