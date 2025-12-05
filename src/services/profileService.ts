import axios from "axios";
import type { Profil } from "../types/profil";


export function getProfiles() : Promise<Profil[]>{
    return axios.get("/api/v1/profils");
}

