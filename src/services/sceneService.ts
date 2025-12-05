import type { Scene } from "../types/scene";
import axios from "axios";

export function getScene(id : String) : Promise<Scene>{
    return axios.get(`localhost:8080/api/v1/scene/${id}`);
}