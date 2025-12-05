import axios from "axios";
import type { Profil } from "../types/profil";

export async function getProfiles() : Promise<Profil[]>{
    const res = await axios.get<Profil[]>("http://localhost:8080/api/v1/profile");
    return res.data;
}
