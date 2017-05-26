import * as core from '../core';

export class MessageReader {
    
    getMessage(message:any): core.MessageBase;
    getMessage(messageString:string): core.MessageBase;
    getMessage(unreadMessage:any): core.MessageBase{
        if(typeof unreadMessage == "string"){
            unreadMessage = JSON.parse(unreadMessage);
        }
        switch(unreadMessage.type){
            case core.MessageType.greetingFromServer:
                return Object.assign(new core.GreetingMessage(), unreadMessage);
            case core.MessageType.allTiles:
                return Object.assign(new core.ReturnAllTilesMessage(), unreadMessage);
            case core.MessageType.askForAllTiles:
                return Object.assign(new core.GetAllTilesMessage(), unreadMessage);
        }
        throw new Error(`Unhandled message type ${core.MessageType[unreadMessage.type]}!`);
    }
}