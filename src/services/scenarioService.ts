import axios from "axios";
import type { Scenario } from "../types/scenario";


export function getScenario(id : String ) : Promise<Scenario>{
    return axios.get(`localhost:8080/api/v1/scenario/${id}`);
}