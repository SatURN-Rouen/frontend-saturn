import type { Image } from "./image";
import type { Scenario } from "./scenario";

export type Profil = {
    id: String;
    name: String;
    icon: Image;
    scenarios: Scenario[];
}
