import "./styles/nav.css";

function Nav() {
  return (
    <nav className="nav">
        <div id={"left"}>
            <a href={"/"}>
                <img alt={"Logo"} src={"https://nird.forge.apps.education.fr/img/logo+text206px.png"} />
            </a>
            <div id={"linksBar"}>
                <a href={"/scenarios"}>Scenarios</a>
                <a href={"https://nird.forge.apps.education.fr/"}>Notre site</a>
                <a href={"/scenarios"}>Nous contacter</a>
                <a href={"/scenarios"}>Connexion</a>
            </div>
        </div>
        <div id={"right"}>

        </div>
    </nav>
  );
}

export default Nav;