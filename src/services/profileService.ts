import axios from "axios";
import type { Profil } from "../types/profil";

export async function getProfiles() : Promise<Profil[]>{
    const res = await axios.get<Profil[]>("/api/v1/profils");
    return res.data;
}

