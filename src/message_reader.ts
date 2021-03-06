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
            case core.MessageType.getTileById:
                return Object.assign(new core.GetTileByIdMessage(), unreadMessage);
            case core.MessageType.returnTile:
                return Object.assign(new core.ReturnTileMessage(), unreadMessage);
            case core.MessageType.playAudioFile:
                return Object.assign(new core.PlayAudioFileMessage(), unreadMessage);
            case core.MessageType.pauseAudioFile:
                return Object.assign(new core.PauseCurrentAudioFileMessage(), unreadMessage);
            case core.MessageType.stopAudioFile:
                return Object.assign(new core.StopCurrentAudioFileMessage(), unreadMessage);
            case core.MessageType.songStatus:
                return Object.assign(new core.SongStatusMessage(), unreadMessage);
            case core.MessageType.obdReading:
                return Object.assign(new core.OBDReadingMessage(), unreadMessage);
            case core.MessageType.addUpdateTile:
                return Object.assign(new core.AddUpdateTileMessage(), unreadMessage);
            case core.MessageType.tileUpdated:
                return Object.assign(new core.TileUpdatedMessage(), unreadMessage);
        }
        throw new Error(`Unhandled message type ${core.MessageType[unreadMessage.type]}!`);
    }
}