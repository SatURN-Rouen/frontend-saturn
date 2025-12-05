import { getProfiles } from "../services/profileService";

export async function getProfilesUI(){
    return await getProfiles();
}