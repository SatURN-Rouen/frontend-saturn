import type { Image } from "./image";
import type { Interraction } from "./interraction";

export type Scene = {
    id : string;
    title : string;
    background : Image;
    illustration : Image;
    type : "Conclusion";
} | {
    id : string;
    title : string;
    background : Image;
    illustration : Image;
    type : "Transition";
    nextURL : string;
} | {
    
    id : string;
    title : string;
    background : Image;
    illustration : Image;
    type : "InterractiveScene";
    interraction : Interraction;
} 

