import { MessageType } from "./message_type";

export abstract class MessageBase {
    /**
     *
     */
    constructor(public type:MessageType) {   
    }   
}