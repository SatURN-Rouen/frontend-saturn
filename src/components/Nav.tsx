import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";  // Utilisation de useNavigate pour la redirection
import { Button } from "@mui/material";
import "./styles/Nav.css";

function Nav() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnChat = useLocation().pathname.split("/").includes("chat");
    const navigate = useNavigate();  // Hook pour la navigation

    useEffect(() => {
        // Vérifie le localStorage pour savoir si l'utilisateur est connecté
        const userLoggedIn = localStorage.getItem("isLoggedIn") === "true";
        setIsLoggedIn(userLoggedIn);
    }, []);

    const logOut = () => {
        localStorage.setItem("isLoggedIn", "false");  // Met à jour le localStorage lors de la déconnexion
        setIsLoggedIn(false);  // Met l'état à false pour simuler la déconnexion
        navigate("/login");  // Redirige vers la page de connexion après la déconnexion
    };

    return (
        <nav className="nav">
            <div id={"left"}>
                <NavLink to={"/"}>
                    <img alt={"Logo"} src={"https://nird.forge.apps.education.fr/img/logo+text206px.png"} />
                </NavLink>
                <div id={"linksBar"}>
                    <NavLink to={"/scenarios"}>Scenarios</NavLink>
                    <a href={"https://nird.forge.apps.education.fr/"}>Notre site</a>
                    <a href={"https://edurl.fr/tchap-demarche-nird"}>Nous contacter</a>
                    {isLoggedIn ? (
                        <Button onClick={logOut}>Déconnexion</Button> // Affiche le bouton de déconnexion
                    ) : (
                        <NavLink to="/login">Connexion</NavLink> // Affiche le lien de connexion
                    )}
                </div>
            </div>
            <NavLink
                to="/chat"
                id={"right"}
                style={{
                    visibility: isOnChat ? "hidden" : "visible",
                    textDecoration: "none",
                    color: "inherit"
                }}
            >
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
