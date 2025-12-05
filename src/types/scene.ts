import type { Image } from "./image";
import type { Interaction } from "./interaction";

export abstract class Scene  {
    id : string;
    title : string;
    background : Image;
    illustration : Image;

    constructor(struct : Object) {
        this.id = struct.id;
        this.title = struct.title;
        this.background = struct.background;
        this.illustration = struct.illustration;
    }
} 
export class Transition extends Scene{
    nextURL : string;

    constructor(struct : Object) {
        super(struct);
        this.nextURL = struct.nextURL;
    }
}

export class Conclusion extends Scene{

    constructor(struct : Object) {
        super(struct);
    }
} 

export class InteractiveScene extends Scene{
    interaction : Interaction;

    constructor(struct : Object) {
        super(struct);
        this.interaction = struct.interaction;
    }
} 

