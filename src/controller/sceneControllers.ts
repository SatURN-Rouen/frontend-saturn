import { Scene, Transition, Conclusion, InteractiveScene } from "../types/scene";
import { getScene } from "../services/sceneService";

export async function getSceneUI(id: string): Promise<Scene> {
  const data = await getScene(id);

  if (data.type === "Transition") {
    return new Transition(data);
  } else if (data.type === "Conclusion") {
    return new Conclusion(data);
  } else if (data.type === "InteractiveScene") {
    return new InteractiveScene(data);
  } else {
    throw new Error(`Type de scène inconnu: ${data.type}`);
  }
}
