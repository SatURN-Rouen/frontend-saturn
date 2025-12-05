import axios from "axios";
import type { Scenario } from "../types/scenario";


export function getScenario(id : String ) : Promise<Scenario>{
    return axios.get(`/api/v1/scenario/${id}`);
}