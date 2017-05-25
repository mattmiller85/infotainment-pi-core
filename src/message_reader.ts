import { GreetingMessage } from './messages/greeting_message';
import { MessageBase } from './messages/message_base';
import { MessageType } from "./messages/message_type";

export class MessageReader {
    
    getMessage(message:any): MessageBase;
    getMessage(messageString:string): MessageBase;
    getMessage(unreadMessage:any): MessageBase{
        if(typeof unreadMessage == "string"){
            unreadMessage = JSON.parse(unreadMessage);
        }
        switch(unreadMessage.type){
            case MessageType.greetingFromServer:
                return Object.assign(new GreetingMessage(), unreadMessage);
        }
        throw new Error(`Unknown message type {unreadMessage.type}!`);
    }
}