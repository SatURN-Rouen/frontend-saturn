import type { Cards } from "./card";
import type { ConnectTheDot } from "./ctd";
import type { QuizzReponses } from "./quizzReponse";
import type { Affirmation } from "./stf";


export abstract class Interaction {
    id : string;

    constructor(struct : Object) {
        this.id = struct.id;
    }
}
export class Quizz extends Interaction {
    question : string;
    reponses : QuizzReponses[];

    constructor(struct : Object) {
        super(struct);
        this.question = struct.question;
        this.reponses = struct.responses;
    }
} 
export class CTD extends Interaction {
    connect : ConnectTheDot[];

    constructor(struct : Object) {
        super(struct);
        this.connect = struct.connect;
    }
} 
export class STF extends Interaction {
    nextURL : string;
    affirmation : Affirmation[];

    constructor(struct : Object) {
        super(struct);
        this.nextURL = struct.nextURL;
        this.affirmation = struct.affirmation;
    }
} 
export class Card extends Interaction {
    cards : Cards[];

    constructor(struct : Object) {
        super(struct);
        this.cards = struct.cards;
    }
} 