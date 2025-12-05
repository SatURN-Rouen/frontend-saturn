import type { Image } from "./image";
import type { Scenario } from "./scenario";

export type Profil = {
    id: string;
    name: string;
    image: Image;
    scenarios: Scenario[];
}
