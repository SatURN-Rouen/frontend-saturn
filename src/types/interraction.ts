import type { Card } from "./card";
import type { ConnectTheDot } from "./ctd";
import type { QuizzReponses } from "./quizzReponse";
import type { Affirmation } from "./stf";

export type Interraction =  {
    id : String;
    type : "QCM";
    question : string;
    reponses : QuizzReponses[];
} |
{
    id : String;
    type : "CTD";
    connects : ConnectTheDot[];
} |
{
    id : String;
    type : "STF";
    nextURL : string;
    affirmations : Affirmation[];
} |
{
    id : String;
    type : "Card";
    cards : Card[];
}