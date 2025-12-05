import type { Image } from "./image";
import type { Interraction } from "./interraction";

export type Scene = {
    id : String;
    title : String;
    background : Image;
    illustration : Image;
    type : "Conclusion";
} | {
    id : String;
    title : String;
    background : Image;
    illustration : Image;
    type : "Transition";
    nextURL : String;
} | {
    
    id : String;
    title : String;
    background : Image;
    illustration : Image;
    type : "InterractiveScene";
    interraction : Interraction;
} 

