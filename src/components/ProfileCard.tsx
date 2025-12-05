import "./styles/ProfileCard.css";
import {NavLink} from "react-router";

interface ProfilDivProps {
    img: string;
    name: string
    url: string;
}

const ProfileCard = (e: ProfilDivProps) => {
    return (
        <NavLink to={e.url} style={{textDecoration: "none"}}>
            <div className={"ProfileCard"} style={{
                background: `url(${e.img}) center center no-repeat`,
            }}>
                <div>
                    <h2>Je suis</h2>
                    <h1>{e.name}</h1>
                </div>
            </div>
        </NavLink>
    );
};

export default ProfileCard;
