import type { Card } from "./card";
import type { ConnectTheDot } from "./ctd";
import type { QuizzReponses } from "./quizzReponse";
import type { Affirmation } from "./stf";

export type Interraction =  {
    type : "QCM";
    question : String;
    reponses : QuizzReponses[];
} |
{
    type : "CTD";
    connects : ConnectTheDot[];
} |
{
    type : "STF";
    nextURL : String;
    affirmations : Affirmation[];
} |
{
    type : "Card";
    cards : Card[];
}