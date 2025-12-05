import { getScenario } from "../services/scenarioService";

export async function getScenarioUI(id : string) {
    return await getScenario(id);
}